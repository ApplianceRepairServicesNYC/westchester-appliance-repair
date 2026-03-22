import os
import time
import requests
from PIL import Image
from io import BytesIO
from duckduckgo_search import DDGS
import re

# ==========================
# CONFIG
# ==========================

APPLIANCES = [
    "washer",
    "dryer",
    "dishwasher",
    "microwave",
    "oven",
    "cooktop",
    "refrigerator",
    "hood"
]

OUTPUT_FOLDER = "assets/images/appliances"
SIZE = 600  # square size

# All 84 brands from sitemap
BRANDS = [
    "admiral", "aeg", "alliance-laundry-systems", "amana", "ariston", "asko",
    "avantgarde", "avanti", "beaumark", "bertazzoni", "black-decker", "blomberg",
    "bluestar", "bosch", "brada", "broan", "cafe", "capital-cooking", "cove",
    "crossover-commercial-laundry", "dacor", "danby", "dcs", "electrolux", "equator",
    "fisher-paykel", "five-star", "forno", "frigidaire", "fulgor-milano", "gaggenau",
    "galanz", "ge", "gibson", "haier", "hercules", "hestan", "hisense", "hobart",
    "hotpoint", "huebsch", "ikea", "inglis", "insignia", "jennair", "kenmore",
    "kitchenaid", "la-cornue", "lg", "liebherr", "magic-chef", "marvel", "maytag",
    "midea", "miele", "modern-maid", "moffat", "monogram", "northland-refrigeration",
    "panasonic", "panda", "porter-charles", "premier", "roper", "samsung", "sharp",
    "signature-kitchen-suite", "sirius", "smeg", "speedqueen", "subzero", "summit",
    "tappan", "thermador", "thor-kitchen", "true-residential", "venmar", "vent-a-hood",
    "viking", "wascomat", "westinghouse", "whirlpool", "wolf", "zline"
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "image/avif,image/webp,image/apng,*/*;q=0.8",
}

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# ==========================
# IMAGE SEARCH FUNCTIONS
# ==========================

def search_ddg(query, max_retries=3):
    """Search DuckDuckGo with retry logic."""
    for attempt in range(max_retries):
        try:
            with DDGS() as ddgs:
                results = ddgs.images(query, max_results=10)
                for r in results:
                    try:
                        url = r["image"]
                        response = requests.get(url, headers=HEADERS, timeout=10)
                        if response.status_code == 200:
                            return response.content
                    except:
                        continue
        except Exception as e:
            if "Ratelimit" in str(e):
                wait_time = (attempt + 1) * 10
                time.sleep(wait_time)
            else:
                break
    return None


def search_bing(query):
    """Fallback to Bing image search."""
    try:
        search_url = f"https://www.bing.com/images/search?q={requests.utils.quote(query)}&qft=+filterui:photo-photo&form=IRFLTR"
        response = requests.get(search_url, headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        }, timeout=10)

        html = response.text.replace("&quot;", '"').replace("&amp;", "&")
        pattern = r'murl":"(https?://[^"]+\.(?:jpg|jpeg|png|webp))'
        matches = re.findall(pattern, html, re.IGNORECASE)

        for url in matches[:10]:
            try:
                img_response = requests.get(url, headers=HEADERS, timeout=10)
                if img_response.status_code == 200:
                    return img_response.content
            except:
                continue
    except:
        pass
    return None


def search_image(query):
    """Try DDG first, fallback to Bing."""
    result = search_ddg(query)
    if result:
        return result
    return search_bing(query)


# ==========================
# IMAGE PROCESSING
# ==========================

def process_image(image_bytes):
    img = Image.open(BytesIO(image_bytes)).convert("RGB")

    # center crop to square
    width, height = img.size
    min_dim = min(width, height)

    left = (width - min_dim) / 2
    top = (height - min_dim) / 2
    right = (width + min_dim) / 2
    bottom = (height + min_dim) / 2

    img = img.crop((left, top, right, bottom))

    # resize
    img = img.resize((SIZE, SIZE))

    return img


# ==========================
# MAIN LOOP
# ==========================

total = len(BRANDS) * len(APPLIANCES)
count = 0
success = 0
failed = []

print(f"Generating {total} images ({len(BRANDS)} brands x {len(APPLIANCES)} appliances)")
print("=" * 60)

for brand in BRANDS:

    print(f"\n[{brand.upper().replace('-', ' ')}]")

    for appliance in APPLIANCES:

        count += 1
        filename = f"{brand}-{appliance}.webp"
        path = os.path.join(OUTPUT_FOLDER, filename)

        if os.path.exists(path):
            print(f"  {appliance}: SKIP (exists)")
            success += 1
            continue

        query = f"{brand.replace('-', ' ')} {appliance} appliance product white background"

        print(f"  {appliance}: ", end="", flush=True)

        image_bytes = search_image(query)

        if image_bytes:
            try:
                img = process_image(image_bytes)
                img.save(path, "WEBP", quality=85)
                size_kb = os.path.getsize(path) / 1024
                print(f"OK ({size_kb:.0f}KB)")
                success += 1
            except Exception as e:
                print(f"FAIL (processing)")
                failed.append(filename)
        else:
            print("FAIL (no image)")
            failed.append(filename)

        # Rate limiting - wait between requests
        time.sleep(2)

print("\n" + "=" * 60)
print("SUMMARY")
print("=" * 60)
print(f"Total: {total}")
print(f"Success: {success}")
print(f"Failed: {len(failed)}")

if failed:
    print(f"\nFailed images:")
    for f in failed:
        print(f"  {f}")

print("\nDone.")

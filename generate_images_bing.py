import os
import time
import requests
import re
from PIL import Image
from io import BytesIO

# ==========================
# CONFIG
# ==========================

APPLIANCES = ["washer", "dryer", "dishwasher", "microwave", "oven", "cooktop", "refrigerator", "hood"]

OUTPUT_FOLDER = "assets/images/appliances"
SIZE = 600

# All 84 brands
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
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
}

os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def search_bing(query):
    """Search Bing for product images."""
    try:
        search_url = f"https://www.bing.com/images/search?q={requests.utils.quote(query)}&qft=+filterui:photo-photo+filterui:imagesize-large&form=IRFLTR"
        response = requests.get(search_url, headers=HEADERS, timeout=15)
        html = response.text.replace("&quot;", '"').replace("&amp;", "&")
        pattern = r'murl":"(https?://[^"]+\.(?:jpg|jpeg|png|webp))'
        return re.findall(pattern, html, re.IGNORECASE)[:10]
    except:
        return []


def download_image(url):
    """Download image from URL."""
    try:
        response = requests.get(url, headers={
            "User-Agent": HEADERS["User-Agent"],
            "Accept": "image/avif,image/webp,image/apng,*/*;q=0.8",
        }, timeout=10)
        if response.status_code == 200:
            return response.content
    except:
        pass
    return None


def process_image(image_bytes):
    """Process image: center crop to square and resize."""
    img = Image.open(BytesIO(image_bytes)).convert("RGB")

    width, height = img.size
    min_dim = min(width, height)

    left = (width - min_dim) / 2
    top = (height - min_dim) / 2
    right = (width + min_dim) / 2
    bottom = (height + min_dim) / 2

    img = img.crop((left, top, right, bottom))
    img = img.resize((SIZE, SIZE), Image.LANCZOS)

    return img


def generate_image(brand, appliance):
    """Generate image for brand + appliance."""
    brand_display = brand.replace("-", " ")
    query = f"{brand_display} {appliance} appliance product white background"

    urls = search_bing(query)

    for url in urls:
        image_bytes = download_image(url)
        if image_bytes:
            try:
                img = process_image(image_bytes)
                return img
            except:
                continue

    return None


# ==========================
# MAIN
# ==========================

total = len(BRANDS) * len(APPLIANCES)
success = 0
failed = []

print(f"Generating {total} images ({len(BRANDS)} brands x {len(APPLIANCES)} appliances)")
print("=" * 60)

for brand in BRANDS:
    print(f"\n[{brand.upper().replace('-', ' ')}]")

    for appliance in APPLIANCES:
        filename = f"{brand}-{appliance}.webp"
        path = os.path.join(OUTPUT_FOLDER, filename)

        if os.path.exists(path):
            print(f"  {appliance}: SKIP")
            success += 1
            continue

        print(f"  {appliance}: ", end="", flush=True)

        img = generate_image(brand, appliance)

        if img:
            img.save(path, "WEBP", quality=85)
            size_kb = os.path.getsize(path) / 1024
            print(f"OK ({size_kb:.0f}KB)")
            success += 1
        else:
            print("FAIL")
            failed.append(filename)

        time.sleep(0.5)

print("\n" + "=" * 60)
print(f"Success: {success}/{total}")
print(f"Failed: {len(failed)}")
if failed:
    print("\nFailed:")
    for f in failed[:20]:
        print(f"  {f}")
print("\nDone.")

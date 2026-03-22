import os
import time
import requests
from PIL import Image
from io import BytesIO
from serpapi import GoogleSearch
from rembg import remove

# ==========================
# CONFIG
# ==========================

SERPAPI_KEY = "039b422479eb37e014b4dd3c411bf01a0fdcdd59dfa948fafd7b2aa0919307ff"

APPLIANCES = ["washer", "dryer", "dishwasher", "microwave", "oven", "cooktop", "refrigerator", "hood"]

OUTPUT_FOLDER = "assets/images/appliances"
SIZE = 600
WHITE = (255, 255, 255)

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
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "image/avif,image/webp,image/apng,*/*;q=0.8",
}

os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def search_google_images(query):
    """Search Google Images via SerpAPI."""
    try:
        params = {
            "q": query,
            "tbm": "isch",
            "ijn": "0",
            "api_key": SERPAPI_KEY
        }
        search = GoogleSearch(params)
        results = search.get_dict()

        if "images_results" in results:
            return [img["original"] for img in results["images_results"][:15]]
    except Exception as e:
        print(f"[API Error]", end=" ")
    return []


def download_image(url):
    """Download image from URL."""
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200 and len(response.content) > 5000:
            return response.content
    except:
        pass
    return None


def has_white_background(img):
    """Check if image has white/light background in corners."""
    if img.mode != 'RGB':
        img = img.convert('RGB')

    w, h = img.size
    corners = [(5, 5), (w-5, 5), (5, h-5), (w-5, h-5)]

    white_count = 0
    for x, y in corners:
        r, g, b = img.getpixel((x, y))
        if r > 240 and g > 240 and b > 240:
            white_count += 1

    return white_count >= 3


def remove_background_and_center(img):
    """Remove background using rembg and place on white canvas."""
    try:
        # Convert to bytes for rembg
        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)

        # Remove background
        output = remove(buffer.read())
        img_nobg = Image.open(BytesIO(output)).convert('RGBA')

        # Get bounding box of non-transparent area
        bbox = img_nobg.split()[3].getbbox()
        if bbox:
            # Crop to content
            img_cropped = img_nobg.crop(bbox)

            # Calculate size to fill ~80% of canvas
            cw, ch = img_cropped.size
            target = int(SIZE * 0.80)

            if cw > ch:
                new_w = target
                new_h = int(ch * (target / cw))
            else:
                new_h = target
                new_w = int(cw * (target / ch))

            img_resized = img_cropped.resize((new_w, new_h), Image.LANCZOS)

            # Create white canvas and paste centered
            canvas = Image.new('RGB', (SIZE, SIZE), WHITE)
            x = (SIZE - new_w) // 2
            y = (SIZE - new_h) // 2
            canvas.paste(img_resized, (x, y), img_resized.split()[3])

            return canvas
    except Exception as e:
        pass
    return None


def process_image(image_bytes):
    """Process image to 600x600 with white background."""
    try:
        img = Image.open(BytesIO(image_bytes)).convert("RGB")

        # Skip tiny images
        if img.width < 200 or img.height < 200:
            return None

        # If already has white background, just crop and resize
        if has_white_background(img):
            # Center crop to square
            w, h = img.size
            min_dim = min(w, h)
            left = (w - min_dim) // 2
            top = (h - min_dim) // 2
            img = img.crop((left, top, left + min_dim, top + min_dim))
            img = img.resize((SIZE, SIZE), Image.LANCZOS)
            return img

        # Otherwise, remove background and place on white
        return remove_background_and_center(img)

    except:
        return None


def generate_image(brand, appliance):
    """Generate clean catalog image for brand + appliance."""
    brand_display = brand.replace("-", " ")

    # Search queries optimized for catalog product images
    queries = [
        f"{brand_display} {appliance} product photo white background",
        f"{brand_display} {appliance} appliance",
    ]

    for query in queries:
        urls = search_google_images(query)

        for url in urls:
            image_bytes = download_image(url)
            if image_bytes:
                img = process_image(image_bytes)
                if img:
                    return img

    return None


# ==========================
# MAIN
# ==========================

total = len(BRANDS) * len(APPLIANCES)
success = 0
failed = []

print(f"Generating {total} clean catalog images")
print(f"Output: {SIZE}x{SIZE} white background")
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

        time.sleep(0.3)

print("\n" + "=" * 60)
print(f"Success: {success}/{total}")
print(f"Failed: {len(failed)}")

if failed:
    print(f"\nFailed ({len(failed)}):")
    for f in failed[:30]:
        print(f"  {f}")

print("\nDone.")

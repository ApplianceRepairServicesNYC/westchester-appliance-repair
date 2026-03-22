#!/usr/bin/env python3
"""
Appliance Image Generator - Clean Product Thumbnails

Creates standardized appliance thumbnails:
- Single appliance centered
- Square image (600x600)
- White background
- Appliance fills ~70% of frame
- WEBP format, under 100KB
"""

import os
import re
import time
import requests
from PIL import Image
from io import BytesIO
from rembg import remove

# Configuration
OUTPUT_DIR = "assets/images/appliances"
CANVAS_SIZE = 600
TARGET_FILL = 0.70  # Appliance fills 70% of frame
MAX_FILE_SIZE_KB = 100
BACKGROUND_COLOR = (255, 255, 255)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "image/avif,image/webp,image/apng,*/*;q=0.8",
}

APPLIANCES = ["washer", "dryer", "dishwasher", "microwave", "oven", "cooktop", "refrigerator", "hood"]

# Brand name formatting
BRAND_DISPLAY = {
    "lg": "LG", "ge": "GE", "dcs": "DCS", "aeg": "AEG",
    "subzero": "Sub-Zero", "sub-zero": "Sub-Zero",
    "kitchenaid": "KitchenAid", "jenn-air": "JennAir",
    "fisher-paykel": "Fisher & Paykel",
}


def format_brand(brand):
    """Format brand name for display."""
    key = brand.lower().replace("-", "")
    if key in BRAND_DISPLAY:
        return BRAND_DISPLAY[key]
    return brand.replace("-", " ").title()


def search_product_image(brand, appliance):
    """Search for product images from retail sites."""
    brand_display = format_brand(brand)
    queries = [
        f"{brand_display} {appliance} product white background",
        f"{brand_display} {appliance} appliance",
        f"{brand_display} {appliance} site:homedepot.com OR site:lowes.com OR site:ajmadison.com",
    ]

    all_urls = []
    for query in queries:
        try:
            search_url = f"https://www.bing.com/images/search?q={requests.utils.quote(query)}&qft=+filterui:photo-photo+filterui:imagesize-large&form=IRFLTR"
            response = requests.get(search_url, headers=HEADERS, timeout=10)
            html = response.text.replace("&quot;", '"').replace("&amp;", "&")
            pattern = r'murl":"(https?://[^"]+\.(?:jpg|jpeg|png|webp))'
            matches = re.findall(pattern, html, re.IGNORECASE)
            all_urls.extend(matches[:5])
        except:
            pass

    # Remove duplicates while preserving order
    seen = set()
    unique = []
    for url in all_urls:
        if url not in seen:
            seen.add(url)
            unique.append(url)
    return unique[:10]


def download_image(url):
    """Download image from URL."""
    try:
        response = requests.get(url, headers=HEADERS, timeout=15)
        if response.status_code != 200:
            return None
        img = Image.open(BytesIO(response.content))
        # Skip tiny images
        if img.width < 200 or img.height < 200:
            return None
        return img
    except:
        return None


def remove_background(img):
    """Remove background using rembg."""
    try:
        # Convert to bytes
        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)

        # Remove background
        output = remove(buffer.read())
        return Image.open(BytesIO(output)).convert('RGBA')
    except:
        return None


def get_object_bounds(img):
    """Get bounding box of non-transparent pixels."""
    if img.mode != 'RGBA':
        return (0, 0, img.width, img.height)

    alpha = img.split()[3]
    bbox = alpha.getbbox()
    return bbox if bbox else (0, 0, img.width, img.height)


def create_centered_thumbnail(img):
    """
    Create a centered square thumbnail:
    1. Remove background
    2. Detect object bounds
    3. Crop to object
    4. Center on white 600x600 canvas
    5. Scale to fill ~70% of frame
    """
    # Remove background
    img_nobg = remove_background(img)
    if img_nobg is None:
        return None

    # Get object bounds
    bbox = get_object_bounds(img_nobg)
    if bbox is None:
        return None

    # Crop to object with small padding
    left, top, right, bottom = bbox
    padding = 10
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(img_nobg.width, right + padding)
    bottom = min(img_nobg.height, bottom + padding)

    cropped = img_nobg.crop((left, top, right, bottom))

    # Calculate target size (70% of canvas)
    target_size = int(CANVAS_SIZE * TARGET_FILL)

    # Scale to fit within target size while maintaining aspect ratio
    w, h = cropped.size
    if w > h:
        new_w = target_size
        new_h = int(h * (target_size / w))
    else:
        new_h = target_size
        new_w = int(w * (target_size / h))

    scaled = cropped.resize((new_w, new_h), Image.LANCZOS)

    # Create white canvas
    canvas = Image.new('RGB', (CANVAS_SIZE, CANVAS_SIZE), BACKGROUND_COLOR)

    # Center the appliance
    x = (CANVAS_SIZE - new_w) // 2
    y = (CANVAS_SIZE - new_h) // 2

    # Paste with transparency mask
    canvas.paste(scaled, (x, y), scaled.split()[3])

    return canvas


def save_webp(img, filepath, max_kb=MAX_FILE_SIZE_KB):
    """Save as WEBP, compress to target size."""
    quality = 90
    while quality >= 20:
        buffer = BytesIO()
        img.save(buffer, format='WEBP', quality=quality, method=6)
        size_kb = buffer.tell() / 1024

        if size_kb <= max_kb:
            with open(filepath, 'wb') as f:
                f.write(buffer.getvalue())
            return size_kb, quality

        quality -= 5

    # Save at minimum quality if still too large
    buffer = BytesIO()
    img.save(buffer, format='WEBP', quality=20, method=6)
    with open(filepath, 'wb') as f:
        f.write(buffer.getvalue())
    return buffer.tell() / 1024, 20


def process_brand_appliance(brand, appliance, output_dir):
    """Generate clean thumbnail for brand + appliance."""
    filename = f"{brand}-{appliance}.webp"
    filepath = os.path.join(output_dir, filename)

    # Search for images
    urls = search_product_image(brand, appliance)
    if not urls:
        return False, "No images found"

    # Try each URL
    for url in urls:
        try:
            # Download
            img = download_image(url)
            if img is None:
                continue

            # Create centered thumbnail
            thumbnail = create_centered_thumbnail(img)
            if thumbnail is None:
                continue

            # Save
            size_kb, quality = save_webp(thumbnail, filepath)
            return True, f"{size_kb:.0f}KB q={quality}"

        except Exception as e:
            continue

    return False, "Processing failed"


def get_brands_from_sitemap():
    """Extract brand names from sitemap."""
    try:
        response = requests.get("https://westchestercountyappliancerepair.com/sitemap.xml", timeout=30)
        brands = set()
        for match in re.findall(r'https?://([^.]+)\.westchestercountyappliancerepair\.com', response.text):
            if match not in ['www', 'westchestercountyappliancerepair']:
                brands.add(match)
        return sorted(brands)
    except:
        return []


def check_needs_update(filepath):
    """Check if image needs updating (not white background or wrong size)."""
    try:
        img = Image.open(filepath)
        # Check size
        if img.size != (CANVAS_SIZE, CANVAS_SIZE):
            return True
        # Check corners for white
        img = img.convert('RGB')
        corners = [(5,5), (594,5), (5,594), (594,594)]
        for x, y in corners:
            r, g, b = img.getpixel((x, y))
            if r < 250 or g < 250 or b < 250:
                return True
        return False
    except:
        return True


def main():
    """Main execution."""
    print("=" * 60)
    print("CLEAN APPLIANCE THUMBNAIL GENERATOR")
    print("=" * 60)
    print(f"Output: {CANVAS_SIZE}x{CANVAS_SIZE} WEBP, <{MAX_FILE_SIZE_KB}KB")
    print(f"Style: Centered, white background, 70% fill")
    print()

    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Get brands
    brands = get_brands_from_sitemap()
    if not brands:
        # Fallback to directory scan
        for f in os.listdir(OUTPUT_DIR):
            if f.endswith('.webp') and '-' in f:
                brand = f.rsplit('-', 1)[0]
                brands.append(brand)
        brands = sorted(set(brands))

    print(f"Found {len(brands)} brands")
    print(f"Appliances per brand: {len(APPLIANCES)}")
    print(f"Total images: {len(brands) * len(APPLIANCES)}")
    print()

    # Process
    success = 0
    failed = []
    skipped = 0

    for brand in brands:
        print(f"\n[{format_brand(brand).upper()}]")

        for appliance in APPLIANCES:
            filename = f"{brand}-{appliance}.webp"
            filepath = os.path.join(OUTPUT_DIR, filename)

            # Check if needs update
            if os.path.exists(filepath) and not check_needs_update(filepath):
                print(f"  {appliance}: SKIP (already clean)")
                skipped += 1
                continue

            print(f"  {appliance}: ", end="", flush=True)
            ok, msg = process_brand_appliance(brand, appliance, OUTPUT_DIR)

            if ok:
                print(f"OK ({msg})")
                success += 1
            else:
                print(f"FAIL ({msg})")
                failed.append(filename)

            time.sleep(0.5)

    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Success: {success}")
    print(f"Skipped: {skipped}")
    print(f"Failed: {len(failed)}")

    if failed:
        print(f"\nFailed images ({len(failed)}):")
        for f in failed[:20]:
            print(f"  {f}")
        if len(failed) > 20:
            print(f"  ... and {len(failed) - 20} more")


if __name__ == "__main__":
    main()

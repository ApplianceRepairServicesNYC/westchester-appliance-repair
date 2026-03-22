#!/usr/bin/env python3
"""
Appliance Product Image Scraper
Directly scrapes retailer websites - no search APIs.
"""

import os
import re
import time
import requests
import xml.etree.ElementTree as ET
from urllib.parse import urlparse, quote
from io import BytesIO
from PIL import Image
from bs4 import BeautifulSoup

# ==========================
# CONFIGURATION
# ==========================

SITEMAP_URL = "https://bergencountyappliancesrepair.com/sitemap.xml"
OUTPUT_DIR = "appliance_images"

APPLIANCE_TYPES = [
    "washer",
    "dryer",
    "dishwasher",
    "microwave",
    "oven",
    "cooktop",
    "refrigerator",
    "range hood"
]

MIN_WIDTH = 800
OUTPUT_QUALITY = 85
BACKGROUND_COLOR = (255, 255, 255)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}


# ==========================
# SITEMAP PARSING
# ==========================

def fetch_sitemap(url):
    print(f"Fetching sitemap: {url}")
    response = requests.get(url, headers=HEADERS, timeout=30)
    response.raise_for_status()
    return response.text


def extract_brands_from_sitemap(sitemap_xml):
    root = ET.fromstring(sitemap_xml)
    namespace = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    brands = set()

    for url_elem in root.findall("ns:url", namespace):
        loc = url_elem.find("ns:loc", namespace)
        if loc is not None and loc.text:
            parsed = urlparse(loc.text)
            hostname = parsed.hostname
            if hostname and "bergencountyappliancesrepair.com" in hostname:
                parts = hostname.split(".")
                if len(parts) > 2:
                    brand = parts[0]
                    if brand not in ["www", "bergencountyappliancesrepair"]:
                        brands.add(brand)

    return sorted(list(brands))


def format_brand_name(brand):
    special = {
        "lg": "LG", "ge": "GE", "dcs": "DCS", "aeg": "AEG",
        "subzero": "Sub-Zero", "kitchenaid": "KitchenAid",
        "jenn-air": "JennAir", "jennair": "JennAir",
        "fisher-paykel": "Fisher Paykel", "la-cornue": "La Cornue",
    }
    key = brand.lower().replace("-", "")
    if key in special:
        return special[key]
    return brand.replace("-", " ").title()


# ==========================
# RETAILER SCRAPERS
# ==========================

def scrape_ajmadison(brand, appliance):
    """Scrape AJ Madison product images."""
    images = []
    try:
        brand_display = format_brand_name(brand)
        search_url = f"https://www.ajmadison.com/cgi-bin/ajmadison/search.html?keyword={quote(f'{brand_display} {appliance}')}"

        response = requests.get(search_url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find product images
        for img in soup.find_all('img', class_=re.compile(r'product|item|thumb', re.I)):
            src = img.get('src') or img.get('data-src') or ''
            if src and any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                if src.startswith('//'):
                    src = 'https:' + src
                images.append(src)

        # Also check for lazy-loaded images
        for img in soup.find_all('img'):
            src = img.get('data-original') or img.get('data-lazy') or ''
            if src and 'ajmadison' in src:
                images.append(src)

    except Exception as e:
        pass
    return images[:10]


def scrape_appliancesconnection(brand, appliance):
    """Scrape Appliances Connection product images."""
    images = []
    try:
        brand_display = format_brand_name(brand)
        search_url = f"https://www.appliancesconnection.com/search?q={quote(f'{brand_display} {appliance}')}"

        response = requests.get(search_url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')

        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or ''
            if 'appliancesconnection' in src or 'product' in src.lower():
                if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    images.append(src)

    except Exception as e:
        pass
    return images[:10]


def scrape_homedepot(brand, appliance):
    """Scrape Home Depot product images."""
    images = []
    try:
        brand_display = format_brand_name(brand)
        search_url = f"https://www.homedepot.com/s/{quote(f'{brand_display} {appliance}')}"

        response = requests.get(search_url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')

        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or ''
            if src and ('homedepotimages' in src or 'images.homedepot' in src):
                if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    # Get larger version
                    src = re.sub(r'_\d+\.', '_600.', src)
                    images.append(src)

    except Exception as e:
        pass
    return images[:10]


def scrape_lowes(brand, appliance):
    """Scrape Lowes product images."""
    images = []
    try:
        brand_display = format_brand_name(brand)
        search_url = f"https://www.lowes.com/search?searchTerm={quote(f'{brand_display} {appliance}')}"

        response = requests.get(search_url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')

        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or ''
            if src and ('lowes.com' in src or 'mobileimages' in src):
                if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    images.append(src)

    except Exception as e:
        pass
    return images[:10]


def scrape_bestbuy(brand, appliance):
    """Scrape Best Buy product images."""
    images = []
    try:
        brand_display = format_brand_name(brand)
        search_url = f"https://www.bestbuy.com/site/searchpage.jsp?st={quote(f'{brand_display} {appliance}')}"

        response = requests.get(search_url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')

        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or ''
            if src and 'bestbuy' in src:
                if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    images.append(src)

    except Exception as e:
        pass
    return images[:10]


def scrape_grainger(brand, appliance):
    """Scrape Grainger product images."""
    images = []
    try:
        brand_display = format_brand_name(brand)
        search_url = f"https://www.grainger.com/search?searchQuery={quote(f'{brand_display} {appliance}')}"

        response = requests.get(search_url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')

        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or ''
            if src and ('grainger' in src or 'product' in src.lower()):
                if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    images.append(src)

    except Exception as e:
        pass
    return images[:10]


def search_all_retailers(brand, appliance):
    """Search all retailer sites for product images."""
    all_urls = []

    scrapers = [
        ("AJ Madison", scrape_ajmadison),
        ("Appliances Connection", scrape_appliancesconnection),
        ("Home Depot", scrape_homedepot),
        ("Lowes", scrape_lowes),
        ("Best Buy", scrape_bestbuy),
        ("Grainger", scrape_grainger),
    ]

    for name, scraper in scrapers:
        try:
            urls = scraper(brand, appliance)
            if urls:
                all_urls.extend(urls)
        except:
            pass
        time.sleep(0.5)

    # Remove duplicates
    seen = set()
    unique = []
    for url in all_urls:
        if url not in seen and url.startswith('http'):
            seen.add(url)
            unique.append(url)

    return unique


# ==========================
# IMAGE PROCESSING
# ==========================

def download_image(url):
    try:
        img_headers = {
            "User-Agent": HEADERS["User-Agent"],
            "Accept": "image/avif,image/webp,image/apng,*/*;q=0.8",
        }
        response = requests.get(url, headers=img_headers, timeout=15)
        if response.status_code == 200 and len(response.content) > 5000:
            return response.content
    except:
        pass
    return None


def has_white_background(img):
    if img.mode != 'RGB':
        img = img.convert('RGB')

    w, h = img.size
    corners = [(5, 5), (w-5, 5), (5, h-5), (w-5, h-5)]

    white_count = 0
    for x, y in corners:
        try:
            r, g, b = img.getpixel((x, y))
            if r > 235 and g > 235 and b > 235:
                white_count += 1
        except:
            pass

    return white_count >= 3


def is_valid_product_image(img):
    if img.width < 300 or img.height < 300:
        return False
    ratio = img.width / img.height
    if ratio > 3 or ratio < 0.3:
        return False
    return True


def process_image(image_bytes):
    try:
        img = Image.open(BytesIO(image_bytes))

        if img.mode in ('RGBA', 'P'):
            background = Image.new('RGB', img.size, BACKGROUND_COLOR)
            if img.mode == 'RGBA':
                background.paste(img, mask=img.split()[3])
            else:
                img = img.convert('RGBA')
                background.paste(img, mask=img.split()[3])
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        if not is_valid_product_image(img):
            return None

        if img.width < MIN_WIDTH:
            ratio = MIN_WIDTH / img.width
            new_height = int(img.height * ratio)
            img = img.resize((MIN_WIDTH, new_height), Image.LANCZOS)

        max_dim = 1200
        if img.width > max_dim or img.height > max_dim:
            ratio = max_dim / max(img.width, img.height)
            new_size = (int(img.width * ratio), int(img.height * ratio))
            img = img.resize(new_size, Image.LANCZOS)

        return img
    except:
        return None


def save_as_webp(img, filepath):
    try:
        img.save(filepath, "WEBP", quality=OUTPUT_QUALITY)
        return os.path.getsize(filepath) / 1024
    except:
        return None


# ==========================
# MAIN SCRAPER
# ==========================

def scrape_brand_appliance(brand, appliance, output_folder):
    urls = search_all_retailers(brand, appliance)

    if not urls:
        return False, "No images"

    best_img = None

    for url in urls[:20]:
        image_bytes = download_image(url)
        if not image_bytes:
            continue

        img = process_image(image_bytes)
        if not img:
            continue

        if has_white_background(img):
            filename = f"{appliance.replace(' ', '_')}.webp"
            filepath = os.path.join(output_folder, filename)
            size_kb = save_as_webp(img, filepath)
            if size_kb:
                return True, f"{size_kb:.0f}KB"

        if not best_img:
            best_img = img

    if best_img:
        filename = f"{appliance.replace(' ', '_')}.webp"
        filepath = os.path.join(output_folder, filename)
        size_kb = save_as_webp(best_img, filepath)
        if size_kb:
            return True, f"{size_kb:.0f}KB*"

    return False, "Failed"


def main():
    print("=" * 60)
    print("APPLIANCE IMAGE SCRAPER (Direct Retailer)")
    print("=" * 60)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    try:
        sitemap_xml = fetch_sitemap(SITEMAP_URL)
        brands = extract_brands_from_sitemap(sitemap_xml)
    except Exception as e:
        print(f"Error: {e}")
        return

    print(f"\nBrands: {len(brands)}")
    print(f"Appliances: {len(APPLIANCE_TYPES)}")
    print(f"Total: {len(brands) * len(APPLIANCE_TYPES)} images")
    print(f"Retailers: AJ Madison, Appliances Connection, Home Depot, Lowes, Best Buy, Grainger")
    print()

    total = len(brands) * len(APPLIANCE_TYPES)
    success = 0
    failed = []

    for brand in brands:
        brand_display = format_brand_name(brand)
        brand_folder = os.path.join(OUTPUT_DIR, brand_display.replace(" ", "_"))
        os.makedirs(brand_folder, exist_ok=True)

        print(f"\n[{brand_display.upper()}]")

        for appliance in APPLIANCE_TYPES:
            filename = f"{appliance.replace(' ', '_')}.webp"
            filepath = os.path.join(brand_folder, filename)

            if os.path.exists(filepath):
                print(f"  {appliance}: SKIP")
                success += 1
                continue

            print(f"  {appliance}: ", end="", flush=True)

            ok, msg = scrape_brand_appliance(brand, appliance, brand_folder)

            if ok:
                print(f"OK ({msg})")
                success += 1
            else:
                print(f"FAIL")
                failed.append(f"{brand}_{appliance}")

            time.sleep(1.5)

    print("\n" + "=" * 60)
    print(f"Success: {success}/{total}")
    print(f"Failed: {len(failed)}")
    print(f"Output: {os.path.abspath(OUTPUT_DIR)}")
    print("Done.")


if __name__ == "__main__":
    main()

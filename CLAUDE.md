# Project Notes

## Current Setup (Completed)
- **Domain:** westchestercountyappliancerepair.com
- **Structure:** 84 brand subdomains via middleware
- **Middleware:** functions/_middleware.js
- **Status:** 100% validated, all 85 sites live

---

## How the Subdomain Sites Were Built

### Step 1: Project Structure
```
westchester-appliance-repair/
├── index.html              ← Base HTML template
├── sitemap.xml             ← Lists all 85 URLs
├── robots.txt              ← Points to sitemap
├── functions/
│   └── _middleware.js      ← Transforms page per subdomain
└── (images, css, etc.)
```

### Step 2: Middleware Logic (functions/_middleware.js)
```javascript
export async function onRequest(context) {
  const response = await context.next();
  const url = new URL(context.request.url);

  // Get subdomain (e.g., "samsung" from samsung.domain.com)
  const hostname = url.hostname;
  const subdomain = hostname.split('.')[0];

  // Brand data object with 84 entries
  const brandData = {
    'samsung': {
      name: 'Samsung',
      heroTitle: 'Samsung Appliance Repair',
      about: 'Samsung content here...',
      specialty: 'Smart appliances...',
      commonIssues: 'Issue 1, Issue 2...',
      whyChoose: 'Why choose us for Samsung...'
    },
    'lg': { ... },
    'whirlpool': { ... },
    // ... 84 total brands
  };

  // Get brand or default to main site
  const brand = brandData[subdomain] || defaultBrand;

  // Get HTML and transform
  let html = await response.text();

  // Replace placeholders throughout HTML
  html = html.replace(/Westchester County Appliance Repair/g, brand.heroTitle);
  html = html.replace(/<title>.*<\/title>/, `<title>${brand.heroTitle}</title>`);
  html = html.replace(/BRAND_ABOUT_CONTENT/g, brand.about);
  // ... more replacements

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}
```

### Step 3: Brand-Specific Model Numbers
```javascript
const brandModels = {
  'samsung': {
    ovens: ['NE63A6511SS', 'NV51K6650SS', 'NE59T4311SS'],
    refrigerators: ['RF28R7351SR', 'RS27T5200SR'],
    washers: ['WF45R6100AW', 'WF45T6000AW'],
    // ... all appliance types
  },
  'lg': { ... },
  // Brands without specific models get generic placeholders
  // e.g., "Admiral-OV001", "Admiral-RF001"
};

// Replace base Whirlpool models with brand-specific ones
html = html.replace(/<li>WFE505W0JZ<\/li>/g, `<li>${models.ovens[0]}</li>`);
```

### Step 4: Deployment
```bash
# Login to Cloudflare
npx wrangler login

# Deploy (from project folder)
npx wrangler pages deploy . --project-name=westchester-appliance-repair
```

### Step 5: Custom Domain Setup (Cloudflare Dashboard)
1. Go to Pages > your project > Custom domains
2. Add root domain: `westchestercountyappliancerepair.com`
3. Add wildcard: `*.westchestercountyappliancerepair.com`
4. Update DNS nameservers to Cloudflare

### Step 6: Bulk Subdomain Registration (API Script)
```bash
#!/bin/bash
brands=(samsung lg whirlpool ge frigidaire bosch ... )

for brand in "${brands[@]}"; do
  curl -X POST "https://api.cloudflare.com/client/v4/accounts/ACCOUNT_ID/pages/projects/PROJECT_NAME/domains" \
    -H "X-Auth-Email: your@email.com" \
    -H "X-Auth-Key: YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    --data "{\"name\":\"${brand}.yourdomain.com\"}"
done
```

### Key Files Reference
- **Middleware:** `/Users/globalaffiliate/westchester-appliance-repair/functions/_middleware.js`
- **Bergen reference:** `/Users/globalaffiliate/bergen-county-appliance-repair/`
- **Subdomain script:** `/tmp/add_subdomains.sh`

---

## Next Project: Texas Lead Gen

### Strategy
Subdomain + city pages for maximum scale:
```
ge.texasappliancerepair.com/dallas
samsung.texasappliancerepair.com/houston
thermador.texasappliancerepair.com/austin
```

### Enhanced Middleware for Brand + City
```javascript
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Get brand from subdomain
  const brand = url.hostname.split('.')[0];  // "ge"

  // Get city from path
  const path = url.pathname;  // "/dallas"
  const city = path.split('/')[1] || 'texas';  // "dallas" or default

  // City data
  const cityData = {
    'dallas': {
      name: 'Dallas',
      state: 'TX',
      zips: ['75201', '75202', '75203', ...],
      neighborhoods: ['Downtown', 'Uptown', 'Oak Lawn', ...]
    },
    'houston': { ... },
    // 25 Texas cities
  };

  // Transform for both brand AND city
  html = html.replace(/BRAND_NAME/g, brandData[brand].name);
  html = html.replace(/CITY_NAME/g, cityData[city].name);
  html = html.replace(/ZIP_CODES/g, cityData[city].zips.join(', '));
}
```

### Scale
- 84 brands x 25 cities = 2,100 unique pages
- 1 domain ($12/year), 1 deployment

### Texas Cities (25)
Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, Laredo, Lubbock, Garland, Irving, Frisco, McKinney, Amarillo, Grand Prairie, Brownsville, Killeen, Pasadena, McAllen, Mesquite, Midland, Denton, Waco

### Revenue Projection
- $32.50 per lead
- Conservative: $8,700/month (5 cities active)
- Target luxury brands first (Sub-Zero, Viking, Thermador, Wolf, Miele)

### To Build Tomorrow
1. Clone westchester setup
2. Update middleware for brand + city routing
3. Add Texas cities data (zips, neighborhoods)
4. Create city pages in HTML or handle via middleware
5. Deploy to texasappliancerepair.com

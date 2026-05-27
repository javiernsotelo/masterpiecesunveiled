# MasterpiecesUnveiled

Art and history blog. Built with pure HTML, CSS, and vanilla JavaScript. Zero monthly hosting costs when deployed on GitHub Pages.

---

## Folder structure

```
masterpiecesunveiled/
├── index.html          ← Homepage
├── style.css           ← All styles (edit colours/fonts here)
├── main.js             ← Dark mode, mobile menu, TOC, read time
└── posts/
    ├── las-meninas-velazquez.html   ← Example completed article
    └── template.html               ← Blank template for new articles
```

---

## Deploy free on GitHub Pages (5 steps)

1. Go to [github.com](https://github.com) and create a free account
2. Click **+** (top right) → **New repository** → name it `masterpieces-blog` → click **Create repository**
3. Click **uploading an existing file** → drag and drop ALL your files (index.html, style.css, main.js, and the entire `posts` folder)
4. Click **Commit changes**
5. Go to **Settings** → **Pages** → under Source select **main** branch → click **Save**

Your site will be live in 2-3 minutes at: `https://yourusername.github.io/masterpieces-blog/`

---

## How to write a new article

1. Open the `posts/` folder and **duplicate** `template.html`
2. Rename it using lowercase words and hyphens — no spaces (example: `monet-water-lilies.html`)
3. Open it in any text editor (Notepad on Windows, TextEdit on Mac)
4. Follow the `✏️` comments inside the file — they tell you exactly what to update
5. The 5 things you must always update:
   - `<title>` tag
   - `<meta name="description">` tag
   - `<link rel="canonical">` URL
   - The JSON-LD schema block
   - The article content itself
6. Save the file and upload it to GitHub

The Table of Contents in the sidebar **generates itself automatically** from your H2 headings. Just make sure each H2 has a unique `id` attribute.

---

## How to change colours or fonts

Open `style.css`. At the very top you will see the `:root` block with CSS variables:

```css
:root {
  --bg-color: #FAFAF8;       /* Page background */
  --text-color: #1A1A1A;     /* Main text */
  --accent-color: #1D6A5C;   /* Teal — links, badges, buttons */
  --font-body: Georgia, serif;
  --font-heading: system-ui, sans-serif;
}
```

Change any hex code there and the entire site updates instantly.

---

## How to add Amazon affiliate links

1. Sign up at [Amazon Associates](https://affiliate-program.amazon.com) (free)
2. Search for any book or product and click **Get link**
3. Copy the URL Amazon gives you
4. In your article file, find `<a href="#" class="btn" ... >View on Amazon →</a>`
5. Replace the `#` with your Amazon affiliate URL
6. The `rel="nofollow sponsored"` is already there — this is required for SEO compliance

---

## How to add Google AdSense

1. Once your site has traffic (aim for 500+ monthly visitors first), apply at [adsense.google.com](https://adsense.google.com)
2. Google will give you a `<script>` code snippet
3. In each HTML file, find the two `<div class="ad-placeholder">` elements
4. Delete the placeholder text inside and paste your AdSense script in its place
5. The styling is already done — the ads will appear naturally in the layout

---

## Adding the site to Google Search Console (do this on day 1)

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your GitHub Pages URL as a property
3. Verify ownership (Google will guide you)
4. Submit your sitemap: `https://yourusername.github.io/masterpieces-blog/sitemap.xml`

This tells Google your site exists and should be indexed.

# Bathu Spa — Luxury Homepage

This package contains a premium, luxury homepage for Bathu Spa (HTML/CSS/JS) with:
- Glass sticky nav
- Hero with WhatsApp CTAs
- Signature services grid
- Before/After sliders
- Why Us benefits
- Minimal pricing cards
- Reviews, CTA strip, premium footer

## Quick start (local preview)
1. Download and unzip the folder.
2. Open `index.html` in your browser.

## Ship it to GitHub (branch flow)
Assuming your site is already on GitHub & Netlify:

```bash
# 1) Clone your repo
REPO_URL="https://github.com/USERNAME/REPO.git"
BRANCH="luxury-homepage"

git clone "$REPO_URL"
cd REPO

# 2) Create a feature branch
git checkout -b "$BRANCH"

# 3) Copy/replace the files from this folder into your repo root
#    (index.html, styles.css, script.js, assets/)

# 4) Commit and push
git add .
git commit -m "Luxury homepage redesign: premium layout, styles, scripts"
git push -u origin "$BRANCH"

# 5) Open a Pull Request and merge to main
# GitHub will show a link after push, or visit:
# https://github.com/USERNAME/REPO/compare/luxury-homepage
```

## Netlify deploy
- If Netlify is **already connected** to your GitHub repo: merging to `main` will auto‑deploy.
- If not connected yet: in Netlify, **Add new site → Import from Git** → pick your repo → build command: _none_ (static) → publish directory: `/`.

## Replace placeholders
- Swap the images in `/assets` with your real brand shots (same file names to avoid editing HTML).
- Update `YOUR-DOMAIN` in the `<head>` Open Graph tags.

## WhatsApp tracking
All WhatsApp CTAs include basic UTM parameters for tracking.

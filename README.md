# Bathu Spa 3.0 — Upgrade Pack

Adds ALL upgrades on top of Fresh Start v2:

- **Gallery** with lightbox → `gallery.html`
- **WhatsApp Smart Booking** form → `book.html`
- **JSON‑driven Pricing** → `data/pricing.json` + `pricing.html`
- **PWA** (service worker) → `sw.js` + security headers `_headers` + `_redirects`
- **404.html** (luxury)

## Install (GitHub web UI on `main`)
1) Add/replace these files at the repo root: `gallery.html`, `book.html`, `pricing.html`, `sw.js`, `_headers`, `_redirects`, `404.html`, folder `data/`.
2) Open `index.html` and register the service worker **before `</body>`**:
```html
<script>
if ('serviceWorker' in navigator){ navigator.serviceWorker.register('/sw.js'); }
</script>
```
3) Add nav/footer links to **Gallery** and **Book** pages.
4) Commit to `main` → Netlify deploys.

## Edit prices
- Update `data/pricing.json`; the pricing page updates automatically.

## Notes
- Replace placeholder images in `/assets` with your real shots (keep file names to avoid HTML changes).
- Consider converting images to WebP for speed (optional next step).

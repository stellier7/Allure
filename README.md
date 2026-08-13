# Allure

A single-page, config-driven website for **ALLURE** — built from the [luxury-salon-template](https://github.com/stellier7/luxury-salon-template).

## Quick start

**On a phone or tablet (no terminal needed):** open this live preview link in Safari or Chrome:

[Preview Allure](https://htmlpreview.github.io/?https://raw.githubusercontent.com/stellier7/allure/main/index.html)

**On desktop:** open `index.html` directly in any browser — no build step required.

## Add pictures and videos

Upload salon photos and clips straight from GitHub (phone or computer):

**[Upload pictures and videos](https://github.com/stellier7/Allure/upload/main/media)**

Suggested names: `hero.jpg`, `visit.jpg`, `ritual-1.jpg` … `ritual-4.jpg`, `gallery-1.jpg` … `gallery-6.jpg`, plus optional `.mp4` videos. Details are in [`media/README.md`](media/README.md).

## Customize

Edit **`config.js` only** for a typical re-skin:

| Section | What to change |
|---------|----------------|
| Brand | Name, tagline, hero copy |
| Contact | WhatsApp number, phone, address, hours, Instagram |
| Colors | Hex values in `colors` |
| Services | Three service cards with menu items |
| Ritual | Horizontal experience strip (4 steps) |
| Gallery | Image/video paths (`media/gallery-1.jpg` or a video object) |
| Testimonials | Client quotes |

WhatsApp links (nav, hero, footer, floating button) are wired automatically from `whatsappNumber` and `whatsappDefaultMessage`.

## Structure

```
├── index.html   # Page shell + render logic
├── styles.css   # Typography, layout, animations
├── config.js    # All client-specific content
└── media/       # Photos and videos uploaded on GitHub
```

No build step, framework, or dependencies required.

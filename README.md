# Allure

A single-page, config-driven website for **ALLURE** — built from the [luxury-salon-template](https://github.com/stellier7/luxury-salon-template).

## Quick start

**On a phone or tablet (no terminal needed):** open this live preview link in Safari or Chrome:

[Preview Allure](https://htmlpreview.github.io/?https://raw.githubusercontent.com/stellier7/allure/main/index.html)

**On desktop:** open `index.html` directly in any browser — no build step required.

## Customize

Edit **`config.js` only** for a typical re-skin:

| Section | What to change |
|---------|----------------|
| Brand | Name, tagline, hero copy |
| Contact | WhatsApp number, phone, address, hours, Instagram |
| Colors | Hex values in `colors` |
| Services | Three service cards with menu items |
| Ritual | Horizontal tips strip (5 steps) |
| Gallery | Image URLs |
| Testimonials | Client quotes |

WhatsApp links (nav, hero, footer, floating button) are wired automatically from `whatsappNumber` and `whatsappDefaultMessage`.

## Structure

```
├── index.html   # Page shell + render logic
├── styles.css   # Typography, layout, animations
└── config.js    # All client-specific content
```

No build step, framework, or dependencies required.

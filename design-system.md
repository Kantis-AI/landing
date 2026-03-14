# Kantis — Design System

**This document dictates the absolute truth for styling the Kantis landing page. Any future developer or AI agent modifying this project MUST conform to these rules.**

---

## 1. Brand Identity

- **Name:** Kantis
- **Tagline:** Built for certainty.
- **One-liner:** Kantis automates ISO 27001 and EU compliance for B2B startups — so you get certified without it consuming your engineering team.

### Aesthetic
- **Refined authority.** Think: a boutique London consultancy that also ships beautiful software.
- Clean white space, serious typography, mint green used sparingly as a precision accent.
- **Subtle motion only.** Gentle fade-in on scroll for sections. No aggressive animations. Calm and controlled.

---

## 2. Colour Palette

| Token | Hex | Tailwind Utility | Usage |
|---|---|---|---|
| `--navy` | `#1D3461` | `bg-brand-navy`, `text-brand-navy` | Primary. Headlines, navbar, footer bg, buttons. |
| `--mint` | `#68C9A0` | `bg-brand-mint`, `text-brand-mint` | Accent. CTAs, highlights, icon fills, hover states, checkmarks. |
| `--navy-deep` | `#111E38` | `bg-brand-navy-deep`, `text-brand-navy-deep` | Deeper navy for large display headings on white. |
| `--navy-light` | `#2D4A7A` | `bg-brand-navy-light` | Hover state for navy elements. |
| `--mint-light` | `#A8E4CB` | `bg-brand-mint-light` | Light tint. Badge backgrounds, subtle section highlights. |
| `--mint-pale` | `#EAF8F2` | `bg-brand-mint-pale` | Very light mint. Section background tint, card backgrounds. |
| `--white` | `#FFFFFF` | `bg-white` | Page background. |
| `--grey-50` | `#F7F8FA` | `bg-brand-grey-50` | Alternate section background. |
| `--grey-400` | `#9CA3AF` | `text-brand-grey-400` | Secondary/muted text. |
| `--grey-700` | `#374151` | `text-brand-grey-700` | Body copy on white. |
| `--border` | `#E5E7EB` | `border-brand-border` | Dividers, card borders. |

### Application Rules
- **Page background:** `--white`
- **Alternate sections:** `--grey-50` or `--mint-pale`
- **Footer:** `--navy` background, white text
- **Primary CTA button:** `--mint` background, `--navy-deep` text (dark text on mint, not white). Hover scale `1.02`. No color change on hover.
- **Secondary/ghost button:** `--navy` border (`1.5px`), `--navy` text, transparent background.
- **Headings:** `--navy-deep`
- **Body text:** `--grey-700`
- **Muted text:** `--grey-400`

---

## 3. Typography

- **Headings (H1, H2):** `DM Serif Display` (Google Fonts). Elegant, authoritative.
- **Body & UI:** `DM Sans` (Google Fonts). Clean, modern, legible.

### Type Scale

| Element | Font | Size (Desktop / Mobile) | Weight | Line Height |
|---|---|---|---|---|
| H1 (hero) | DM Serif Display | 56px / 36px | 400 | 1.1 |
| H2 (section heading) | DM Serif Display | 40px / 28px | 400 | 1.2 |
| H3 (card/feature title) | DM Sans | 20px / 20px | 600 | 1.3 |
| Body large | DM Sans | 18px / 18px | 400 | 1.6 |
| Body | DM Sans | 16px / 16px | 400 | 1.6 |
| Label/caption | DM Sans | 13px / 13px | 500 | 1.4 |
| Button | DM Sans | 15px / 15px | 600 | 1.0 |
| Nav links | DM Sans | 15px / 15px | 500 | 1.0 |

---

## 4. Layout & Grid

- **Content width:** Max `1200px`, centered.
- **Section padding:** `96px` top/bottom on desktop, `64px` on mobile.
- **Navbar height:** `72px`. Sticky. Past `80px` scroll, apply shadow `box-shadow: 0 1px 12px rgba(0,0,0,0.08)`.
- **Card Hover Shadows:** Suble lift `box-shadow: 0 4px 24px rgba(29, 52, 97, 0.10)`.

---

## 5. Global Specifics

- **No stock photography.** Only clean geometry, simple SVG icons, or abstract mockups using the brand palette.
- **Primary URL link:** `https://cal.com/mkushka/30min` (opened in a new tab: `target="_blank" rel="noopener noreferrer"`).
- **Logos:** `kantis.png`, `kantis-squared.png`, `kantis-circle.png` from the `public/` directory.

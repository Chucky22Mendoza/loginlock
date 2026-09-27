# Jesús Mendoza Verduzco — Portfolio

[![Deploy](https://img.shields.io/badge/deploy-Cloudflare%20Pages-orange?logo=cloudflare)](https://jesus-mendoza.pages.dev)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> 🌐 **Live:** [jesus-mendoza.pages.dev](https://jesus-mendoza.pages.dev)

Personal portfolio and CV landing page for **Jesús Mendoza Verduzco**, FullStack Software Engineer with 7+ years of experience and a frontend focus in React, TypeScript, Next.js, and Java/Spring Boot.

---

## 📸 Preview

![Portfolio Preview](assets/img/prof-2023.jfif)

---

## ✨ Features

- 🌍 **Bilingual (ES / EN)** — Custom vanilla JS i18n system with `localStorage` persistence
- 📄 **CV Download** — Direct download of PDF resume in the active language
- 🔍 **SEO Optimized** — Open Graph, Twitter Cards, JSON-LD (Schema.org), hreflang, canonical URL, `sitemap.xml`, `robots.txt`
- ⚡ **Performance** — Lazy loading on all portfolio images
- 📱 **Responsive** — Mobile-first layout with Bootstrap 4
- 🎨 **Dark theme** — Sleek dark design with accent color `#18d26e`
- 🧩 **Dynamic data** — Age and years of experience calculated automatically in JS

---

## 🗂️ Project Structure

```
loginlock/
├── index.html              # Main HTML — all sections, data-i18n attributes
├── robots.txt              # Allow all crawlers, points to sitemap
├── sitemap.xml             # XML sitemap with hreflang for ES/EN
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet (includes i18n UI, Open Source section)
│   ├── js/
│   │   ├── main.js         # Template JS (nav, skills animation, carousel)
│   │   ├── modal.js        # Portfolio image modal
│   │   └── i18n.js         # Bilingual translation system (ES / EN)
│   ├── img/                # Profile photo, background, favicon
│   ├── CV - ES.pdf         # Spanish CV
│   ├── CV - EN.pdf         # English CV
│   └── vendor/             # Bootstrap, jQuery, icofont, boxicons, etc.
```

---

## 🌍 i18n — Language System

The translation system is implemented in **pure vanilla JavaScript** without any external libraries.

### How it works

All translatable elements use a `data-i18n` attribute with a translation key:

```html
<h2 data-i18n="resume.section_label">Currículum</h2>
```

The `assets/js/i18n.js` file contains all translations for both languages and applies them on load and on language toggle:

```js
// Toggle language
toggleLanguage('en'); // or 'es'
```

The selected language is persisted in `localStorage` and the `<html lang="">` attribute is updated dynamically. The CV download link also switches automatically between `CV - ES.pdf` and `CV - EN.pdf`.

---

## 🔍 SEO Implementation

| Feature | Status |
|---|---|
| `<title>` — descriptive, keyword-rich | ✅ |
| `<meta name="description">` — bilingual | ✅ |
| `<meta name="keywords">` | ✅ |
| Open Graph (og:title, og:description, og:image, og:locale) | ✅ |
| Twitter Card | ✅ |
| JSON-LD — Schema.org `Person` | ✅ |
| `<link rel="canonical">` | ✅ |
| `hreflang` (es, en, x-default) | ✅ |
| `sitemap.xml` | ✅ |
| `robots.txt` | ✅ |
| `loading="lazy"` on images | ✅ |
| Semantic HTML5 (`<nav aria-label>`, `<section>`, `<header>`) | ✅ |

---

## 📋 Sections

| Section | Description |
|---|---|
| **Home / Header** | Name, title, nav, language selector, social links, CV download |
| **About** | Personal info, dynamic age, professional bio |
| **Skills** | Animated progress bars — React, TS, Java, Docker, etc. |
| **Interests** | Icon grid of personal and professional interests |
| **Resume** | Education + professional experience timeline |
| **Research** | Scientific article download and research achievements |
| **Open Source** | npm packages: `just-barcode-hook`, `loginlock-kit` |
| **Portfolio** | Nine projects with named images, responsive cards and modal image viewer |
| **Contact** | City, social links, email, phone |

---

## 💼 Professional Experience

| Role | Company | Period |
|---|---|---|
| FullStack Software Engineer — Frontend Focus | AI27 Predictive Intelligence | Jul 2024 – Sep 2026 |
| Co-Founder & Software Engineer — Part-time | Spartans Dev | Feb 2025 – Present |
| FullStack Software Engineer — Frontend Focus | Xilion.io & Kiotrack | Sep 2018 – Jul 2024 |
| FullStack Developer | Archivo Histórico del Estado de Colima | Feb 2018 – Sep 2018 |

---

## 📦 Open Source Packages

| Package | Downloads | Link |
|---|---|---|
| `just-barcode-hook` | 50+ / week | [npm](https://www.npmjs.com/package/just-barcode-hook) |
| `loginlock-kit` | 20+ / week | [npm](https://www.npmjs.com/package/loginlock-kit) |

## 🧩 Featured Projects

RAZO CRM, Nvita API, Expense Tracking, Documentation Hub, Chernobyl Exclusion Zone, COVID-19 INFO, SIDF, Vita-Data, and Stripe payment gateway integration.

## 🔬 Research

- Delfín Research Summer Program (2018), Universidad Politécnica de Querétaro.
- Scientific article available for download at [`articulo-cientifico.pdf`](articulo-cientifico.pdf).

---

## 🚀 Deployment

This site is deployed on **Cloudflare Pages** via GitHub integration.

### Steps to deploy manually

```bash
# 1. Clone the repo
git clone https://github.com/Chucky22Mendoza/loginlock.git
cd loginlock

# 2. Open locally (no build step needed — pure HTML/CSS/JS)
# Simply open index.html in a browser, or use a local server:
npx serve .

# 3. Push to GitHub — Cloudflare Pages auto-deploys on push to main
git add .
git commit -m "chore: update portfolio"
git push origin main
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3 / Vanilla CSS** — Custom dark theme, animations
- **JavaScript (ES6+)** — i18n engine, dynamic data, modal logic
- **Bootstrap 4** — Responsive grid and utilities
- **jQuery** — Used by legacy template scripts (nav, carousel)
- **Boxicons / ICOFont / RemixIcon** — Icon libraries

---

## 📬 Contact

| Channel | Value |
|---|---|
| Email | [loginlock22@gmail.com](mailto:loginlock22@gmail.com) |
| LinkedIn | [linkedin.com/in/jesúsmendoza22](https://www.linkedin.com/in/jes%C3%BAsmendoza22/) |
| GitHub | [github.com/Chucky22Mendoza](https://github.com/Chucky22Mendoza) |
| WhatsApp | [+52 312 112 52 86](https://api.whatsapp.com/send?phone=523121125286) |
| Location | Colima, México |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

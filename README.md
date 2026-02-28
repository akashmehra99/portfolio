# FAANG-Optimized Engineering Portfolio

A high-performance, intentionally minimal portfolio built for engineering clarity.

## 🎯 Architecture
This portfolio was built adhering to strict performance and simplicity requirements:
- **Core Technology:** Pure HTML5, Modern CSS Variables, and Vanilla JavaScript.
- **Dependency Free:** Zero frameworks, zero external CSS libraries (no Bootstrap/Tailwind), zero heavy animation libraries.
- **Performance:** Optimized for maximum Lighthouse scores (95+). No blocking JS.
- **Accessibility:** Full ARIA support, keyboard navigation focus indicators, properly structured semantic HTML.
- **SEO Ready:** OpenGraph tags, JSON-LD structured data, responsive meta tags.

## 🚀 Local Development
Since there are no build steps, node modules, or compile pipelines, running this locally is incredibly simple:

1. Clone the repository: `git clone https://github.com/akashmehra99/portfolio.git`
2. Open `index.html` directly in your browser.
3. *Optional for live-reloading:* Use a local server like `serve`, `http-server`, or VS Code's "Live Server" extension:
   ```bash
   npx serve .
   ```

## 📦 Deployment to GitHub Pages

This static site uses relative paths and is ready to be hosted on GitHub Pages:

1. Push this code to your GitHub repository (e.g., `akashmehra99/portfolio`).
2. Go to your repository's **Settings** tab.
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment > Source**, ensure "Deploy from a branch" is selected.
5. Under the **Branch** dropdown, select `main` (or `master`) and save.
6. GitHub Actions will auto-build the deployment. In a few minutes, your site will be live at `https://akashmehra99.github.io/portfolio/` (or a custom domain if configured).

## 🌗 Features Implemented
- **Design Tokens:** Extracted all thematic colors, spacing units, and typography to CSS variables for scalable design evolution.
- **Dark/Light Mode:** Automatically detects system preference or uses the explicit toggle switch, persisting selection in `localStorage`.
- **Micro-Interactions:** Custom staggered CSS animations tied to Vanilla JS `IntersectionObserver` to trigger smooth `.slide-up` layouts on scroll.
- **Semantic Structure:** Utilization of HTML5 elements (`<article>`, `<section>`, `<header>`, `<footer>`, `<main>`, `<details>`, `<summary>`) over `div` soups.

---
Built by Akash Mehra.

# 🚀 FAANG-Optimized Portfolio --- Cursor Master Build Instruction

**Stack:** HTML + CSS + Vanilla JS\
**Deployment:** GitHub Pages

------------------------------------------------------------------------

## 🎯 OBJECTIVE

Build a high-performance, FAANG-optimized personal portfolio website
using:

-   Pure HTML5\
-   Modern CSS (no frameworks)\
-   Vanilla JavaScript\
-   Static deployment via GitHub Pages

The portfolio must:

-   Be inspired by:
    -   https://github.com/shahsagarm/sagarshah.dev\
    -   https://figma-portfolio-ten.vercel.app/#lab\
-   Be minimal, intentional, and engineering-focused\
-   Highlight system thinking and architecture depth\
-   Feel like a senior engineer's portfolio\
-   Be recruiter-optimized\
-   Score 95+ on Lighthouse

------------------------------------------------------------------------

# 🧠 DESIGN PHILOSOPHY

This portfolio must communicate:

-   Engineering clarity\
-   System design thinking\
-   Architecture mindset\
-   Performance awareness\
-   Production-readiness\
-   Depth over buzzwords

Tone: - Direct\
- Structured\
- Results-oriented\
- No fluff

Visual Direction: - Minimal and clean\
- Strong typography hierarchy\
- Dark theme by default\
- Light theme toggle\
- Subtle micro-interactions\
- Clean grid layout\
- Professional spacing

------------------------------------------------------------------------

# 🏗️ TECHNICAL REQUIREMENTS

## Stack Rules

-   Semantic HTML5 only\
-   CSS variables (design tokens)\
-   Flexbox + CSS Grid\
-   Vanilla JS only\
-   No frameworks\
-   No Bootstrap\
-   No Tailwind\
-   No heavy animation libraries

Optional: - IntersectionObserver\
- CSS transitions\
- Native smooth scroll

------------------------------------------------------------------------

# 📂 PROJECT STRUCTURE

    /portfolio
      index.html
      /css
        styles.css
        animations.css
      /js
        main.js
      /assets
        images
        icons
      README.md

------------------------------------------------------------------------

# 📐 SECTIONS TO BUILD

## 1️⃣ HERO SECTION

Include: - Name\
- Role\
- Positioning statement\
- CTA buttons (Work, Resume, Contact)

Add credibility line: \> Focused on scalable systems, micro frontends,
and AI workflows.

------------------------------------------------------------------------

## 2️⃣ ABOUT SECTION

Structure: Problem → Action → Impact

Highlight: - Nx monorepos\
- Micro frontends\
- Module Federation\
- React Native app\
- AI experimentation\
- Finance + Analytics

------------------------------------------------------------------------

## 3️⃣ SKILLS SECTION

Categories: - Frontend Systems\
- Architecture & Monorepos\
- AI & Local LLM\
- DevOps & Tooling\
- Data & Analytics\
- Performance Optimization\
- Conceptual Depth

No skill bars. Clean grid only.

------------------------------------------------------------------------

## 4️⃣ PROJECTS SECTION

Each project must include: - Title\
- Problem\
- Architecture explanation\
- Stack\
- GitHub link\
- Impact\
- Tradeoffs\
- Scalability\
- Future improvements

Use:

``` html
<details>
  <summary>Architecture Overview</summary>
</details>
```

------------------------------------------------------------------------

## 5️⃣ LAB / EXPERIMENTS

Include: - JS call stack exploration\
- Async throttling demo\
- Performance benchmark\
- DOM optimization

------------------------------------------------------------------------

## 6️⃣ RESUME SECTION

-   Download PDF\
-   Inline preview\
-   Quantified achievements

------------------------------------------------------------------------

## 7️⃣ CONTACT SECTION

-   Email\
-   GitHub\
-   LinkedIn

------------------------------------------------------------------------

# 🎨 DESIGN SYSTEM

``` css
:root {
  --bg: #0f0f14;
  --primary: #6c63ff;
  --text-main: #eaeaf0;
  --text-muted: #9a9ab0;
  --border: rgba(255,255,255,0.08);
}
```

Use: - 8px spacing\
- 12-column grid\
- Max width 1100px

------------------------------------------------------------------------

# 📱 RESPONSIVENESS

Breakpoints: - 480px\
- 768px\
- 1024px

Mobile-first required.

------------------------------------------------------------------------

# ⚡ PERFORMANCE

-   Lighthouse 95+\
-   No blocking JS\
-   Optimized images\
-   Meta + OpenGraph tags\
-   Favicon\
-   Robots.txt

------------------------------------------------------------------------

# 🌗 DARK / LIGHT MODE

-   Toggle button\
-   localStorage persistence\
-   Smooth transition

------------------------------------------------------------------------

# ♿ ACCESSIBILITY

-   ARIA labels\
-   Contrast compliance\
-   Keyboard navigation\
-   Focus states

------------------------------------------------------------------------

# 📈 SEO

-   Meta description\
-   OpenGraph\
-   Twitter card\
-   JSON-LD Person schema

------------------------------------------------------------------------

# 🧠 ENGINEERING PHILOSOPHY

Explain: - Why clean architecture matters\
- Why performance matters\
- Why modularity scales\
- Why clarity beats cleverness

------------------------------------------------------------------------

# 📦 DEPLOYMENT

-   Static site\
-   Relative paths\
-   README with GitHub Pages steps

------------------------------------------------------------------------

# 🎯 SUCCESS CRITERIA

If a senior engineer at Google, Meta, Amazon, Apple, or Netflix reviews
this portfolio, they should think:

> "This person understands systems."

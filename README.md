# HARIKA — THE SERIES

A cinematic, streaming-inspired portfolio for **Talla Harika** — Software Engineer (Java, Spring Boot, distributed systems).
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+** (20 recommended).

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deploy (GitHub Pages)

Pushing to the `main` branch deploys automatically through `.github/workflows/deploy.yml`.
One-time setup: **Repo → Settings → Pages → Build and deployment → Source: GitHub Actions**.

Name the repository `Harika056.github.io` and the site is served at `https://harika056.github.io/`.
Any other repository name works too (it is served at `https://harika056.github.io/<repo-name>/`) — the workflow sets the base path for you.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub, LeetCode | `profile` |
| A project, or a new one | `projects` |
| Achievements / certifications (add a `link` to make a card clickable) | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |

**Resume:** replace `public/assets/Talla_Harika_Resume_SE.pdf` (keep the file name, or update `profile.resumePdf`).

**Photo:** put your photo in the project root as `photo.jpg`, then run:

```bash
npm run images
```

This rebuilds the responsive portraits and the social-share image in `public/assets/`.
For the sharpest result, also add `photo-cutout.png` — the same photo with the background removed (remove.bg, Canva, Photoroom or Adobe Express all do this for free).
Without a cutout the photo is blended into the dark page with a soft oval fade. Until you add a photo, a silhouette placeholder is used.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, custom cursor, tilt, particles and pinned scrolling turn off.
- Hover effects only run on devices with a precise pointer; touch devices get tap interactions and swipe rails.
- Overlays close with Esc; the highlight reel supports Space and the ← → keys.

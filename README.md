# M3M BRABUS Residences — Concept Microsite

A premium, multi-page real estate website for the M3M BRABUS luxury residential
project (Sector 58, Golf Course Extension Road, Gurugram), built as a design +
development case study.

**Design direction:** BRABUS is a German high-performance automotive brand, so
instead of the usual "warm cream real estate" template, the site leans into that
DNA — obsidian black + a single BRABUS red accent, alternating with light "stone"
sections for the residential/interior content, a condensed technical label face
(Oswald) paired with a warm display serif (Fraunces), and a signature
"spec-sheet" module that presents residence stats the way an automotive spec
sheet presents performance numbers.

---

## Tech stack

- **React 19 + Vite 8** — component architecture, fast builds
- **React Router 7** — client-side routing across 6 pages
- **Tailwind CSS 3** — utility styling, custom design tokens (see `tailwind.config.js`)
- **Framer Motion** — scroll-reveal micro-animations (respects `prefers-reduced-motion`)
- **lucide-react** — icon set
- **Custom manual SSG (esbuild + a small prerender script)** — see below

## Pages

`/` Home · `/amenities` · `/floor-plans` · `/gallery` · `/location` · `/contact`

## AI tools used in development

- **Claude (Anthropic)** — full end-to-end build: content research/synthesis
  from public sources about the M3M BRABUS project, design system definition,
  component/page architecture, all React/Tailwind code, the custom SSG/SEO
  tooling, and this README.

---

## Why a custom prerender step?

A plain React SPA ships an empty `<div id="root">` in its HTML — great for
users, bad for SEO and GEO (many crawlers, and most AI answer engines, read
raw HTML without executing JavaScript). Rather than drop React for a Vite SSG
framework, this project ships a small **`scripts/prerender.js`** that runs
after `vite build`:

1. Bundles the app tree (`scripts/ssrEntry.jsx`) into a single Node-runnable
   file with esbuild.
2. Server-renders each route to real HTML with `react-dom/server`.
3. Stamps in the correct `<title>`, meta description, canonical URL, Open
   Graph/Twitter tags, and JSON-LD schema for that specific route (source of
   truth: `scripts/routesMeta.js`).
4. Writes one crawlable `index.html` per route (`/dist/amenities/index.html`,
   etc.), then the client bundle hydrates on top so the site stays a fully
   interactive SPA after load.
5. Also generates `sitemap.xml` and `robots.txt`.

Run `npm run build` and inspect `dist/` — every route has real, readable
content in its HTML source, not just a loading shell.

## SEO implementation

- Unique `<title>` / meta description / canonical URL per route (both
  server-rendered and kept in sync client-side via `src/components/Seo.jsx`)
- Semantic HTML: one `<h1>` per page, proper heading hierarchy, `<nav>`,
  `<main>`, `<footer>`, `<figure>/<figcaption>`
- Descriptive `alt` text on every image (`src/data/images.js`)
- `sitemap.xml` + `robots.txt` generated at build time
- Clean, human-readable URLs (`/floor-plans`, `/amenities`, no query strings)
- Mobile-first responsive layout, visible keyboard focus states,
  `prefers-reduced-motion` support

## GEO (Generative Engine Optimization)

- **JSON-LD structured data**: `RealEstateAgent` (site-wide, in `index.html`),
  `Residence` (home page), `FAQPage` with `mainEntity` Q&A pairs (contact
  page) — all machine-readable for AI answer engines
- **Dedicated FAQ content** answering the exact questions a prospective buyer
  (or an AI assistant on their behalf) would ask — location, configurations,
  the BRABUS collaboration, pricing, RERA status, green space, smart-home
  features
- Content structured in short, self-contained, quotable statements rather
  than long marketing paragraphs, so individual facts are easy to extract
- Consistent facts repeated across page/schema/FAQ (no contradictory numbers)

---

## Getting started locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview the production output

```bash
npm run build       # vite build + prerender → outputs to /dist
npm run preview     # serve /dist locally to sanity-check
```

---

## Deployment

The output of `npm run build` (the `dist/` folder) is a fully static site —
deploy it anywhere that serves static files.

### Option A — Vercel (recommended, zero config)

1. Push this repo to GitHub.
2. vercel.com/new → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. Done — you get a live `*.vercel.app` URL immediately, and every
   future push to `main` redeploys automatically.

### Option B — Netlify

1. Push this repo to GitHub.
2. app.netlify.com → "Add new site" → import from Git.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

_Drag-and-drop alternative:_ run `npm run build` locally, then drag the
`dist` folder onto app.netlify.com/drop.

### Option C — GitHub Pages (workflow included)

This repo already includes `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages automatically on every push to `main`.

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

> **Note:** if you deploy to a project subpath like
> `github.io/<repo-name>/` (rather than a user page or a custom domain), add
> `base: '/<repo-name>/'` to `vite.config.js` so built asset paths resolve
> correctly:
> ```js
> export default defineConfig({
>   plugins: [react()],
>   base: '/<repo-name>/',
> })
> ```

### After deploying

Update `SITE.url` in `src/data/site.js` and `SITE_URL` in
`scripts/prerender.js`, and the URLs in `index.html`, from the placeholder
(`https://m3mbrabus.example.com`) to your real deployed URL, then rebuild —
this keeps canonical URLs, Open Graph tags, sitemap and JSON-LD accurate.

---

## Images & content disclaimer

This is an **independently built, unofficial concept microsite** created as a
design/development exercise — not the official website of M3M India or
BRABUS. Project facts (location, unit mix, amenities, pricing) were compiled
from publicly available sources and should be verified against the
developer's official RERA documents before any real transaction. Photography
is curated stock imagery standing in for official renders; every image ships
with a graceful fallback (`ImageFrame.jsx`) if a URL ever fails to load.

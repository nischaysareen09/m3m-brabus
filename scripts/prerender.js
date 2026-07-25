// Lightweight manual SSG step. After `vite build` produces the client bundle
// and esbuild bundles scripts/ssrEntry.jsx into a single CJS file, this
// script server-renders every route to static HTML, stamps in per-route
// <title>/<meta>/canonical/JSON-LD, and writes one crawlable index.html per
// route. The client bundle then hydrates on top, so the SPA stays fully
// interactive after load.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { ROUTES } from "./routesMeta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const bundlePath = path.join(__dirname, ".ssr-bundle.cjs");
const SITE_URL = "https://m3mbrabus.example.com";

function run() {
  execSync(
    `node_modules/.bin/esbuild scripts/ssrEntry.jsx --bundle --platform=node --format=cjs --jsx=automatic --outfile=scripts/.ssr-bundle.cjs`,
    { cwd: root, stdio: "inherit" }
  );

  const require = createRequire(import.meta.url);
  delete require.cache[require.resolve(bundlePath)];
  const { renderRoute } = require(bundlePath);

  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  for (const route of ROUTES) {
    const appHtml = renderRoute(route.path);

    const fullTitle = `${route.title} | M3M BRABUS`;
    const canonical = `${SITE_URL}${route.path}`;
    const desc = route.description.replace(/"/g, "&quot;");

    let html = template
      .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${fullTitle}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${desc}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${fullTitle}" />`)
      .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${desc}" />`);

    if (route.jsonLd) {
      const script = `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n  </head>`;
      html = html.replace("</head>", script);
    }

    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outDir = route.path === "/" ? distDir : path.join(distDir, route.path.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
    console.log(`Prerendered ${route.path} -> ${path.relative(root, path.join(outDir, "index.html"))}`);
  }

  const urls = ROUTES.map(
    (r) => `  <url><loc>${SITE_URL}${r.path}</loc><changefreq>weekly</changefreq><priority>${r.path === "/" ? "1.0" : "0.8"}</priority></url>`
  ).join("\n");
  fs.writeFileSync(
    path.join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );

  fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

  fs.rmSync(bundlePath, { force: true });

  console.log("\nPrerender complete: static HTML, sitemap.xml and robots.txt written to /dist");
}

run();

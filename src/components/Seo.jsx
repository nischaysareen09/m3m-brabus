import { useEffect } from "react";
import { SITE } from "../data/site";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// This runs client-side to keep tab title/meta accurate during SPA navigation.
// The build's prerender step (scripts/prerender.js) independently writes the
// same values into the static HTML shipped for each route, so crawlers that
// don't execute JS still see correct per-page <title>/<meta>/JSON-LD.
export default function Seo({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.shortName}` : SITE.name;
    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", `${SITE.url}${path}`);
    upsertLink("canonical", `${SITE.url}${path}`);
    if (jsonLd) upsertJsonLd("page-jsonld", jsonLd);
  }, [title, description, path, jsonLd]);

  return null;
}

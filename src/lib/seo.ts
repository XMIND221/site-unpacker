/** URL canonique du site (build + runtime). */
export const siteBaseUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  (typeof window !== "undefined" ? window.location.origin : "https://welmaglobal-main.vercel.app");

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Balises SEO par route (SPA) : title, description, canonical, Open Graph, Twitter.
 * robots reste index, follow (sauf pages d’erreur gérées à part).
 */
export function applyPageSeo(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const url = path === "/" ? `${siteBaseUrl}/` : `${siteBaseUrl}${path}`;

  document.title = opts.title;

  setMeta("name", "description", opts.description);
  setMeta("name", "robots", "index, follow");

  setLink("canonical", url);

  setMeta("property", "og:url", url);
  setMeta("property", "og:title", opts.title);
  setMeta("property", "og:description", opts.description);
  setMeta("property", "og:type", "website");

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", opts.title);
  setMeta("name", "twitter:description", opts.description);
}

/** Page d’erreur : éviter d’indexer les URL inexistantes. */
export function applyNoIndexPage(title: string) {
  document.title = title;
  setMeta("name", "robots", "noindex, nofollow");
}

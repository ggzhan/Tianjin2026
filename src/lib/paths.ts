/** Site path with Astro `base` prefix (GitHub Pages project site). */
export function href(path = "/") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  if (path === "/" || path === "") return `${base}/`;
  return `${base}/${path.replace(/^\//, "")}`;
}

/** Pathname without base, always starting with `/`. */
export function stripBase(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && pathname.startsWith(base)) {
    const rest = pathname.slice(base.length);
    const normalized = rest.startsWith("/") ? rest : `/${rest}`;
    return normalized || "/";
  }
  return pathname || "/";
}

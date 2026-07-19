import { defineMiddleware } from "astro:middleware";
import { COOKIE, TOKEN } from "./lib/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (!pathname.startsWith("/intern")) {
    return next();
  }

  if (pathname === "/intern/login" || pathname.startsWith("/api/")) {
    return next();
  }

  const auth = context.cookies.get(COOKIE)?.value;
  if (auth === TOKEN) {
    return next();
  }

  return context.redirect(`/intern/login?next=${encodeURIComponent(pathname)}`);
});

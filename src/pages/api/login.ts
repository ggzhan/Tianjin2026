import type { APIRoute } from "astro";
import { COOKIE, TOKEN } from "../../lib/auth";
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? "/intern");
  const expected = import.meta.env.CAMP_PASSWORD || "ottv-tianjin-2026";

  if (password !== expected) {
    const dest = new URL("/intern/login", request.url);
    dest.searchParams.set("error", "1");
    if (next) dest.searchParams.set("next", next);
    return redirect(dest.toString());
  }

  cookies.set(COOKIE, TOKEN, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: import.meta.env.PROD,
    maxAge: 60 * 60 * 24 * 45,
  });

  const safeNext = next.startsWith("/intern") ? next : "/intern";
  return redirect(safeNext);
};

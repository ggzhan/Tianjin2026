import { createHash } from "node:crypto";
import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const env = loadEnv("", process.cwd(), "");
const campPassword = env.CAMP_PASSWORD || process.env.CAMP_PASSWORD || "";

if (!campPassword) {
  console.warn(
    "[tianjin2026] CAMP_PASSWORD is empty — set it in .env locally and as a GitHub Actions secret for Pages.",
  );
}

const campPasswordHash = createHash("sha256").update(campPassword).digest("hex");

export default defineConfig({
  site: "https://ggzhan.github.io",
  base: "/Tianjin2026",
  output: "static",
  integrations: [mdx()],
  vite: {
    define: {
      __CAMP_PASSWORD_HASH__: JSON.stringify(campPasswordHash),
    },
  },
});

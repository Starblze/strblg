import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "astro/entrypoints/prerender": fileURLToPath(
          new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url)
        ),
        "astro/runtime/client/dev-toolbar/entrypoint.js": fileURLToPath(
          new URL(
            "./node_modules/astro/dist/runtime/client/dev-toolbar/entrypoint.js",
            import.meta.url
          )
        )
      }
    }
  }
});

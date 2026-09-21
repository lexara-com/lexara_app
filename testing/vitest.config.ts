import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  esbuild: {
    target: "es2022",
  },
  resolve: {
    alias: {
      // Astro 6 / @astrojs/cloudflare v13: handlers import bindings from
      // `cloudflare:workers`, which has no node implementation. Route it to a
      // test stub whose `env` is settable per-test via `setMockEnv`.
      "cloudflare:workers": path.resolve(
        __dirname,
        "mocks/cloudflare-workers.ts",
      ),
    },
  },
  test: {
    globals: true,
    root: path.resolve(__dirname, ".."),
    include: ["src/**/*.test.ts", "src/**/*.spec.ts"],
    exclude: ["node_modules", "dist", "testing/e2e/**/*"],
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: path.resolve(__dirname, "../coverage"),
      include: ["src/lib/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/**/*.spec.ts"],
    },
  },
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const rawPort = process.env.PORT ?? "5173";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

const replitPlugins: unknown[] = [];

if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  const { default: runtimeErrorOverlay } = await import("@replit/vite-plugin-runtime-error-modal");
  replitPlugins.push(runtimeErrorOverlay());
  const { cartographer } = await import("@replit/vite-plugin-cartographer");
  replitPlugins.push(
    cartographer({
      root: path.resolve(import.meta.dirname, ".."),
    }),
  );
  const { devBanner } = await import("@replit/vite-plugin-dev-banner");
  replitPlugins.push(devBanner());
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), ...replitPlugins],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: false,
    host: "0.0.0.0",
  },
  preview: {
    port,
    host: "0.0.0.0",
  },
});

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// Offline-first PWA. Everything (content + SVG figures) is bundled at build
// time and precached by the service worker, so the reviewer works with no
// network — e.g. inside a surgical centre.
export default defineConfig({
  base: "./",
  // Cast sidesteps a Plugin type-identity clash between the top-level `vite`
  // and the copy nested under `vitest` — runtime is unaffected.
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg", "favicon.svg"],
      manifest: {
        name: "Revisortopedia — Revisor de Cirurgias Ortopédicas",
        short_name: "Revisortopedia",
        description:
          "Referência ortopédica interativa e ilustrada, passo a passo, com evidência citada. Offline-first.",
        lang: "pt-BR",
        theme_color: "#0a1522",
        background_color: "#0a1522",
        display: "standalone",
        orientation: "any",
        start_url: "./",
        scope: "./",
        icons: [
          { src: "icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
          { src: "icon-maskable.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,woff2,png,jpg,jpeg,ico,json}"],
        navigateFallback: "index.html",
        cleanupOutdatedCaches: true,
        // App é offline-first: todo o conteúdo (dados + figuras) entra no
        // precache. O bundle cresce com os tópicos; elevar o teto mantém tudo
        // disponível offline. (Code-split por tópico é otimização futura.)
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ] as unknown as [],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});

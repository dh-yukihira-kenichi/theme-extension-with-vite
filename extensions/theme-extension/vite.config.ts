import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pageReload from "vite-plugin-page-reload";
import shopify from "vite-plugin-shopify";

export default defineConfig({
  plugins: [
    shopify(),
    react(),
    pageReload(["/tmp/extension.update", "./blocks/**/*", "./locales/**/*", "./snippets/**/*"], {
      // 短すぎると適切に反映されないので、十分な時間を取る
      delay: 1800,
    }),
  ],
});

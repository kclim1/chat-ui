import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://18.143.79.95",
        changeOrigin: true,
        rewrite: (path) => path, // ✅ keep full path
      },
    },
  },
});

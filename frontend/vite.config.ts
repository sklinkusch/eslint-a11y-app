import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.basename,
  plugins: [react()],
  define: {
    "process.env": process.env
  },
  server: {
    host: true
  },
  build: {
    chunkSizeWarningLimit: 1500
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@services": resolve(__dirname, "./src/services")
    }
  }
});

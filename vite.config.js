import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// For GitHub Pages under a sub-path, set base to "/<repo-name>/" (or use VITE_BASE).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
  resolve: {
    // "@/..." resolves to src/..., so imports don't need ../../../
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});

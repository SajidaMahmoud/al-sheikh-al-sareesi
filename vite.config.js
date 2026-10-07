import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages under a sub-path, set base to "/<repo-name>/" (or use VITE_BASE).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});

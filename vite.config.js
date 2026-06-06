import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Vercel ke liye base path ko root ('/') ya './' hona chahiye
  base: "/", 
  server: {
    port: 5173,
  },
});
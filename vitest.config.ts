import { defineConfig } from "vitest/config"; // Ostaje isto
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // DODAJ OVU LINIJU ISPOD:
  base: "/maskote-and-fun/", 
  
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});

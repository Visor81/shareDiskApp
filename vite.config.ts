import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/pkg/index.ts"),
      name: "ShareDisk",
      fileName: "share-disk",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mantine/core",
        "@mantine/hooks",
        "axios",
      ],
      output: {
        globals: {
          react: "React",
          axios: "axios",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/pkg"),
    },
  },
  plugins: [react(), svgr(), dts({ tsconfigPath: "./tsconfig.app.json" })],
});

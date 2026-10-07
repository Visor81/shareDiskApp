import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/entry.ts"),
      name: "ShareDisk",
      formats: ["es", "umd"],
      fileName: (format) => `share-disk.${format}.js`,
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
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    svgr(),
    basicSsl(),
    dts({ insertTypesEntry: true, tsconfigPath: "./tsconfig.app.json" }),
  ],
  server: {
    host: "share-disk-app.r7-office.ru",
    proxy: {
      "/api": {
        target: "https://cddisk-dev.r7-office.ru",
        rewrite: (path) => path.replace(/^\/api/, "/api"),
        cookieDomainRewrite: ".r7-office.ru",
        changeOrigin: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("X-Module", "Disk");
          });
        },
      },
    },
  },
});

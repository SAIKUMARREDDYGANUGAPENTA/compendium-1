import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // This handles refresh correctly
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    base: './',
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      ...(isDev ? [componentTagger()] : []), // Only apply in dev
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  };
});

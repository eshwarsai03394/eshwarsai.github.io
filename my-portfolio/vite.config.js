import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/eshwarsai.github.io/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src/main.js",
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
        dir: 'dist' // Ensures all files are placed in 'dist/' directly
      }
    }
  }
})

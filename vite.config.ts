import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   server: {
//     host: '0.0.0.0',
//     port: 5410
//   }
// })
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Adjust size limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'element-plus'] // Split vendor libraries
        }
      }
    }
  }
});
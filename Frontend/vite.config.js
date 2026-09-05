import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Prevents net::ERR_INSUFFICIENT_RESOURCES by tuning polling if needed
    watch: {
      usePolling: true,
    },
    // Ensures proper port handling
    port: 5173,
    strictPort: true,
  },
})
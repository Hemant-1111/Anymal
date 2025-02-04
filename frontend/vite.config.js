import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with '/auth' to the backend server (e.g., localhost:8080)
      '/auth': 'http://localhost:8080',
    },
  }
})

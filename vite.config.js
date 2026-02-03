import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'https://gatewayservice-ll9q.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/dashboard': {
        target: 'https://gatewayservice-ll9q.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'https://gatewayservice-ll9q.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

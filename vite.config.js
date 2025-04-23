import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Đảm bảo đường dẫn đúng
  build: {
    outDir: "dist"
  },
  server: {
    historyApiFallback: true // Để Vite dev server hỗ trợ React Router
  }
})

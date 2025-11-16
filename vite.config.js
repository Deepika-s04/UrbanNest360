import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/rentcast': {
        target: 'https://api.rentcast.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rentcast/, ''),
      },
      '/api/pixabay': {
        target: 'https://pixabay.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pixabay/, '/api'),
      },
    },
  },
  base: '/UrbanNest360/',
});
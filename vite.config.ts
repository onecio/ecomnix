import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' → robusto em GitHub Pages (custom domain e subpath) e em file://
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2022',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
        },
      },
    },
  },
  server: { port: 5173, host: true },
});

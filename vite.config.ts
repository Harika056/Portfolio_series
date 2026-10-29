import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// VITE_BASE is set by the GitHub Pages workflow ("/" for username.github.io, "/repo-name/" otherwise).
export default defineConfig({
  base: (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: { motion: ['framer-motion'], react: ['react', 'react-dom'] },
      },
    },
  },
});

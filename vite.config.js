import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No-build app became a Vite build to drop Babel Standalone + the per-launch
// JSX compile. base:'./' keeps asset URLs relative (Netlify serves dist/ at
// root). version.js lives in public/ so it is copied verbatim, un-hashed.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist', target: 'es2019' },
});

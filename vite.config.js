import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const sourceJSPattern = /\/src\/.*\.js$/;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: [sourceJSPattern],
    exclude: [],
  },
});

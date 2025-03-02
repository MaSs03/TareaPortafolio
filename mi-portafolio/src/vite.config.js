import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, './src/shared'),
      "@entities": path.resolve(__dirname, './src/entities'),
    },
  },
  plugins: [tsconfigPaths()],
});
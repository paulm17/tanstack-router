import { extendTheme, pigment } from '@stylefusion/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { getPigmentCSSTheme } from '@raikou/system';

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: 'raikou',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ':root',
  ...cssTheme,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      atomic: false,
      theme,
      rawTheme,
      transformLibraries: ['@raikou/core', '@raikou/system'],
    }),
    TanStackRouterVite({}),
    react(),
  ],
  optimizeDeps: {
    include: ['prop-types', 'react-is'],
  },
  resolve: {
    alias: {
      'prop-types': 'prop-types/prop-types.js',
      'react-is': 'react-is/cjs/react-is.development.js',
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Insights',
        short_name: 'Insights',
        description: 'Livre de recettes de Thomas Caufriez',
        theme_color: '#2a1f0e',
        background_color: '#1a1208',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/insights/',
        start_url: '/insights/',
        icons: [
          {
            src: '/insights/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/insights/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
  base: '/insights/',
  server: {
    proxy: {
      '/proxy/coingecko': {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/coingecko/, ''),
      },
      '/proxy/binance': {
        target: 'https://api.binance.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/binance/, ''),
      },
      '/proxy/er': {
        target: 'https://open.er-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/er/, ''),
      },
      '/proxy/yahoo': {
        target: 'https://query1.finance.yahoo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/yahoo/, ''),
      },
    },
  },
})

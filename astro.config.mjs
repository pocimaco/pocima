import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://pocima.co',

  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true,
      },

      manifest: {
        name: 'Pócima',
        short_name: 'Pócima',
        description: 'Pócima — 25 ml',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        lang: 'es',

        icons: [
          {
            src: '/icons/pocima-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/pocima-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      workbox: {
        navigateFallback: '/',
      },
    }),
  ],
});
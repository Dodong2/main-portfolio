import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg', 
        'favicon.ico', 
        'robots.txt', 
        'apple-touch-icon.png',
        'icons/*.png', // Include all PNG files in the icons directory
        'icons/*.svg'  // Include all SVG files in the icons directory
      ],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ],
      },
      srcDir: 'src', // Ensure this is the correct path
      filename: 'service-worker.js' // Ensure this matches the actual file name
    }),
  ],
});

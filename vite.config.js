import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      includeAssets: [
        'favicon.svg', 
        'favicon.ico', 
        'robots.txt', 
        'apple-touch-icon.png',
        'icons/*.png', // Include all PNG files in the icons directory
        'icons/*.svg',  // Include all SVG files in the icons directory
        'appcon.png',
          'bao.png',
          'budget tracker.png',
          'catfact.png',
          'cert-AppCon.png',
          'dong.png',
          'php crud.png',
          'port design.png',
          'weather_app.png',
          'img1.svg',
          'img2.svg',
          'img3.svg',
          'img4.svg',
          'img5.svg',
          'img6.svg',
          'img7.svg',
          'img8.svg',
          'img9.svg',
          'img10.svg',
          'img11.svg',
          'img12.svg',
          'img13.svg',
          'img14.svg',
      ],
      manifest: {
        name: 'Castar Portfolio App',
        short_name: 'Castar App',
        description: 'Castar App',
        theme_color: '#141e27',
        icons: [
          {
            src: 'img1.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img2.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img3.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img4.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img5.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img6.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img7.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img8.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img9.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img10.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img11.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img12.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img13.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'img14.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'appcon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'bao.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'budget tracker.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },{
            src: 'catfact.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },{
            src: 'cert-AppCon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },{
            src: 'dong.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },{
            src: 'php crud.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },{
            src: 'port design.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },{
            src: 'weather_app.png',
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

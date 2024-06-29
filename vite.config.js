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
        name: 'Castar Portfolio App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
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

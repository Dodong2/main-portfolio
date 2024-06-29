import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/public/img1.svg', // Adjust the path to match the location of your SVG icons in the public folder
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/public/appcon.png', // Adjust the path to match the location of your PNG icons in the public folder
            sizes: '192x192',
            type: 'image/png',
          },
          // Add more icons if needed following the same structure
        ],
      },
      srcDir: '/src',
      filename: 'service-worker.jsx', // Specify the filename for your service worker
    }),
  ],
});

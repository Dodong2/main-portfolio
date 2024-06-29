import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: [
    'favicon.ico',           // Include favicon
    'apple-touch-icon.png',  // Include apple touch icon
    'masked-icon.svg',       // Include masked icon
  ],
  manifest: {
    name: 'React-vite-app',
    short_name: 'react-vite-app',
    description: 'I am a simple vite app',
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
        
      },
      {
        src: 'budget tracker.png',
        sizes: '512x512',
        type: 'image/png',
        
      },{
        src: 'catfact.png',
        sizes: '512x512',
        type: 'image/png',
        
      },{
        src: 'cert-AppCon.png',
        sizes: '512x512',
        type: 'image/png',
        
      },{
        src: 'dong.png',
        sizes: '512x512',
        type: 'image/png',
        
      },{
        src: 'php crud.png',
        sizes: '512x512',
        type: 'image/png',
        
      },{
        src: 'port design.png',
        sizes: '512x512',
        type: 'image/png',
        
      },{
        src: 'weather_app.png',
        sizes: '512x512',
        type: 'image/png',
        
      }
    ],
    theme_color: '#181818',
    background_color: '#e0cc3b',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});

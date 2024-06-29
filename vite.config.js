import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: [
    'favicon.ico',           // Include favicon
    'apple-touch-icon.png',  // Include apple touch icon
    'masked-icon.svg',       // Include masked icon
    '/appcon.png',
  '/bao.png',
  '/budget tracker.png',
  '/catfact.png',
  '/cert-AppCon.png',
  '/dong.png',
  '/php crud.png',
  '/port design.png',
  '/weather_app.png',
  '/img1.svg',
  '/img2.svg',
  '/img3.svg',
  '/img4.svg',
  '/img5.svg',
  '/img6.svg',
  '/img7.svg',
  '/img8.svg',
  '/img9.svg',
  '/img10.svg',
  '/img11.svg',
  '/img12.svg',
  '/img13.svg',
  '/img14.svg',
  ],
  manifest: {
    name: 'Castar Web App',
    short_name: 'Castar Web App',
    description: 'Castar Portfolio App',
    icons: [
      {
        src: 'dong.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }

    ],
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

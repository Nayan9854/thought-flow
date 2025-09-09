// installing vite using swc
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://thought-flow-8a1o.onrender.com',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// console.log(import.meta.env);
// const VITE_PIXABAY_API = process.env.VITE_PIXABAY_API;
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://pixabay.com/api/',
    }
  },
  plugins: [react()],
})


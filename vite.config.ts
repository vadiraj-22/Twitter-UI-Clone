import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/Twitter-UI-Clone/',
  plugins: [
    tailwindcss(),
  ],
})

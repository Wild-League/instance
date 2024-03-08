import { vitePlugin } from "@remix-run/dev";
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePlugin(), tailwindcss()]
})

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  /*clearScreen: false,*/
  server: {
    host: "0.0.0.0",
    port: 4000,
    strictPort: true,
    /*Using hmr for solve gitpod + vite page auto refresh*/
    /*hmr: {
        port: 443,
    }*/
  }
})

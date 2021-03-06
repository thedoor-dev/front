import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://cdn.jsdelivr.net/gh/thedoor-dev/front/build/",
  server: {
    proxy: {
      "/api": "http://localhost:9200"
    }
  },
  plugins: [
    vue(),
    // viteMockServe({supportTs: true})
  ]
})
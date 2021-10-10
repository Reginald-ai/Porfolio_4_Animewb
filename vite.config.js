const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'about.html'),
        main1: resolve(__dirname, 'index.html'),
        main2: resolve(__dirname, 'news.html'),
        main3: resolve(__dirname, 'prize.html'),    
      }
    }
  }
})
const path = require('path')
const {
  defineConfig
} = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'inview-timer.js'),
      name: 'InviewTimerModule',
      fileName: (format) => `inview-timer.${format}.js`
    },
  }
})

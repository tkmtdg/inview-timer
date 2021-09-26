const path = require('path')
const {
  defineConfig
} = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'inview-timer.js'),
      name: 'InviewTimerModule',
      formats: ['umd'],
      fileName: (format) => `inview-timer.${format}.js`
    },
  }
})

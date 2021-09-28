const path = require('path')
const {
  defineConfig
} = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'lalo.js'),
      name: 'Lalo',
      formats: ['umd'],
      fileName: (format) => `lalo.${format}.js`
    },
  }
})

const path = require('path')
const {
  defineConfig
} = require('vite')

import eslintPlugin from 'vite-plugin-eslint';

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'lalo.js'),
      name: 'Lalo',
      formats: ['umd'],
      fileName: (format) => `lalo.${format}.js`
    },
  },
  plugins: [eslintPlugin({
    fix: true
  })],
})

const daisyui = require('daisyui')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

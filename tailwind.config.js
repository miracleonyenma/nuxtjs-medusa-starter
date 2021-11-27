const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
	 './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: [
          'Open Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

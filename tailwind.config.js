module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
    extend: {
      backgroundImage: theme => ({
       'hero-pattern': "url('images/pic.png')",
      
      })
    }
  },
  variants: {
    extend: {
      maxWidth: ['hover', 'focus'],

    },
  },
  plugins: [],
}

module.exports = {
  purge: ['pages/**/*.js'],
  theme: {
    extend: {},
    screens: {
      tablet: '640px',
      laptop: '760px',
      desktop: '760px'
    }
  },
  variants: {
    padding: ['responsive']
  },
  plugins: []
}

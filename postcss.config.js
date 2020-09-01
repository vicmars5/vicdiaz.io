module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.js',
          './components/**/*.js',
          './organisms/**/*.js'
        ],
        whitelist: ['html', 'body'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }
    ]
  ]
}

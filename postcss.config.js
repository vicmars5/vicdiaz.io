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
        whitelist: [
          'html', 'body', 'img', 'a', 'p', 'ul',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }
    ]
  ]
}

module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*.{js,jsx,ts,tsx}']
      }
    ]
  ]
}

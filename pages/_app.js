// pages/_app.js
import PropTypes from 'prop-types'
import '../styles/index.css'

export default function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object
}

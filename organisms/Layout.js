import PropTypes from 'prop-types'
import Head from 'next/head'

export default function Layout (props) {
  const { pageTitle, description, children } = props

  return (
    <div className='container mx-auto mt-5'>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' description={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

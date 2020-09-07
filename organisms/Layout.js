import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout (props) {
  const { pageTitle, description, children } = props

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' description={description} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>

      <nav>
        <div className='container mx-auto text-center'>
          <Link href='/'>
            <a className='text-2xl font-sans text-blue-600 font-black p-3 hover:text-blue-400 inline-block'>
              vicdiaz.io
            </a>
          </Link>
        </div>
      </nav>
      <main className='container mx-auto mt-5 sm:px-2 px-6'>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

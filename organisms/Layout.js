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
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <nav className='bg-white'>
        <div className='container mx-auto text-center'>
          <Link href='/'>
            <a className='text-xl font-bold p-2 hover:text-blue-500 hover:bg-white inline-block'>
              Vic's Blog
            </a>
          </Link>
        </div>
      </nav>
      <main className='container mx-auto mt-5'>
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

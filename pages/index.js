import Head from 'next/head'

export default function Home ({ pageTitle, description, ...props }) {
  return (
    <div className='container mx-auto mt-5'>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' description={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main>
        <h1>{pageTitle}</h1>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      pageTitle: 'Vic\'s Blog',
      description: 'Hablo de lo que me gusta: Ingenieria de software, programación y desarrollo web.'
    }
  }
}

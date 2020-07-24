import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../organisms/Layout'
import getPosts from '../utils/get-posts-slugs'
import formatDate from '../utils/format-date'

export default function Home ({ pageTitle, description, posts, ...props }) {
  return (
    <Layout pageTitle={pageTitle} description={description}>
      {posts.map((post) => (
        <article key={post.path}>
          <Link href={post.path} key={post.path}>
            <a>
              <h2 className='inline-block leading-none w-full text-2xl'>
                {post.title}
              </h2>
              <p className='leading-none text-gray-700 pb-3 text-base'>
                {formatDate(new Date(post.date))}
              </p>
              <p className='leading-none text-gray-700'>{post.description}</p>
            </a>
          </Link>
        </article>
      ))}
    </Layout>
  )
}

Home.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  posts: PropTypes.array
}

export async function getStaticProps () {
  const posts = await getPosts()
  const filteredPosts = posts.map((post) => ({
    title: post.title,
    path: post.path,
    description: post.description,
    date: post.date
  }))

  return {
    props: {
      pageTitle: 'Vic\'s Blog',
      description: 'Hablo de lo que me gusta: Ingenieria de software, programación y desarrollo web.',
      posts: filteredPosts
    }
  }
}

import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../organisms/Layout'
import getPosts from '../utils/get-posts-slugs'

export default function Home ({ pageTitle, description, posts, ...props }) {
  return (
    <Layout pageTitle={pageTitle} description={description}>
      {posts.map((post) => (
        <article key={post.path}>
          <Link href={post.path} key={post.path}>
            <a>
              <h2 className='inline-block'>
                {post.title}
              </h2>
              <p className='leading-none text-gray-700'>{post.description}</p>
              <small className='text-gray-700'>{post.date}</small>
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

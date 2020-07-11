import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../organisms/layout'
import getPosts from '../utils/get-posts-slugs'

export default function Home ({ pageTitle, description, posts, ...props }) {
  return (
    <Layout pageTitle={pageTitle} description={description}>
      <h1>Hello world</h1>
      {posts.map((post) => (
        <Link href={post.path} key={post.path}>
          <a>{post.title}</a>
        </Link>
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
    path: post.path
  }))

  return {
    props: {
      pageTitle: 'Vic\'s Blog',
      description: 'Hablo de lo que me gusta: Ingenieria de software, programación y desarrollo web.',
      posts: filteredPosts
    }
  }
}

import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Layout from '../../organisms/Layout'
import CodeBlock from '../../organisms/CodeBlock'
import { getPost, getSlugs, getPath } from '../../utils/get-posts-slugs'

export default function BlogPost ({ markdownBody, title, pageTitle, description, author }) {
  return (
    <Layout pageTitle={pageTitle} description={description}>
      <div className=''>
        <article>
          <div className='pb-5'>
            <h1>{title}</h1>
            <small>{author}</small>
          </div>
          <ReactMarkdown
            source={markdownBody}
            renderers={{ code: CodeBlock }}
          />
        </article>
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  markdownBody: PropTypes.string.isRequired,
  title: PropTypes.string,
  pageTitle: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
}

export async function getStaticProps ({ ...ctx }) {
  const { postname } = ctx.params

  return {
    props: await getPost(postname)
  }
}

export async function getStaticPaths () {
  const blogSlugs = getSlugs()
  const paths = blogSlugs.map(getPath)

  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

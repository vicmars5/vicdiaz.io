import matter from 'gray-matter'

export function getSlugs () {
  return ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').replace(' ', '0').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../posts', true, /\.md$/))
}

export async function getContent (slug) {
  const mdFile = await import(`../posts/${slug}.md`)
  const { data, content } = matter(mdFile.default)

  return {
    ...data,
    markdownBody: content
  }
}

export function getPath (slug) {
  return `/post/${slug}`
}

export async function getPost (slug) {
  return {
    ...await getContent(slug),
    path: getPath(slug)
  }
}

export default async function getPosts () {
  const slugs = getSlugs()
  const posts = await Promise.all(slugs.map(getPost))
  return posts
}

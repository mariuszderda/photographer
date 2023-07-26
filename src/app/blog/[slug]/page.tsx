import BlogArticle from '@/components/blogArticle/BlogArticle'
import { fetchGraphQL } from '@/utils/contentful'
import { blogArticleQuery } from '@/utils/contentfulQuery'

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params
  const {
    data: { blogCollection },
  } = await fetchGraphQL(blogArticleQuery, { slug })

  const article = blogCollection.items[0]

  return (
    <main>
      <BlogArticle
        title={article.title}
        description={article.description}
        blogArticle={article.blogArticle}
        mainImage={article.mainImage}
      />
    </main>
  )
}

export default Page

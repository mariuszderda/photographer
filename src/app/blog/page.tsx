import BlogPostCard from '@/components/blogPostCard/BlogPostCard'
import CardContainer from '@/components/ui/cardContainer/CardContainer'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import { fetchGraphQL } from '@/utils/contentful'
import { blogCollectionQuery } from '@/utils/contentfulQuery'

const BlogListPage = async () => {
  const {
    data: { blogCollection },
  } = await fetchGraphQL(blogCollectionQuery)

  return (
    <main>
      <TitleHeader tag="h2" weight="bold" size="xLarge">
        Latest articles
      </TitleHeader>
      <CardContainer>
        {blogCollection.items.map(
          (
            post: {
              title: string
              description: string
              slug: string
              sys: {
                firstPublishedAt: string
              }
              mainImage: {
                image: {
                  width: number
                  height: number
                  secure_url: string
                }[]
              }
            },
            idx: number
          ) => (
            <BlogPostCard post={post} key={post.slug} blog={idx === 0} />
          )
        )}
      </CardContainer>
    </main>
  )
}

export default BlogListPage

import SingleImageGallery from '@/components/singleImageGallery/SingleImageGallery'
import { fetchGraphQL } from '@/utils/contentful'
import { galleryItem } from '@/utils/contentfulQuery'

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params: { slug } }: PageProps) => {
  const querySlug = { slug }
  const {
    data: { galleryCollection },
  } = await fetchGraphQL(galleryItem, querySlug)
  const gallery = galleryCollection.items[0]

  return (
    <main>
      <SingleImageGallery gallery={gallery} />
    </main>
  )
}

export default Page

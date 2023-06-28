import Gallery from '@/components/gallery/Gallery'
import { fetchGraphQL } from '@/utils/contentful'
import { galleryCollectionQuery } from '@/utils/contentfulQuery'

const Page = async () => {
  /* get data from contentful */
  const { data } = await fetchGraphQL(galleryCollectionQuery)
  const { items } = data.galleryCollection

  return (
    <main>
      <Gallery items={items} />
    </main>
  )
}

export default Page

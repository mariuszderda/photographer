import { FC } from 'react'
import SingleImageGallery from '@/components/singleImageGallery/SingleImageGallery'

interface PageProps {
  params: {
    id: string
  }
}

const Page: FC<PageProps> = ({ params: { id } }) => {
  return (
    <main>
      <SingleImageGallery id={id} />
    </main>
  )
}

export default Page

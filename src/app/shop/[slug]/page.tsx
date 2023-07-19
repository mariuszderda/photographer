import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import { FC } from 'react'

interface PageProps {
  params: {
    slug: string
  }
}

const Page: FC<PageProps> = ({ params: { slug } }) => {
  return (
    <main>
      <TitleHeader tag="h1" size="xLarge" weight="bold">
        {slug}
      </TitleHeader>
    </main>
  )
}

export default Page

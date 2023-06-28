import Paragraph from '@/components/ui/paragraph/Paragraph'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import styles from './styles.module.scss'

interface GalleryCardProps {
  imageSrc: string
  title: string
  slug: string
}

const GalleryCard: FC<GalleryCardProps> = ({ imageSrc, slug, title }) => {
  return (
    <Link href={`/gallery/${slug}`} className={styles['image-card']}>
      <div className={styles['image-card__title']}>
        <TitleHeader tag="h3" weight="normal" size="xSmall">
          {title}
        </TitleHeader>
        <Paragraph fontColor="lightGray" size="small">
          See more <BsArrowUpRight />
        </Paragraph>
      </div>
      <Image
        src={imageSrc}
        alt={`image ${imageSrc}`}
        width={500}
        height={1000}
        // loading="lazy"
      />
    </Link>
  )
}

export default GalleryCard

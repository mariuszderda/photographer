import { FC } from 'react'
import Image from 'next/image'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Paragraph from '@/components/ui/paragraph/Paragraph'
import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import styles from './styles.module.scss'

interface GalleryCardProps {
  imageSrc: number
}

const GalleryCard: FC<GalleryCardProps> = ({ imageSrc }) => {
  return (
    <Link href={`/gallery/${imageSrc}`} className={styles['image-card']}>
      <div className={styles['image-card__title']}>
        <TitleHeader tag="h3" weight="normal" size="xSmall">
          Zorza polarna #{imageSrc}
        </TitleHeader>
        <Paragraph fontColor="lightGray" size="small">
          See more <BsArrowUpRight />
        </Paragraph>
      </div>
      <Image
        src={`/images/gallery/monolit-moments-${imageSrc}.webp`}
        alt={`image ${imageSrc}`}
        width={500}
        height={1000}
        // loading="lazy"
      />
    </Link>
  )
}

export default GalleryCard

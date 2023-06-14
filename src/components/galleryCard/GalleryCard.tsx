import { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

interface GalleryCardProps {
  imageSrc: number
}

const GalleryCard: FC<GalleryCardProps> = ({ imageSrc }) => {
  return (
    <div className={styles.image}>
      <Image
        src={`/images/gallery/monolit-moments-${imageSrc}.webp`}
        alt={`image ${imageSrc}`}
        width={500}
        height={1000}
        loading="lazy"
      />
    </div>
  )
}

export default GalleryCard

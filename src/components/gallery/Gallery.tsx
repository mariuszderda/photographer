import { FC } from 'react'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import GalleryCard from '@/components/galleryCard/GalleryCard'
import styles from './styles.module.scss'

const Gallery: FC = () => {
  const imageArray: number[] = Array.from({ length: 27 }, (_, i) => i + 1)
  // imageArray.fill(14, 1, 14)

  // console.log(imageArray)

  return (
    <section className={styles.gallery}>
      <TitleHeader tag="h1" size="xLarge">
        Gallery
      </TitleHeader>
      <div className={styles['image-container']}>
        {imageArray.map((item) => (
          <GalleryCard key={item} imageSrc={item} />
        ))}
      </div>
    </section>
  )
}

export default Gallery

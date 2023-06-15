'use client'

import { FC } from 'react'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import GalleryCard from '@/components/galleryCard/GalleryCard'
import { Masonry } from 'react-plock'
import styles from './styles.module.scss'

const Gallery: FC = () => {
  const imageArray: number[] = Array.from({ length: 27 }, (_, i) => i + 1)

  return (
    <section className={styles.gallery}>
      <TitleHeader tag="h1" size="xLarge">
        Gallery
      </TitleHeader>
      <div className={styles['image-container']}>
        <Masonry
          items={imageArray}
          config={{
            columns: [1, 2, 3],
            gap: [12, 12, 24],
            media: [640, 768, 1024],
          }}
          render={(item) => <GalleryCard key={item} imageSrc={item} />}
        />
      </div>
    </section>
  )
}

export default Gallery

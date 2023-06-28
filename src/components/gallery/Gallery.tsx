'use client'

import GalleryCard from '@/components/galleryCard/GalleryCard'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import { Masonry } from 'react-plock'

import styles from './styles.module.scss'

interface GalleryProps {
  items: {
    galleryTitle: string
    slug: string
    mainImage: {
      image: {
        url: string
      }[]
    }
  }[]
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    <section className={styles.gallery}>
      <TitleHeader tag="h1" size="xLarge">
        Gallery
      </TitleHeader>
      <div className={styles['image-container']}>
        <Masonry
          items={items}
          config={{
            columns: [1, 2, 3],
            gap: [12, 12, 24],
            media: [640, 768, 1024],
          }}
          render={(item) => (
            <GalleryCard
              slug={item.slug}
              key={item.slug}
              title={item.galleryTitle}
              imageSrc={item.mainImage.image[0].url}
            />
          )}
        />
      </div>
    </section>
  )
}

export default Gallery

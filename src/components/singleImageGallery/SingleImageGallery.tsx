import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Image from 'next/image'
import { FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './styles.module.scss'

interface SingleImageGalleryProps {
  gallery: {
    galleryTitle: string
    mainImage: {
      image: {
        url: string
      }[]
    }
    galleryImagesCollection: {
      items: {
        image: {
          url: string
          public_id: string
          width: number
          height: number
        }[]
      }[]
    }
  }
}

const SingleImageGallery: FC<SingleImageGalleryProps> = ({
  gallery: {
    galleryTitle,
    mainImage,
    galleryImagesCollection: { items },
  },
}) => {
  return (
    <section className={styles.container}>
      <TitleHeader tag="h2" size="xLarge" weight="bold" className={styles['gallery-title']}>
        {galleryTitle}
      </TitleHeader>
      <div className={styles.gallery}>
        <div className={styles['main-photo']}>
          <Image src={mainImage.image[0].url} alt="image" fill />
        </div>
        <div className={styles.miniature}>
          {items.map((item) => {
            const { url, public_id: publicId, width, height } = item.image[0]
            return (
              <div className={styles['miniature-container']} key={publicId}>
                <Image src={url} alt="alt" width={width} height={height} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SingleImageGallery

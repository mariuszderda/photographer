'use client'

import GalleryModal from '@/components/galleryModal/GalleryModal'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Image from 'next/image'
import React, { FC, useMemo, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './styles.module.scss'

interface SingleImageGalleryProps {
  gallery: {
    galleryTitle: string
    mainImage: {
      title: string
      slug: string
      image: {
        url: string
        public_id: string
        width: number
        height: number
      }[]
    }
    galleryImagesCollection: {
      items: {
        title: string
        slug: string
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<string | undefined>('')
  const handleModalOpen = ({ e }: { e: React.MouseEvent<HTMLDivElement, MouseEvent> }) => {
    setCurrentImage(e.currentTarget.dataset?.slug)
    setIsModalOpen((prevState) => !prevState)
  }

  const galleryImages = useMemo(() => {
    const firstImage = {
      url: mainImage.image[0].url,
      title: mainImage.title,
      slug: mainImage.slug,
      width: mainImage.image[0].width,
      height: mainImage.image[0].height,
    }
    const restImages = items.map((item) => {
      return {
        url: item.image[0].url,
        title: item.title,
        slug: item.slug,
        width: item.image[0].width,
        height: item.image[0].height,
      }
    })
    return [firstImage, ...restImages]
  }, [mainImage, items])

  return (
    <>
      <section className={`${styles.container} ${isModalOpen ? 'active' : null}`}>
        <TitleHeader tag="h2" size="xLarge" weight="bold" className={styles['gallery-title']}>
          {galleryTitle}
        </TitleHeader>
        <div className={styles.gallery}>
          {galleryImages.map((img, idx) => (
            <div
              role="presentation"
              onClick={(e) => handleModalOpen({ e })}
              key={img.slug}
              data-slug={img.slug}
              className={`${styles['gallery-image']} ${idx > 0 ? styles.firstImage : ''}`}
            >
              <Image src={img.url} alt={img.title} width={img.width} height={img.height} />
            </div>
          ))}
        </div>
      </section>
      {isModalOpen && (
        <GalleryModal
          handleOpen={() => setIsModalOpen(false)}
          currentImage={currentImage}
          images={galleryImages}
        />
      )}
    </>
  )
}

export default SingleImageGallery

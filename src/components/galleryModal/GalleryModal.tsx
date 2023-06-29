import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styles from './styles.module.scss'

interface GalleryModalProps {
  handleOpen: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  images: {
    url: string
    title: string
    slug: string
    width: number
    height: number
  }[]
  currentImage: string | undefined
}

const GalleryModal: FC<GalleryModalProps> = ({ handleOpen, currentImage, images }) => {
  const [firstImage, setFirstImage] = useState(currentImage)

  const mainImage = images.find((item) => item.slug === firstImage)

  const handleChangeImage = (e: React.MouseEvent, imageSlug: string) => {
    e.stopPropagation()
    setFirstImage(imageSlug)
  }

  const handleNextArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const currentIndex = images.findIndex((item) => item.slug === mainImage?.slug)
    if (currentIndex + 1 === images.length) {
      return setFirstImage(images[0].slug)
    }
    return setFirstImage(images[currentIndex + 1].slug)
  }
  const handlePreviosArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const currentIndex = images.findIndex((item) => item.slug === mainImage?.slug)
    if (currentIndex - 1 < 0) {
      return setFirstImage(images[images.length - 1].slug)
    }
    return setFirstImage(images[currentIndex - 1].slug)
  }

  if (!mainImage) return null

  return (
    <div role="presentation" onClick={handleOpen} className={styles.container}>
      {/* <button type="button"> */}
      {/*  <GrClose size={48} className={styles.close} /> */}
      {/* </button> */}

      <TitleHeader tag="h4" size="xSmall" weight="normal">
        {mainImage.title}
      </TitleHeader>
      <br />
      <div className={styles['main-image']}>
        <IoIosArrowBack
          size={48}
          className={styles['arrow-left']}
          onClick={(e) => handlePreviosArrowClick(e)}
        />
        <Image
          src={mainImage.url}
          alt={mainImage.title}
          width={mainImage.width}
          height={mainImage.height}
        />
        <IoIosArrowForward
          size={48}
          className={styles['arrow-right']}
          onClick={(e) => handleNextArrowClick(e)}
        />
      </div>
      <div className={styles['miniature-box']}>
        {images.map((image) => (
          <div
            key={image.slug}
            className={`${styles['image-box']} ${
              image.slug === mainImage.slug ? styles.border : ''
            }`}
          >
            <Image
              src={image.url}
              alt={image.title}
              width={image.width}
              height={image.height}
              onClick={(e) => handleChangeImage(e, image.slug)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryModal

import { FC, useEffect, useState } from 'react'
import styles from '@/components/singleImageGallery/styles.module.scss'
import Image from 'next/image'

interface ModalGalleryProps {
  id: string
}
const imageArray: number[] = Array.from({ length: 6 }, (_, i) => Math.floor(Math.random() * 26) + i)

const ModalGallery: FC<ModalGalleryProps> = ({ id }) => {
  const [images, setImages] = useState<number[]>([])
  const [currentImage, setCurrentImage] = useState<number>(0)

  /* TODO: delete after add contentful */
  useEffect(() => {
    setImages(() => [+id, ...imageArray])
  }, [id])

  const handleNextImage = () => {
    setCurrentImage((prevState) => prevState + 1)
    if (currentImage === imageArray.length) setCurrentImage(0)
  }
  const handlePreviousImage = () => {
    setCurrentImage((prevState) => prevState - 1)
    if (currentImage === 0) setCurrentImage(imageArray.length)
  }

  const handleIndexImage = (idx: number) => {
    const index = images.findIndex((item) => +item === +idx)
    setCurrentImage(index)
  }

  return (
    <div className={styles.container}>
      <h1>id: {id}</h1>
      <Image
        src={`/images/gallery/monolit-moments-${images[currentImage]}.webp`}
        alt="image"
        width={2000}
        height={1500}
        className={styles['main-image']}
      />
      <button type="button" onClick={handleNextImage}>
        next
      </button>

      <button type="button" onClick={handlePreviousImage}>
        prev
      </button>
      <div className={styles['miniature-container']}>
        {images.map((item) => (
          <div key={`item${item})}`}>
            <Image
              onClick={() => handleIndexImage(item)}
              src={`/images/gallery/monolit-moments-${item}.webp`}
              alt="image"
              width={200}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModalGallery

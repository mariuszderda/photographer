import { FC } from 'react'
import styles from './styles.module.scss'

interface SingleImageGalleryProps {
  id: string
}

const SingleImageGallery: FC<SingleImageGalleryProps> = ({ id }) => {
  return (
    <div className={styles.container}>
      <h1>Id: {id}</h1>
    </div>
  )
}

export default SingleImageGallery

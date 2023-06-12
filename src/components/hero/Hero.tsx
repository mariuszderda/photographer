import { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background_image}>
        <Image src="/images/monolit-moments_background.jpg" alt="Background image" fill />
      </div>
      <div className={styles['hero-title__container']}>
        <h1 className={styles['hero-title']}>
          <span className="sr-only">Monolit Moments - </span>It’s high time you told your story
        </h1>
      </div>
    </section>
  )
}

export default Hero

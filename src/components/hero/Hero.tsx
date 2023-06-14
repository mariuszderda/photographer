import { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

interface HeroProps {
  pageName: string
  pageMotto: string
  heroImage: {
    url: string
  }[]
}

const Hero: FC<HeroProps> = ({ pageName, pageMotto, heroImage }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.background_image}>
        <Image src={heroImage[0].url} alt="Background image" fill />
      </div>
      <div className={styles['hero-title__container']}>
        <h1 className={styles['hero-title']}>
          <span className="sr-only">{pageName} - </span>
          {pageMotto}
        </h1>
      </div>
    </section>
  )
}

export default Hero

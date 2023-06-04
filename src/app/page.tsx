import Image from 'next/image'
import { TitleHeader } from '@/components/ui/tilteHeader/TitleHeader'
import styles from '../styles/pages/Home.module.scss'

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.background_image}>
          <Image src="/images/monolit-moments_background.jpg" alt="Background image" fill />
        </div>
        <h1 className={styles.title}>
          <span className="sr-only">Monolit Moments - </span>It’s high time you told your story
        </h1>
      </section>
      <section>
        <TitleHeader tag="h2" weight="bold" size="xLarge">
          O mnie
        </TitleHeader>
      </section>
    </main>
  )
}

export default Home

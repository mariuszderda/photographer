import Image from 'next/image'
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
        <h2>O mnie</h2>
      </section>
    </main>
  )
}

export default Home

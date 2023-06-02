import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.background_image}>
        <Image src="/images/monolit-moments_background.jpg" alt="Background image" fill />
      </div>
      <p>Monolit Moments</p>
    </main>
  )
}

export default Home

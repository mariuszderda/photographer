import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background_image}>
        <Image src="/images/monolit_moments_background.webp" alt="Background image" fill />
      </div>
      <p>Monolit Moments</p>
    </main>
  )
}

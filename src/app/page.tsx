import Image from 'next/image'
import { TitleHeader } from '@/components/ui/tilteHeader/TitleHeader'
import { Paragraph } from '@/components/ui/paragraph/Paragraph'
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
        <Paragraph className={styles.paragraph}>
          Jako pasjonat fotografii, uwielbiam poznawać świat poprzez obiektyw aparatu. Fascynuje
          mnie możliwość uchwycenia piękna i emocji, które otaczają nas na co dzień, a także
          możliwość dzielenia się nimi z innymi. Zdjęcia są dla mnie sposobem na wyrażenie siebie i
          pokazanie piękna, które widzę wokół mnie. W swojej pracy jako fotograf stawiam na estetykę
          i dbam o każdy szczegół. Nie tylko uważnie dobieram kadry, ale także zwracam uwagę na
          kompozycję, kolory i światło. Dzięki temu moje zdjęcia są pełne emocji i oddają całą
          atmosferę danej chwili. Jako fotograf staram się uchwycić niepowtarzalne chwile, które
          pozostaną w pamięci na długo. Moją misją jest tworzenie trwałych wspomnień dla moich
          klientów, dzięki którym będą mogli powrócić do tych unikalnych chwil w każdej chwili. W
          mojej pracy cenię sobie oryginalność i kreatywność. Staram się znaleźć zupełnie nowe
          perspektywy i podejścia do fotografii, aby moje zdjęcia były wyjątkowe i niepowtarzalne.
          Wierzę, że każda sesja zdjęciowa to wyjątkowa przygoda, której efektem są nie tylko piękne
          fotografie, ale także niezapomniane wrażenia.
        </Paragraph>
      </section>
    </main>
  )
}

export default Home

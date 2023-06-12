import { FC } from 'react'
import { TitleHeader } from '@/components/ui/tilteHeader/TitleHeader'
import { Paragraph } from '@/components/ui/paragraph/Paragraph'
import Image from 'next/image'
import styles from './styles.module.scss'

const About: FC = () => {
  return (
    <section className={styles.about}>
      <article className={styles.article}>
        <TitleHeader tag="h2" weight="bold" size="xLarge" className={styles.about__title}>
          O mnie
        </TitleHeader>
        <Paragraph className={styles.paragraph}>
          <span>
            Jako pasjonat fotografii, uwielbiam poznawać świat poprzez obiektyw aparatu. Fascynuje
            mnie możliwość uchwycenia piękna i emocji, które otaczają nas na co dzień, a także
            możliwość dzielenia się nimi z innymi. Zdjęcia są dla mnie sposobem na wyrażenie siebie
            i pokazanie piękna, które widzę wokół mnie.
          </span>
          <span>
            W swojej pracy jako fotograf stawiam na estetykę i dbam o każdy szczegół. Nie tylko
            uważnie dobieram kadry, ale także zwracam uwagę na kompozycję, kolory i światło. Dzięki
            temu moje zdjęcia są pełne emocji i oddają całą atmosferę danej chwili.
          </span>
          <span>
            Jako fotograf staram się uchwycić niepowtarzalne chwile, które pozostaną w pamięci na
            długo. Moją misją jest tworzenie trwałych wspomnień dla moich klientów, dzięki którym
            będą mogli powrócić do tych unikalnych chwil w każdej chwili.
          </span>
          <span>
            W mojej pracy cenię sobie oryginalność i kreatywność. Staram się znaleźć zupełnie nowe
            perspektywy i podejścia do fotografii, aby moje zdjęcia były wyjątkowe i niepowtarzalne.
            Wierzę, że każda sesja zdjęciowa to wyjątkowa przygoda, której efektem są nie tylko
            piękne fotografie, ale także niezapomniane wrażenia.
          </span>
        </Paragraph>
      </article>
      <div className={styles['image-container']}>
        <Image src="/images/about-image.jpg" alt="About image" width={560} height={932} />
      </div>
    </section>
  )
}

export default About

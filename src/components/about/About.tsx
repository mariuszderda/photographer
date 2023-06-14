import { FC } from 'react'
import Image from 'next/image'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Paragraph from '@/components/ui/paragraph/Paragraph'
import styles from './styles.module.scss'

interface AboutProps {
  aboutTitle: string
  aboutParagraph: {
    json: {
      content: {
        content: {
          value: string
        }[]
      }[]
    }
  }
  aboutImage: {
    url: string
  }[]
}

const About: FC<AboutProps> = ({ aboutTitle, aboutImage, aboutParagraph }) => {
  const paragraphs = aboutParagraph.json.content[0].content[0].value.split(/\r?\n\n/)

  return (
    <section className={styles.about}>
      <article className={styles.article}>
        <TitleHeader tag="h2" weight="bold" size="xLarge" className={styles.about__title}>
          {aboutTitle}
        </TitleHeader>
        <div className={styles.paragraph}>
          {paragraphs.map((paragraph: string) => (
            <Paragraph>{paragraph}</Paragraph>
          ))}
        </div>
      </article>
      <div className={styles['image-container']}>
        <Image src={aboutImage[0].url} alt="About image" width={560} height={932} />
      </div>
    </section>
  )
}

export default About

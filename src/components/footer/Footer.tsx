import { FC } from 'react'
import Link from 'next/link'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import Paragraph from '@/components/ui/paragraph/Paragraph'
import styles from './styles.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <section className={styles.footer__title}>
          <TitleHeader tag="h2" size="xSmall">
            Monolit Moments
          </TitleHeader>
        </section>
        <section className={styles.footer__links}>
          <TitleHeader tag="h2" size="xSmall" className={styles['footer__info-title']}>
            Informacje
          </TitleHeader>
          <div>
            <Link className={styles.footer__link} href="/polityka-prywatnosci">
              Polityka prywatności
            </Link>
            <Link className={styles.footer__link} href="/regulamin">
              Regulamin
            </Link>
          </div>
        </section>
        <section className={styles['footer__social-copyright']}>
          <div className={styles['footer__social-copyright--social']}>
            <FaTwitterSquare size="2rem" />
            <FaFacebookSquare size="2rem" />
            <FaInstagramSquare size="2rem" />
            <FaYoutubeSquare size="2rem" />
            <FaDribbbleSquare size="2rem" />
          </div>
          <div className={styles['footer__social-copyright--copyright']}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Paragraph size="small" fontColor="lightGray">
              Copyright 2021 &copy; Teller company. All right reserved
            </Paragraph>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer

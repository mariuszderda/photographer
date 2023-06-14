'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import useScrollPosition from '@/hook/useScrollPosition'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const handleNavigationToogle = () => {
    document.body.classList.toggle('nagivation-active')
    setIsOpen((prevState) => !prevState)
  }
  const scrollPosition = useScrollPosition()

  return (
    <header
      className={`${styles.header} ${
        (scrollPosition > 200 || pathname !== '/') && !isOpen ? styles['header-backgroud'] : ''
      }`}
    >
      <div className={styles.header__container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <Image src="/images/logo.svg" alt="logo" width={216} height={64} />
          </Link>
        </div>
        <button
          onClick={handleNavigationToogle}
          className={styles.mobile_toggle_bar}
          type="button"
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
          <IoCloseOutline className={`${styles.close} ${isOpen ? styles.active : ''}`} size={32} />
          <HiBars3BottomRight
            className={`${styles.bars} ${isOpen ? styles.active : ''}`}
            size={32}
          />
        </button>
        <nav className={`${styles.navigation}  ${isOpen ? styles.active : ''} `}>
          <ul role="list" data-visible="false" className={`${styles.list}`}>
            <li className={styles['list-item']}>
              <Link onClick={handleNavigationToogle} href="/">
                O mnie
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleNavigationToogle} href="/gallery">
                Galeria
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleNavigationToogle} href="/blog">
                Blog
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleNavigationToogle} href="/shop">
                Sklep
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleNavigationToogle} href="/contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

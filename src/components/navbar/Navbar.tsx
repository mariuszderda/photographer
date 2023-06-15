'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import useScrollPosition from '@/hook/useScrollPosition'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [headerBackground, setHeaderBackground] = useState(false)
  const [mobileNavigation, setMobileNavigation] = useState(false)
  const pathname = usePathname()
  const scrollPosition = useScrollPosition()

  const handleNavigationToggle = () => {
    document.body.classList.toggle('navigation-active')
    setMobileNavigation((prevState) => !prevState)
    setIsOpen((prevState) => !prevState)
    if (isOpen) setHeaderBackground(false)
  }

  const handleCloseNavigation = () => {
    setIsOpen(false)
    if (mobileNavigation) {
      document.body.classList.toggle('navigation-active')
      setMobileNavigation(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      setHeaderBackground(false)
    } else if (pathname !== '/' || scrollPosition > 200) {
      setHeaderBackground(true)
    }
  }, [isOpen, pathname, scrollPosition])

  useEffect(() => {
    if (scrollPosition > 200) {
      setHeaderBackground(true)
    } else {
      setHeaderBackground(false)
    }
    if (pathname !== '/') setHeaderBackground(true)
  }, [scrollPosition, pathname])

  return (
    <header className={`${styles.header} ${headerBackground ? styles['header-background'] : ''}`}>
      <div className={styles.header__container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <Image src="/images/logo.svg" alt="logo" width={216} height={64} />
          </Link>
        </div>
        <button
          onClick={handleNavigationToggle}
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
              <Link onClick={handleCloseNavigation} href="/">
                O mnie
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleCloseNavigation} href="/gallery">
                Galeria
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleCloseNavigation} href="/blog">
                Blog
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleCloseNavigation} href="/shop">
                Sklep
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link onClick={handleCloseNavigation} href="/contact">
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

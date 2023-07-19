import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { apfelRegular, clashDisplayBold, clashDisplayMedium } from '@/utils/font'
import React from 'react'
import '../styles/globals.scss'

export const metadata = {
  title: 'Monolit Moments',
  description: 'Monolit Moments - It’s high time you told your story',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={`${clashDisplayBold.variable} ${clashDisplayMedium.variable} ${apfelRegular.variable}`}
  >
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout

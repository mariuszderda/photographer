import '../styles/globals.scss'
import { apfelRegular, clashDisplayBold, clashDisplayMedium } from '@/utils/font'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Monolit Moments',
  description: 'Monolit Moments - It’s high time you told your story',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
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
}

export default RootLayout

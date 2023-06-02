import '../styles/globals.scss'
import { apfelRegular, clashDisplayBold, clashDisplayMedium } from '@/utils/font'
import Navbar from '@/components/navbar/Navbar'

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
      </body>
    </html>
  )
}

export default RootLayout

import '../styles/globals.scss'
import { apfelRegular, clashDisplayBold, clashDisplayMedium } from '@/utils/font'

export const metadata = {
  title: 'Monolit Moments',
  description: 'Monolit Moments - It’s high time you told your story',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${clashDisplayBold.variable} ${clashDisplayMedium.variable} ${apfelRegular.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

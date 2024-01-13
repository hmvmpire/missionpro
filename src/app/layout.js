import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './_components/footer'
import Header from './_components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mission Pro',
  description: 'Mission Pro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

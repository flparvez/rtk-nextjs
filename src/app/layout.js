import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './redux/providers'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Redux-Toolkit Next js app',
  description: 'Redux-Toolkit Next js app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <Providers> {children} </Providers>
      </body>
    </html>
  )
}

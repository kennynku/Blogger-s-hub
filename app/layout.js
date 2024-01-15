import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar/page'
import Banner from './Components/Banner'
import Footer from './Components/Footer/Footer'
import { AuthProvider } from './Components/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bloggers hub',
  description: 'Blogging website by bloggers for bloggers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </AuthProvider>
        </body>
    </html>
  )
}

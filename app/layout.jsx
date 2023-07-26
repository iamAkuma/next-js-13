import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
const poppins = Poppins({ subsets: ['latin'],
weight: ["400", "700"],
})

export const metadata = {
  title: 'aKuma',
  description: 'Web Development Lesson with Next.js',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header></Header>
       <main className='container'>{children}</main> </body>
    </html>
  )
}

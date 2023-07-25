import './globals.css'
import { Poppins } from 'next/font/google'

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
       <main className='container'>{children}</main> </body>
    </html>
  )
}

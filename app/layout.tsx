import './globals.css'
import type { Metadata } from 'next'
import Header from './Header'
// import {Providers} from './Providers'
import Providers from './Providers'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Providers> */}
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all
                        duration-700 '>
        <Providers>
          <Header />

          <div className='mex-w-6xl mx-auto'>
            {children}
          </div>
        </Providers>
      </body>
      {/* </Providers> */}
    </html>
  )
}

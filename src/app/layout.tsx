import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://enc1101.zhiyan114.com/'),
  title: 'Composition Portfolio - zhiyan114',
  description: 'A final portfolio for Comp1101.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enc1101.zhiyan114.com/',
    siteName: 'Composition Portfolio - zhiyan114',
    title: 'Composition Portfolio - zhiyan114',
    description: 'A final portfolio for Comp1101.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

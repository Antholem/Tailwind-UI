"use client"
import { ReactNode } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './views';
import theme from './theme';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const color = theme();

  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/logo.png" />
        <title>
          Tailwind UI
        </title>
      </head>
      <body className={`${inter.className} ${color.bgDark} ${color.textDefault}`}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  )
}

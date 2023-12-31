"use client"
import { ReactNode } from 'react';
import useDarkModeStore from './_store/theme-store';
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './views';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const { darkMode } = useDarkModeStore();
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/logo.png" />
        <title>
          Tailwind UI
        </title>
      </head>
      <body className={`${inter.className} bg-white ${darkMode && 'dark-mode'}`}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  )
}

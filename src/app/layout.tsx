"use client"
import { ReactNode } from 'react';
import globalState from './state';
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/app/_layouts';
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const { darkMode } = globalState();

  const getCurrentPath = usePathname();
  const trimmedPath = getCurrentPath.replace(/^./, '');
  const formattedPath = trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);
  const currentPath = getCurrentPath === "/" ? "Tailwind UI" : `Tailwind UI - ${formattedPath}`;

  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/logo.png" />
        <title>
          {currentPath}
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

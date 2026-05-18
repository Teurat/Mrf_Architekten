import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Swiss Arch-Concept | Architekturbüro Schweiz',
  description: 'Ein junges Architekturbüro in der Schweiz – mit klaren Ideen, präziser Planung und dem Anspruch, Räume mit Qualität zu schaffen.',
  keywords: ['Architektur', 'Architekturbüro', 'Schweiz', 'Bauplanung', 'Architekturplanung'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

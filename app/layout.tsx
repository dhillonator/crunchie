import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$CRUNCH - The Most Degenerate Token on Solana',
  description: 'Ape into $CRUNCH and become financially ruined! 🚀 WAGMI (probably not)',
  keywords: 'CRUNCH, Solana, meme coin, pump.fun, degen, crypto',
  openGraph: {
    title: '$CRUNCH - Moon or McDonalds',
    description: 'The ultimate shitcoin that will either make you rich or teach you a valuable lesson about gambling',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$CRUNCH',
    description: 'Probably nothing... or everything 🚀',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
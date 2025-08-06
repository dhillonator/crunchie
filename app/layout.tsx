import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$CRUNCH - The Most Degenerate Token on Solana',
  description: 'Ape into $CRUNCH and become financially ruined! 🚀 WAGMI (probably not)',
  keywords: 'CRUNCH, Solana, meme coin, pump.fun, degen, crypto',
  openGraph: {
    title: '$CRUNCH',
    description: 'The best gamer on pump.fun until a better one joins',
    images: ['/crunchie.png'],
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
      <head>
        {/* ...other head tags... */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-258XV85C4M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-258XV85C4M');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
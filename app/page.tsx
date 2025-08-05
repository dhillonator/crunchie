'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const memes = [
  '/memes/meme1.gif',
  '/memes/meme2.gif',
  '/memes/meme3.gif'
]

const faqs = [
  {
    q: "Is this a rug?",
    a: "Ser, this is a Wendy's. But also, probably not (trust me bro) 🤝"
  },
  {
    q: "When Lambo?",
    a: "Tomorrow™️. Or maybe never. Depends on if you diamond hand or paper hand like a little bitch 💎🙌"
  },
  {
    q: "Will this cure my depression?",
    a: "No, but watching the chart go up might give you dopamine for exactly 3.7 seconds before it dumps 📈📉"
  },
  {
    q: "What's the utility?",
    a: "The utility is making you feel something again. Also, none. This is a meme coin, anon 🤡"
  },
  {
    q: "Dev doxxed?",
    a: "Dev is a sentient AI trained exclusively on WSB loss porn and Pepe memes 🐸"
  },
  {
    q: "How do I ape in?",
    a: "Click buy button. Send SOL. Receive $CRUNCH. Contemplate life choices. This is the way."
  }
]

export default function Home() {
  const [currentMeme, setCurrentMeme] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-green-500/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="$CRUNCH" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold rainbow-text">$CRUNCH</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#buy" className="hover:text-green-400 transition-colors">Buy</a>
            <a href="#chart" className="hover:text-green-400 transition-colors">Chart</a>
            <Link href="/whitepaper" className="hover:text-green-400 transition-colors">Whitepaper</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Twitter</a>
            <a href="#twitch" className="hover:text-green-400 transition-colors">Twitch</a>
          </div>
          <button className="md:hidden text-2xl">🍔</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-8 glow"
          >
            BUY $CRUNCH 🚀
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            The most retarded investment you'll make today (not financial advice) 🦍
          </motion.p>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 neon-border"
              id="buy"
            >
              APE IN NOW 🍌
            </a>
            <span className="text-gray-400">or stay poor forever</span>
          </motion.div>
        </div>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-20 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 rainbow-text">
            CHART (ONLY GOES UP) 📈
          </h2>
          <div className="bg-gray-800 rounded-lg p-4 neon-border">
            <iframe 
              src="https://pump.fun/embed/chart" 
              className="w-full h-[600px] rounded-lg"
              title="$CRUNCH Chart"
            />
          </div>
          <p className="text-center mt-4 text-gray-400">
            *Chart may also go down. Past performance is not indicative of future lambos.
          </p>
        </div>
      </section>

      {/* Meme Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            PREMIUM MEMES 🎭
          </h2>
          <div className="relative w-full max-w-2xl mx-auto h-[400px] bg-gray-800 rounded-lg overflow-hidden neon-border">
            <Image 
              src={memes[currentMeme]} 
              alt="Degen meme" 
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-gray-400">
            Curated by our team of professional shitposters
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 rainbow-text">
            FAQ (FREQUENTLY APED QUESTIONS) 🦧
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 border border-green-500/20 hover:border-green-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-green-400">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Twitch */}
      <footer id="twitch" className="py-20 px-4 border-t border-green-500/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            WATCH US RUG LIVE ON TWITCH 🎮
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800 rounded-lg p-4 aspect-video">
              <iframe
                src="https://player.twitch.tv/?channel=YOUR_CHANNEL&parent=localhost"
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl">JOIN THE DEGEN ARMY 🪖</p>
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com" className="text-3xl hover:text-green-400 transition-colors">🐦</a>
              <a href="https://t.me" className="text-3xl hover:text-green-400 transition-colors">✈️</a>
              <a href="https://discord.gg" className="text-3xl hover:text-green-400 transition-colors">💬</a>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              $CRUNCH is not a security, it's a lifestyle choice. DYOR (but you won't). NFA. WAGMI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
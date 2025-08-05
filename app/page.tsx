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
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-green-500/30 shadow-lg shadow-green-500/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Image src="/logo.png" alt="$CRUNCH" width={50} height={50} className="rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110" />
            <span className="text-2xl font-bold rainbow-text hover:scale-105 transition-transform duration-300 cursor-pointer">$CRUNCH</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-6"
          >
            <a href="#buy" className="hover:text-green-400 transition-all duration-300 hover:scale-110 font-semibold">Buy</a>
            <a href="#chart" className="hover:text-green-400 transition-all duration-300 hover:scale-110 font-semibold">Chart</a>
            <Link href="/whitepaper" className="hover:text-green-400 transition-all duration-300 hover:scale-110 font-semibold">Whitepaper</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-all duration-300 hover:scale-110 font-semibold">🐦</a>
            <a href="#pump" className="hover:text-green-400 transition-all duration-300 hover:scale-110 font-semibold">Pump.fun</a>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="md:hidden text-2xl hover:scale-110 transition-transform duration-300"
          >🍔</motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 money-rain relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-8 glow float"
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
              href="https://pump.fun/YOUR_TOKEN_ADDRESS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 neon-border shadow-lg animate-pulse"
              id="buy"
            >
              🚀 APE IN NOW 🚀
            </a>
            <a 
              href="https://www.youtube.com/watch?v=nFZP8zQ5kzk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer underline"
            >
              or stay poor forever
            </a>
          </motion.div>
        </div>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-20 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 rainbow-text">
            CHART (ONLY GOES UP) 📈
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 neon-border shadow-2xl">
            <iframe 
              src="https://pump.fun/YOUR_TOKEN_ADDRESS/chart" 
              className="w-full h-[600px] rounded-lg border-2 border-green-500/20"
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
          <motion.div 
            key={currentMeme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-2xl mx-auto h-[400px] bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden neon-border shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
          >
            <Image 
              src={memes[currentMeme]} 
              alt="Degen meme" 
              fill
              className="object-contain transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 hover:border-green-500/80 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors">{faq.q}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Pump.fun */}
      <footer id="pump" className="py-20 px-4 border-t border-green-500/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 rainbow-text">
            LIVE PUMP ACTION 📈
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 neon-border shadow-2xl">
              <iframe
                src="https://pump.fun/YOUR_TOKEN_ADDRESS"
                className="w-full h-[500px] rounded-lg border-2 border-green-500/20"
                title="Pump.fun Trading"
              />
            </div>
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl rainbow-text font-bold">JOIN THE DEGEN ARMY 🪖</p>
            <div className="flex justify-center space-x-8">
              <motion.a 
                href="https://twitter.com" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl hover:text-green-400 transition-all duration-300 hover:drop-shadow-lg"
              >🐦</motion.a>
              <motion.a 
                href="https://t.me" 
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl hover:text-green-400 transition-all duration-300 hover:drop-shadow-lg"
              >✈️</motion.a>
              <motion.a 
                href="https://discord.gg" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl hover:text-green-400 transition-all duration-300 hover:drop-shadow-lg"
              >💬</motion.a>
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
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const faqs = [
  {
    q: "What is the roadmap?",
    a: "Not sure, I am not good with directions"
  },
  {
    q: "Why should I buy?",
    a: "You shouldnt"
  },

  {
    q: "What's the utility?",
    a: "None"
  },

  {
    q: "How do I ape in?",
    a: "Press buy button"
  }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen crunchie-wrapper text-purple-900">

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 honeycomb-bg relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl crunchie-text mb-12 glow float text-center px-4"
          >
            CRUNCHIE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-5xl md:text-7xl mb-8">
              🦍💸🚀🎆🔥💪🪙🍕🍻🔮🎯💰🤑🎉
            </div>
          </motion.div>
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
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-yellow-200 crunchie-text py-8 px-12 rounded-xl text-2xl md:text-3xl transition-all transform hover:scale-110 neon-border shadow-2xl animate-pulse border-4 border-orange-500 font-black"
              id="buy"
            >
              BUY $CRUNCH
            </a>
            <a 
              href="https://www.youtube.com/watch?v=nFZP8zQ5kzk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-orange-500 transition-colors cursor-pointer font-bold crunchie-text text-xl"
            >
              or stay poor forever
            </a>
          </motion.div>
        </div>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-20 px-4 bg-gradient-to-b from-yellow-300/20 to-orange-400/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl crunchie-text text-center mb-12 rainbow-text">
            CHART (ONLY GOES UP)
          </h2>
          <div className="bg-yellow-200/30 backdrop-blur-sm rounded-xl p-6 neon-border shadow-2xl">
            <iframe 
              src="https://pump.fun/YOUR_TOKEN_ADDRESS/chart" 
              className="w-full h-[600px] rounded-xl border-4 border-purple-600"
              title="$CRUNCH Chart"
            />
          </div>
          <p className="text-center mt-4 text-purple-700 font-bold crunchie-text">
            *Chart may also go down. Past performance is not indicative of future lambos.
          </p>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-400/20 to-yellow-300/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl crunchie-text text-center mb-12 rainbow-text">
            FAQ (FREQUENTLY APED QUESTIONS) 🦧
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-yellow-200/40 backdrop-blur-sm rounded-xl p-6 border-4 border-purple-600 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group neon-border"
              >
                <h3 className="text-xl crunchie-text mb-2 text-purple-700 group-hover:text-orange-600 transition-colors">{faq.q}</h3>
                <p className="text-purple-800 group-hover:text-purple-900 transition-colors font-semibold">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-green-500/20">
        <div className="container mx-auto">
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
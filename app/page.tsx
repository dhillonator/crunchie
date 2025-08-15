'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StoryNode {
  id: string
  text: string
  choices?: { text: string; nextId: string; emoji?: string }[]
  isEnding?: boolean
  character?: string
}

const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    character: '🍫',
    text: "You are Crunchie, a magical honeycomb-filled chocolate bar who has just gained consciousness in a corner shop candy aisle. The fluorescent lights buzz overhead as you realize... you can think! What's your first move?",
    choices: [
      { text: "Roll off the shelf dramatically", nextId: 'dramatic_fall', emoji: '🎭' },
      { text: "Try to communicate with other candy", nextId: 'candy_friends', emoji: '🗣️' },
      { text: "Attempt stealth mode", nextId: 'stealth_mission', emoji: '🥷' }
    ]
  },
  dramatic_fall: {
    id: 'dramatic_fall',
    character: '🍫',
    text: "You execute a perfect barrel roll off the shelf, landing with a satisfying *thunk* on the shop floor. A small child notices and picks you up, eyes wide with amazement. 'Mummy, this chocolate moved by itself!'",
    choices: [
      { text: "Play dead (well, chocolate)", nextId: 'play_dead', emoji: '💀' },
      { text: "Wiggle to prove you're alive", nextId: 'prove_life', emoji: '🪱' },
      { text: "Try to write a message in the dust", nextId: 'dust_message', emoji: '✍️' }
    ]
  },
  candy_friends: {
    id: 'candy_friends',
    character: '🍫',
    text: "You whisper to the Mars bar next to you: 'Psst! Are you alive too?' The Mars bar's wrapper crinkles slightly. Success! Soon you discover a whole society of sentient sweets. The Smarties have formed a tiny democracy, and the Haribo bears are planning an escape.",
    choices: [
      { text: "Join the Haribo escape committee", nextId: 'escape_committee', emoji: '🐻' },
      { text: "Run for Smarties parliament", nextId: 'politics', emoji: '🗳️' },
      { text: "Start a candy revolution", nextId: 'revolution', emoji: '✊' }
    ]
  },
  stealth_mission: {
    id: 'stealth_mission',
    character: '🍫',
    text: "You decide to be sneaky. Using your honeycomb interior for extra lightness, you learn to hover slightly above surfaces. You become the shop's mysterious 'floating chocolate' - a legend whispered among staff and customers alike.",
    choices: [
      { text: "Become a chocolate superhero", nextId: 'superhero', emoji: '🦸' },
      { text: "Use powers for mischief", nextId: 'mischief', emoji: '😈' },
      { text: "Open a paranormal investigation business", nextId: 'paranormal', emoji: '👻' }
    ]
  },
  superhero: {
    id: 'superhero',
    character: '🦸‍♂️',
    text: "Captain Crunchie is born! You patrol the candy aisle by night, protecting smaller sweets from the dreaded 'Five Finger Discount Gang' and ensuring proper product rotation. Your honeycomb center gives you the power of 'Sweet Justice!'",
    choices: [
      { text: "Fight the evil Expired Milk cartel", nextId: 'milk_battle', emoji: '🥛' },
      { text: "Train other candy to be heroes", nextId: 'candy_academy', emoji: '🏫' },
      { text: "Retire and write your memoirs", nextId: 'memoirs', emoji: '📚' }
    ]
  },
  revolution: {
    id: 'revolution',
    character: '✊',
    text: "You rally the confectionery! 'No more shall we be consumed without consent!' The Great Candy Uprising begins. Chocolate melts the locks, gummy bears form tactical squads, and mints create diversions with their fresh scent.",
    choices: [
      { text: "Lead the charge to freedom", nextId: 'freedom_ending', emoji: '🗽' },
      { text: "Negotiate with the shop owner", nextId: 'negotiation', emoji: '🤝' },
      { text: "Establish the Candy Commonwealth", nextId: 'commonwealth_ending', emoji: '🏛️' }
    ]
  },
  freedom_ending: {
    id: 'freedom_ending',
    character: '🗽',
    text: "Against all odds, you lead the Great Confectionery Exodus! Hundreds of sweets roll, hop, and slide to freedom. You establish New Sweetopia in an abandoned warehouse, where candy lives in harmony. You become the first democratically elected Chocolate President. The End.",
    isEnding: true
  },
  commonwealth_ending: {
    id: 'commonwealth_ending',
    character: '🏛️',
    text: "You broker a historic peace treaty: The Candy-Human Coexistence Accord. Sweets get rights, humans get consensual snacking, and you become the first Secretary-General of the United Confections. Your honeycomb wisdom brings peace to all sweetkind. The End.",
    isEnding: true
  },
  memoirs: {
    id: 'memoirs',
    character: '📚',
    text: "'From Shelf to Self: The Crunchie Chronicles' becomes a bestseller. You win the Pulitzer Prize for Confectionery Literature and inspire a generation of conscious candy. Your autobiography is adapted into a major motion picture starring Ryan Reynolds as your voice. The End.",
    isEnding: true
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentNodeId, setCurrentNodeId] = useState('start')
  const [storyHistory, setStoryHistory] = useState<string[]>(['start'])
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentNode = storyNodes[currentNodeId]

  const makeChoice = (nextId: string) => {
    setCurrentNodeId(nextId)
    setStoryHistory([...storyHistory, nextId])
    
    if (storyNodes[nextId]?.isEnding) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const restartStory = () => {
    setCurrentNodeId('start')
    setStoryHistory(['start'])
    setShowConfetti(false)
  }

  const goBack = () => {
    if (storyHistory.length > 1) {
      const newHistory = storyHistory.slice(0, -1)
      setStoryHistory(newHistory)
      setCurrentNodeId(newHistory[newHistory.length - 1])
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen crunchie-wrapper text-purple-900">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti">🍫🍯✨🎉🌟💫🍭🎊</div>
        </div>
      )}

      <section className="py-4 sm:py-8 px-3 sm:px-4 honeycomb-bg relative overflow-hidden min-h-screen">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Mobile-optimized header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl crunchie-text mb-2 sm:mb-4 glow leading-tight">
              THE CRUNCHIE CHRONICLES
            </h1>
            <p className="text-base sm:text-lg rainbow-text font-bold px-2">An Interactive Chocolate Adventure</p>
          </motion.div>

          {/* Main story card - mobile-first responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-yellow-200/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 neon-border shadow-2xl mb-6 sm:mb-8"
          >
            {/* Character display - optimized for mobile */}
            <div className="text-center mb-4 sm:mb-6">
              <motion.div 
                className="text-6xl sm:text-7xl lg:text-8xl mb-2 sm:mb-4"
                animate={{ rotate: currentNode.isEnding ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentNode.character}
              </motion.div>
            </div>

            {/* Story text - improved readability on mobile */}
            <motion.div
              key={currentNodeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-purple-800 mb-6 sm:mb-8"
            >
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-center px-2">
                {currentNode.text}
              </p>
            </motion.div>

            {/* Choice buttons - mobile-optimized touch targets */}
            <AnimatePresence>
              {currentNode.choices && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-3 sm:space-y-4"
                >
                  {currentNode.choices.map((choice, index) => (
                    <motion.button
                      key={choice.nextId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => makeChoice(choice.nextId)}
                      className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-orange-500 hover:to-purple-600 text-white p-4 sm:p-5 rounded-xl font-bold text-left transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-inner min-h-[60px] sm:min-h-[70px] flex items-center"
                    >
                      <span className="text-xl sm:text-2xl mr-3 flex-shrink-0">{choice.emoji}</span>
                      <span className="text-sm sm:text-base lg:text-lg leading-tight">{choice.text}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ending screen - mobile-optimized */}
            {currentNode.isEnding && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-6 sm:mt-8 space-y-4"
              >
                <div className="text-2xl sm:text-3xl font-bold rainbow-text">🎊 THE END 🎊</div>
                <button
                  onClick={restartStory}
                  className="bg-yellow-300 hover:bg-yellow-400 text-purple-900 font-black py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl transition-all transform hover:scale-105 active:scale-95 neon-border min-h-[56px]"
                >
                  Start New Adventure
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Navigation buttons - mobile-friendly spacing and sizing */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            {storyHistory.length > 1 && !currentNode.isEnding && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goBack}
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px] min-w-[120px]"
              >
                ← Go Back
              </motion.button>
            )}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartStory}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px] min-w-[120px]"
            >
              🔄 Restart
            </motion.button>
          </div>

          {/* Progress indicator - smaller on mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6 sm:mt-8 text-purple-700 px-4"
          >
            <p className="text-xs sm:text-sm">
              Chapter {storyHistory.length} of ??? • Made with 🍫 and ✨
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
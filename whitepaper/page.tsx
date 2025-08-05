'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function WhitepaperPage() {
  const [content, setContent] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetch('/whitepaper.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent('# Whitepaper not found\n\nDev probably rugged already'))
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-green-500/20">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold rainbow-text hover:opacity-80 transition-opacity">
            ← Back to $CRUNCH
          </Link>
        </nav>
      </header>

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:rainbow-text prose-a:text-green-400 prose-strong:text-green-300">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  )
}
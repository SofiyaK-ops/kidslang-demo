'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface VocabularyGameProps {
  language: string
}

const words = {
  Mandarin: [
    { word: '你好', translation: 'Hello', image: '👋' },
    { word: '谢谢', translation: 'Thank you', image: '🙏' },
    { word: '再见', translation: 'Goodbye', image: '👋' },
    { word: '苹果', translation: 'Apple', image: '🍎' },
  ],
  Spanish: [
    { word: 'Hola', translation: 'Hello', image: '👋' },
    { word: 'Gracias', translation: 'Thank you', image: '🙏' },
    { word: 'Adiós', translation: 'Goodbye', image: '👋' },
    { word: 'Manzana', translation: 'Apple', image: '🍎' },
  ],
  French: [
    { word: 'Bonjour', translation: 'Hello', image: '👋' },
    { word: 'Merci', translation: 'Thank you', image: '🙏' },
    { word: 'Au revoir', translation: 'Goodbye', image: '👋' },
    { word: 'Pomme', translation: 'Apple', image: '🍎' },
  ],
  English: [
    { word: 'Hello', translation: 'Hello', image: '👋' },
    { word: 'Thank you', translation: 'Thank you', image: '🙏' },
    { word: 'Goodbye', translation: 'Goodbye', image: '👋' },
    { word: 'Apple', translation: 'Apple', image: '🍎' },
  ],
}

export default function VocabularyGame({ language }: VocabularyGameProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const [score, setScore] = useState(0)

  const currentWords = words[language as keyof typeof words]

  const handleWordClick = (word: string) => {
    if (!selectedWord) {
      setSelectedWord(word)
    } else {
      const correctWord = currentWords.find((w) => w.word === selectedWord)
      if (correctWord && correctWord.translation === word) {
        setScore((prev) => prev + 1)
      }
      setSelectedWord(null)
    }
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
          Match the words with their meanings
        </h3>
        <p className="text-gray-600">
          Score: {score}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {currentWords.map(({ word, image }) => (
            <motion.button
              key={word}
              onClick={() => handleWordClick(word)}
              className={`w-full p-4 rounded-lg text-lg font-medium transition-colors ${
                selectedWord === word
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {word} {image}
            </motion.button>
          ))}
        </div>

        <div className="space-y-4">
          {currentWords.map(({ translation, image }) => (
            <motion.button
              key={translation}
              onClick={() => handleWordClick(translation)}
              className="w-full p-4 rounded-lg text-lg font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {translation} {image}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

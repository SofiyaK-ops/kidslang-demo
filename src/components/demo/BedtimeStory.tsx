'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface BedtimeStoryProps {
  language: string
}

const stories = {
  Mandarin: {
    title: '小红帽',
    content: '从前有一个可爱的小女孩...',
    translation: 'Little Red Riding Hood\n\nOnce upon a time, there was a lovely little girl...',
  },
  Spanish: {
    title: 'Caperucita Roja',
    content: 'Había una vez una niña muy bonita...',
    translation: 'Little Red Riding Hood\n\nOnce upon a time, there was a lovely little girl...',
  },
  French: {
    title: 'Le Petit Chaperon Rouge',
    content: 'Il était une fois une petite fille...',
    translation: 'Little Red Riding Hood\n\nOnce upon a time, there was a lovely little girl...',
  },
  English: {
    title: 'Little Red Riding Hood',
    content: 'Once upon a time, there was a lovely little girl...',
    translation: 'Once upon a time, there was a lovely little girl...',
  },
}

export default function BedtimeStory({ language }: BedtimeStoryProps) {
  const [showTranslation, setShowTranslation] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const story = stories[language as keyof typeof stories]

  return (
    <div>
      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
          {story.title}
        </h3>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            {story.content}
          </p>

          {showTranslation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-gray-50 rounded-lg"
            >
              <p className="text-gray-600">
                {story.translation}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="flex-1 btn-secondary"
        >
          {showTranslation ? 'Hide' : 'Show'} Translation
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex-1 btn-primary"
        >
          {isPlaying ? 'Pause' : 'Play'} Narration
        </button>
      </div>
    </div>
  )
}

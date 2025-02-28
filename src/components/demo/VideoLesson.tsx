'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface VideoLessonProps {
  language: string
}

export default function VideoLesson({ language }: VideoLessonProps) {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
              {language} Lesson: Greetings and Basic Phrases
            </h3>
            <p className="text-gray-600">
              Interactive video content coming soon!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
            <span>Lesson Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => setProgress(Math.max(0, progress - 25))}
            className="flex-1 btn-secondary"
          >
            Previous
          </button>
          <button
            onClick={() => setProgress(Math.min(100, progress + 25))}
            className="flex-1 btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

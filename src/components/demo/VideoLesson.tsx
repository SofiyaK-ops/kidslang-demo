'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface VideoLessonProps {
  language: string
}

const lessons = {
  English: {
    title: "Basic Greetings in English",
    videoId: "6qNDAhY8pdE",
    description: "Learn essential English greetings and introductions with our interactive lesson"
  },
  Spanish: {
    title: "Saludos Básicos en Español",
    videoId: "xrR2EZYcFXM",
    description: "Aprende los saludos básicos en español de forma interactiva"
  },
  French: {
    title: "Salutations de Base en Français",
    videoId: "hd0_GZHHWeE",
    description: "Apprenez les salutations de base en français de manière interactive"
  },
  Mandarin: {
    title: "基础中文问候语",
    videoId: "nQqY3j8btbI",
    description: "通过互动课程学习基础中文问候语"
  }
}

export default function VideoLesson({ language }: VideoLessonProps) {
  const [progress, setProgress] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const lesson = lessons[language as keyof typeof lessons]

  // Reset video loaded state when language changes
  useEffect(() => {
    setIsVideoLoaded(false)
  }, [language])

  // Function to create a lite YouTube embed URL
  const getLiteYouTubeUrl = (videoId: string) => {
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&hl=${language.toLowerCase()}`
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Video Section */}
      <div className="aspect-video bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <svg className="animate-spin h-12 w-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-xl font-medium">Loading your lesson...</p>
            </div>
          </div>
        )}
        <iframe
          className="w-full h-full"
          src={getLiteYouTubeUrl(lesson.videoId)}
          title={lesson.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsVideoLoaded(true)}
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {lesson.title}
          </h3>
          <p className="text-gray-600">
            {lesson.description}
          </p>
        </div>

        {/* Progress Section */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-900 mb-2">
              <span>Lesson Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            <button
              onClick={() => setProgress(Math.max(0, progress - 25))}
              className={`
                flex-1 px-6 py-3 text-sm font-medium rounded-xl
                transition-all duration-200 
                ${progress === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }
              `}
              disabled={progress === 0}
            >
              ← Previous Section
            </button>
            <button
              onClick={() => setProgress(Math.min(100, progress + 25))}
              className={`
                flex-1 px-6 py-3 text-sm font-medium rounded-xl text-white
                transition-all duration-200
                ${progress === 100
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90'
                }
              `}
              disabled={progress === 100}
            >
              Next Section →
            </button>
          </div>

          {/* Learning Tips */}
          {progress > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-blue-50 rounded-xl border border-blue-100"
            >
              <h4 className="text-sm font-medium text-blue-800 mb-2">
                💡 Learning Tip
              </h4>
              <p className="text-sm text-blue-700">
                Practice these greetings with friends or family members to help remember them better.
                Try to use them in different situations throughout your day!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

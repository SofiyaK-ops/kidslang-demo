'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface VideoLessonProps {
  language: string
}

const lessons = {
  English: {
    title: "Basic Greetings in English",
    videoId: "6qNDAhY8pdE",
    description: "Learn basic English greetings and introductions"
  },
  Spanish: {
    title: "Saludos Básicos en Español",
    videoId: "xrR2EZYcFXM",
    description: "Aprende saludos básicos en español"
  },
  French: {
    title: "Salutations de Base en Français",
    videoId: "hd0_GZHHWeE",
    description: "Apprenez les salutations de base en français"
  },
  Mandarin: {
    title: "基础中文问候语",
    videoId: "nQqY3j8btbI",
    description: "学习基础中文问候语"
  }
}

export default function VideoLesson({ language }: VideoLessonProps) {
  const [progress, setProgress] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const lesson = lessons[language as keyof typeof lessons]

  // Function to create a lite YouTube embed URL
  const getLiteYouTubeUrl = (videoId: string) => {
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
  }

  return (
    <div className="space-y-6">
      {/* Video Title */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {lesson.title}
        </h3>
        <p className="text-gray-600">
          {lesson.description}
        </p>
      </div>

      {/* Video Player */}
      <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg relative">
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500">
            <div className="text-white text-center">
              <svg className="animate-spin h-8 w-8 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-lg font-medium">Loading lesson...</p>
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

      {/* Progress Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
              <span>Lesson Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
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
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
              disabled={progress === 0}
            >
              Previous Section
            </button>
            <button
              onClick={() => setProgress(Math.min(100, progress + 25))}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
              disabled={progress === 100}
            >
              Next Section
            </button>
          </div>
        </div>

        {/* Learning Tips */}
        {progress > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-blue-50 rounded-lg"
          >
            <h4 className="text-sm font-medium text-blue-800 mb-2">Learning Tip</h4>
            <p className="text-sm text-blue-700">
              Practice these greetings with friends or family members to help remember them better.
              Try to use them in different situations throughout your day!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

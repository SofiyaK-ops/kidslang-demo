'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tab } from '@headlessui/react'
import VideoLesson from './VideoLesson'
import VocabularyGame from './VocabularyGame'
import BedtimeStory from './BedtimeStory'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'zh', name: 'Mandarin', flag: '🇨🇳' },
]

const activities = [
  { id: 'video', name: 'Video Lesson', icon: '📺' },
  { id: 'vocabulary', name: 'Vocabulary Game', icon: '🎮' },
  { id: 'story', name: 'Bedtime Story', icon: '📚' },
]

export default function DemoLesson() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].name)
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Interactive Demo Lesson
        </h1>
        
        {/* Language Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Language:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <motion.button
                key={lang.name}
                onClick={() => setSelectedLanguage(lang.name)}
                className={`
                  inline-flex items-center px-6 py-3 rounded-full text-sm font-medium
                  transition-all duration-200 transform hover:scale-105
                  ${
                    selectedLanguage === lang.name
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-lg">{lang.flag}</span>
                {lang.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Area */}
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-2 rounded-2xl bg-white p-2 shadow-lg mb-8">
          {activities.map((activity) => (
            <Tab
              key={activity.id}
              className={({ selected }) =>
                `
                  flex-1 inline-flex items-center justify-center px-4 py-3 
                  rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    selected
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `
              }
            >
              <span className="mr-2 text-lg">{activity.icon}</span>
              {activity.name}
            </Tab>
          ))}
        </Tab.List>

        <AnimatePresence mode="wait">
          <Tab.Panels>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <VideoLesson language={selectedLanguage} />
              </motion.div>
            </Tab.Panel>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <VocabularyGame language={selectedLanguage} />
              </motion.div>
            </Tab.Panel>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <BedtimeStory language={selectedLanguage} />
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </AnimatePresence>
      </Tab.Group>
    </div>
  )
}

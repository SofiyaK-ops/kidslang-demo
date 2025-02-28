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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden"
    >
      {/* Language Selection */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Choose Your Language</h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <motion.button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang.name)}
              className={`
                inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200 transform hover:scale-105
                ${
                  selectedLanguage === lang.name
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'bg-white/20 hover:bg-white/30'
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

      {/* Content Area */}
      <div className="p-6">
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-2 mb-8">
            {activities.map((activity) => (
              <Tab
                key={activity.id}
                className={({ selected }) =>
                  `
                    flex-1 inline-flex items-center justify-center px-4 py-3 
                    rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      selected
                        ? 'bg-white text-primary-600 shadow-md'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-white/50'
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

      {/* Progress Indicator */}
      <div className="px-6 pb-6">
        <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={{ width: '0%' }}
            animate={{ width: `${((selectedTab + 1) / activities.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Activity {selectedTab + 1} of {activities.length}
        </p>
      </div>
    </motion.div>
  )
}

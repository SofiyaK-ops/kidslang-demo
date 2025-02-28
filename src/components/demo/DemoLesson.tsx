'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import VideoLesson from './VideoLesson'
import VocabularyGame from './VocabularyGame'
import BedtimeStory from './BedtimeStory'

const languages = ['English', 'Spanish', 'French', 'Mandarin']

export default function DemoLesson() {
  const [selectedLanguage, setSelectedLanguage] = useState('Mandarin')

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm p-6 mb-8"
      >
        <h1 className="heading-2 text-center mb-8">
          Interactive Demo Lesson
        </h1>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Language:
          </label>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLanguage === lang
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-primary-100 p-1 mb-8">
            {['Video Lesson', 'Vocabulary Game', 'Bedtime Story'].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                  ${
                    selected
                      ? 'bg-white text-primary-700 shadow'
                      : 'text-primary-600 hover:bg-white/[0.12] hover:text-primary-800'
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <VideoLesson language={selectedLanguage} />
            </Tab.Panel>
            <Tab.Panel>
              <VocabularyGame language={selectedLanguage} />
            </Tab.Panel>
            <Tab.Panel>
              <BedtimeStory language={selectedLanguage} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </motion.div>
    </div>
  )
}

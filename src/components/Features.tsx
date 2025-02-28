'use client'

import { motion } from 'framer-motion'
import {
  VideoCameraIcon,
  BookOpenIcon,
  SparklesIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Interactive Videos',
    description: 'Engaging video lessons with native speakers that adapt to your child\'s learning style.',
    icon: VideoCameraIcon,
    color: 'from-pink-500 to-rose-500',
    delay: 0,
  },
  {
    name: 'Personalized Bedtime Stories',
    description: 'AI-generated stories that incorporate your child\'s interests and learned vocabulary.',
    icon: BookOpenIcon,
    color: 'from-purple-500 to-indigo-500',
    delay: 0.2,
  },
  {
    name: 'AI-Driven Adaptation',
    description: 'Smart learning paths that adjust in real-time based on your child\'s progress.',
    icon: SparklesIcon,
    color: 'from-blue-500 to-cyan-500',
    delay: 0.4,
  },
  {
    name: 'Offline Musical Content',
    description: 'Catchy songs and rhymes that make language learning fun, even offline.',
    icon: MusicalNoteIcon,
    color: 'from-teal-500 to-green-500',
    delay: 0.6,
  },
]

export default function Features() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-2 mb-4"
          >
            Features designed for young minds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything your child needs to learn a new language naturally
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="feature-card group"
            >
              <div className="relative z-10">
                <div className={`h-16 w-16 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 transform transition-transform group-hover:scale-110`}>
                  <feature.icon
                    className="h-full w-full text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100 opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-100 opacity-50" />
      </div>
    </div>
  )
}

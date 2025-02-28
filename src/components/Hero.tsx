'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              Unlock Your Child&apos;s Language Potential:
              <br />
              <span className="text-primary-600">
                Fun, Immersive Learning from 18 Months to 8 Years
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-600 mb-8"
            >
              AI-Powered Language Learning That Adapts to Your Child&apos;s Pace
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-500 mb-12"
            >
              Our platform replicates real-life learning environments through interactive videos,
              bedtime stories, and engaging content. Make foreign language acquisition effortless and fun!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                href="/demo" 
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white rounded-full 
                         bg-gradient-to-r from-primary-500 to-secondary-500 
                         transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-lg hover:from-primary-600 hover:to-secondary-600
                         focus:outline-none focus:ring-4 focus:ring-primary-300
                         animate-pulse"
              >
                Start Your Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-300"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-300"
        />

        <div className="absolute top-20 right-10" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <div className="w-16 h-16 rounded-full bg-yellow-200 opacity-20" />
        </div>
        <div className="absolute bottom-20 left-10" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '-1.5s' }}>
          <div className="w-12 h-12 rounded-full bg-pink-200 opacity-20" />
        </div>
        <div className="absolute top-40 left-1/4" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '-1s' }}>
          <div className="w-8 h-8 rounded-full bg-blue-200 opacity-20" />
        </div>
      </div>
    </section>
  )
}

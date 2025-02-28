'use client'

import { motion } from 'framer-motion'
import DemoLesson from '@/components/demo/DemoLesson'
import Link from 'next/link'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
            Try KidsLang Demo
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience how KidsLang makes language learning fun and engaging for children.
            Choose your language and explore our interactive lessons!
          </p>
        </motion.div>

        {/* Main Content */}
        <DemoLesson />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-sm text-gray-500"
        >
          This is a demo version. For the full experience, 
          <Link href="/" className="text-primary-600 hover:text-primary-700 ml-1">
            sign up for free
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

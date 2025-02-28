'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <div className="bg-primary-600 py-24">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-2 text-white mb-6"
          >
            Ready to start your child&apos;s language journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of parents who are giving their children the gift of language fluency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-600 bg-white border border-transparent rounded-lg shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white transition-colors duration-200"
            >
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

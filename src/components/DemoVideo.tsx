'use client'

import { motion } from 'framer-motion'

export default function DemoVideo() {
  return (
    <div className="bg-white py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-xl aspect-video"
        >
          {/* Replace this with actual video embed */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-display font-bold mb-4">
                Watch How It Works
              </h3>
              <p className="text-lg opacity-90">
                Demo video coming soon!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

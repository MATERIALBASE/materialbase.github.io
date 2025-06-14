import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Material Base</span>
          </div>
          
          <p className="text-gray-300 mb-2">
            &copy; Material Base 2024. All rights reserved.
          </p>
          
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Content curated from</span>
            <a 
              href="https://instagram.com/materialhub_sastra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-400 transition-colors duration-200"
            >
              Material Hub
            </a>
            <Heart className="w-4 h-4 text-red-500" />
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar as CalendarIcon } from 'lucide-react'
import CalendarManager from '../components/CalendarManager'

const Calendar = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CalendarIcon className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Academic Calendar
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay updated with important academic dates and events
          </p>
        </motion.div>

        <CalendarManager />
      </div>
    </div>
  )
}

export default Calendar
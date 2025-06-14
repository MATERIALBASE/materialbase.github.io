import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, ExternalLink } from 'lucide-react'
import { useCalendarUpdates } from '../hooks/useCalendarUpdates'

const CalendarNotification = () => {
  const { calendar, needsUpdate } = useCalendarUpdates()
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show notification if calendar needs update and hasn't been dismissed
    const dismissed = localStorage.getItem('calendarNotificationDismissed')
    const dismissedDate = dismissed ? new Date(dismissed) : null
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)

    if (needsUpdate && (!dismissedDate || dismissedDate < oneDayAgo)) {
      setIsVisible(true)
      setIsDismissed(false)
    }
  }, [needsUpdate])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    localStorage.setItem('calendarNotificationDismissed', new Date().toISOString())
  }

  if (!calendar || isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800">
                  Calendar Update Available
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  A new academic calendar may be available. Check for updates.
                </p>
                
                <div className="mt-3 flex space-x-2">
                  <a
                    href="/calendar"
                    className="inline-flex items-center space-x-1 text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View Calendar</span>
                  </a>
                  
                  <button
                    onClick={handleDismiss}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CalendarNotification
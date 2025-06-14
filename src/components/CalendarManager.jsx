import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, ExternalLink, Download, AlertCircle, CheckCircle } from 'lucide-react'
import { getCurrentCalendar, isCalendarRecent } from '../data/calendarConfig'

const CalendarManager = () => {
  const [calendar, setCalendar] = useState(null)
  const [isRecent, setIsRecent] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Load calendar configuration
    try {
      const currentCalendar = getCurrentCalendar()
      setCalendar(currentCalendar)
      setIsRecent(isCalendarRecent())
      setLoading(false)
    } catch (err) {
      setError('Failed to load calendar configuration')
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Calendar Unavailable</h3>
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Calendar Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-lg border ${
          isRecent 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-yellow-50 border-yellow-200 text-yellow-800'
        }`}
      >
        <div className="flex items-center space-x-2">
          {isRecent ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">
            {isRecent 
              ? 'Calendar is up to date' 
              : 'Calendar may need updating'
            }
          </span>
          <span className="text-sm opacity-75">
            Last updated: {new Date(calendar.lastUpdated).toLocaleDateString()}
          </span>
        </div>
      </motion.div>

      {/* Main Calendar Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold">{calendar.title}</h2>
              <p className="text-blue-100 mt-1">{calendar.description}</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href={calendar.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Tab</span>
              </a>
              
              <a
                href={calendar.url}
                download
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="p-2">
          <iframe
            src={calendar.url}
            className="w-full h-[800px] border-0 rounded-lg"
            title={calendar.title}
            onError={() => setError('Failed to load calendar PDF')}
          />
        </div>
      </motion.div>

      {/* Help Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center bg-gray-50 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Need Help?
        </h3>
        <p className="text-gray-600 mb-4">
          Having trouble viewing the calendar? Try the options below:
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href={calendar.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-blue-600 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in new window</span>
          </a>
          
          <a 
            href={calendar.url}
            download
            className="inline-flex items-center space-x-2 text-primary hover:text-blue-600 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default CalendarManager
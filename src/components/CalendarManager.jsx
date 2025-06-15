import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock,
  BookOpen,
  GraduationCap,
  Coffee,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { getCurrentCalendar, isCalendarRecent, getEventsForMonth, getUpcomingEvents } from '../data/calendarConfig'

const CalendarManager = () => {
  const [calendar, setCalendar] = useState(null)
  const [isRecent, setIsRecent] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [viewMode, setViewMode] = useState('calendar') // 'calendar' or 'list'

  useEffect(() => {
    try {
      const currentCalendar = getCurrentCalendar()
      setCalendar(currentCalendar)
      setIsRecent(isCalendarRecent())
      setLoading(false)
    } catch (err) {
      console.error('Failed to load calendar:', err)
      setLoading(false)
    }
  }, [])

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'exam': return <GraduationCap className="w-4 h-4" />
      case 'academic': return <BookOpen className="w-4 h-4" />
      case 'registration': return <Clock className="w-4 h-4" />
      case 'holiday': return <Coffee className="w-4 h-4" />
      default: return <CalendarIcon className="w-4 h-4" />
    }
  }

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'exam': return 'bg-red-100 text-red-800 border-red-200'
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'registration': return 'bg-green-100 text-green-800 border-green-200'
      case 'holiday': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const getEventsForDate = (date) => {
    if (!calendar || !date) return []
    
    const dateString = date.toISOString().split('T')[0]
    return calendar.events.filter(event => {
      const eventStart = event.startDate
      const eventEnd = event.endDate
      return dateString >= eventStart && dateString <= eventEnd
    })
  }

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!calendar) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Calendar Unavailable</h3>
        <p className="text-gray-600">Failed to load calendar data</p>
      </div>
    )
  }

  const monthEvents = getEventsForMonth(currentDate.getFullYear(), currentDate.getMonth())
  const upcomingEvents = getUpcomingEvents()
  const days = getDaysInMonth(currentDate)

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

      {/* View Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              viewMode === 'calendar' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              viewMode === 'list' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'calendar' ? (
          <motion.div
            key="calendar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{calendar.title}</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-lg font-medium min-w-[200px] text-center">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-6">
              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-3 text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                  if (!day) {
                    return <div key={index} className="p-3 h-24"></div>
                  }

                  const dayEvents = getEventsForDate(day)
                  const isToday = day.toDateString() === new Date().toDateString()
                  const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString()

                  return (
                    <motion.div
                      key={day.toISOString()}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedDate(day)}
                      className={`p-2 h-24 border rounded-lg cursor-pointer transition-all duration-200 ${
                        isToday 
                          ? 'bg-blue-50 border-blue-300' 
                          : isSelected
                          ? 'bg-purple-50 border-purple-300'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`text-sm font-medium mb-1 ${
                        isToday ? 'text-blue-600' : 'text-gray-800'
                      }`}>
                        {day.getDate()}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            className={`text-xs px-1 py-0.5 rounded border ${getEventTypeColor(event.type)} truncate`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Selected Date Events */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border-t bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Events on {formatDate(selectedDate.toISOString())}
                </h3>
                <div className="space-y-3">
                  {getEventsForDate(selectedDate).map(event => (
                    <div key={event.id} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                          {getEventTypeIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{event.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            {formatDate(event.startDate)} 
                            {event.startDate !== event.endDate && ` - ${formatDate(event.endDate)}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {getEventsForDate(selectedDate).length === 0 && (
                    <p className="text-gray-500 text-center py-4">No events on this date</p>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${getEventTypeColor(event.type)}`}>
                        {getEventTypeIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-lg">{event.title}</h4>
                        <p className="text-gray-600 mt-1">{event.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {formatDate(event.startDate)}
                          {event.startDate !== event.endDate && ` - ${formatDate(event.endDate)}`}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Events by Category */}
            <div className="grid md:grid-cols-2 gap-6">
              {['exam', 'academic', 'registration', 'holiday'].map(type => {
                const typeEvents = calendar.events.filter(event => event.type === type)
                const typeTitle = type.charAt(0).toUpperCase() + type.slice(1) + 's'
                
                return (
                  <div key={type} className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                      {getEventTypeIcon(type)}
                      <span>{typeTitle}</span>
                    </h4>
                    <div className="space-y-3">
                      {typeEvents.map(event => (
                        <div key={event.id} className="border-l-4 border-gray-200 pl-4 py-2">
                          <h5 className="font-medium text-gray-800">{event.title}</h5>
                          <p className="text-sm text-gray-600">{event.description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(event.startDate)}
                            {event.startDate !== event.endDate && ` - ${formatDate(event.endDate)}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CalendarManager
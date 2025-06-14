import { useState, useEffect } from 'react'
import { getCurrentCalendar, isCalendarRecent } from '../data/calendarConfig'

// Custom hook to manage calendar updates and notifications
export const useCalendarUpdates = () => {
  const [calendar, setCalendar] = useState(null)
  const [needsUpdate, setNeedsUpdate] = useState(false)
  const [lastChecked, setLastChecked] = useState(null)

  useEffect(() => {
    const checkCalendarStatus = () => {
      try {
        const currentCalendar = getCurrentCalendar()
        const isRecent = isCalendarRecent(30) // Check if updated within 30 days
        
        setCalendar(currentCalendar)
        setNeedsUpdate(!isRecent)
        setLastChecked(new Date())
      } catch (error) {
        console.error('Failed to check calendar status:', error)
      }
    }

    // Check immediately
    checkCalendarStatus()

    // Check periodically (every hour)
    const interval = setInterval(checkCalendarStatus, 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const refreshCalendar = () => {
    const currentCalendar = getCurrentCalendar()
    setCalendar(currentCalendar)
    setLastChecked(new Date())
  }

  return {
    calendar,
    needsUpdate,
    lastChecked,
    refreshCalendar
  }
}
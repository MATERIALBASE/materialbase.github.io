// Calendar configuration file with compensatory holidays and working Saturdays
// Update this file whenever you need to change the calendar data

export const calendarConfig = {
  // Current academic year calendar
  current: {
    year: "2024-25",
    title: "Main Calendar 2024-25",
    description: "Complete academic calendar for the current year",
    lastUpdated: "2024-01-15",
    
    // Working Saturdays (when Saturday is a working day due to compensation)
    workingSaturdays: [
      "2024-08-10", // Compensatory for Independence Day
      "2024-10-05", // Compensatory for Gandhi Jayanti
      "2024-11-09", // Compensatory for Diwali
      "2025-01-25", // Compensatory for Republic Day
      "2025-03-15", // Compensatory for Holi
      "2025-04-19", // Compensatory for Good Friday
    ],
    
    // Compensatory holidays (when weekdays are holidays due to festival compensation)
    compensatoryHolidays: [
      "2024-08-12", // Monday compensatory for Saturday working
      "2024-10-07", // Monday compensatory for Saturday working
      "2024-11-11", // Monday compensatory for Saturday working
      "2025-01-27", // Monday compensatory for Saturday working
      "2025-03-17", // Monday compensatory for Saturday working
      "2025-04-21", // Monday compensatory for Saturday working
    ],
    
    // Calendar events data
    events: [
      {
        id: 1,
        title: "Semester Registration",
        startDate: "2024-07-15",
        endDate: "2024-07-20",
        type: "registration",
        description: "Registration for odd semester courses"
      },
      {
        id: 2,
        title: "Classes Begin",
        startDate: "2024-07-22",
        endDate: "2024-07-22",
        type: "academic",
        description: "Commencement of odd semester classes"
      },
      {
        id: 3,
        title: "Independence Day",
        startDate: "2024-08-15",
        endDate: "2024-08-15",
        type: "holiday",
        description: "National holiday - Independence Day"
      },
      {
        id: 4,
        title: "Working Saturday",
        startDate: "2024-08-10",
        endDate: "2024-08-10",
        type: "working-saturday",
        description: "Compensatory working day for Independence Day"
      },
      {
        id: 5,
        title: "Compensatory Holiday",
        startDate: "2024-08-12",
        endDate: "2024-08-12",
        type: "compensatory-holiday",
        description: "Compensatory holiday for working Saturday"
      },
      {
        id: 6,
        title: "CIA 1 Examinations",
        startDate: "2024-09-02",
        endDate: "2024-09-07",
        type: "exam",
        description: "First Continuous Internal Assessment"
      },
      {
        id: 7,
        title: "Mid-Semester Break",
        startDate: "2024-09-23",
        endDate: "2024-09-29",
        type: "holiday",
        description: "Mid-semester break for students"
      },
      {
        id: 8,
        title: "Gandhi Jayanti",
        startDate: "2024-10-02",
        endDate: "2024-10-02",
        type: "holiday",
        description: "National holiday - Gandhi Jayanti"
      },
      {
        id: 9,
        title: "Working Saturday",
        startDate: "2024-10-05",
        endDate: "2024-10-05",
        type: "working-saturday",
        description: "Compensatory working day for Gandhi Jayanti"
      },
      {
        id: 10,
        title: "Compensatory Holiday",
        startDate: "2024-10-07",
        endDate: "2024-10-07",
        type: "compensatory-holiday",
        description: "Compensatory holiday for working Saturday"
      },
      {
        id: 11,
        title: "CIA 2 Examinations",
        startDate: "2024-10-14",
        endDate: "2024-10-19",
        type: "exam",
        description: "Second Continuous Internal Assessment"
      },
      {
        id: 12,
        title: "Diwali Holidays",
        startDate: "2024-10-31",
        endDate: "2024-11-03",
        type: "holiday",
        description: "Diwali festival holidays"
      },
      {
        id: 13,
        title: "Working Saturday",
        startDate: "2024-11-09",
        endDate: "2024-11-09",
        type: "working-saturday",
        description: "Compensatory working day for Diwali holidays"
      },
      {
        id: 14,
        title: "Compensatory Holiday",
        startDate: "2024-11-11",
        endDate: "2024-11-11",
        type: "compensatory-holiday",
        description: "Compensatory holiday for working Saturday"
      },
      {
        id: 15,
        title: "CIA 3 Examinations",
        startDate: "2024-11-18",
        endDate: "2024-11-23",
        type: "exam",
        description: "Third Continuous Internal Assessment"
      },
      {
        id: 16,
        title: "End Semester Examinations",
        startDate: "2024-12-02",
        endDate: "2024-12-14",
        type: "exam",
        description: "Final examinations for odd semester"
      },
      {
        id: 17,
        title: "Winter Break",
        startDate: "2024-12-15",
        endDate: "2025-01-06",
        type: "holiday",
        description: "Winter vacation"
      },
      {
        id: 18,
        title: "Even Semester Registration",
        startDate: "2025-01-07",
        endDate: "2025-01-10",
        type: "registration",
        description: "Registration for even semester courses"
      },
      {
        id: 19,
        title: "Even Semester Classes Begin",
        startDate: "2025-01-13",
        endDate: "2025-01-13",
        type: "academic",
        description: "Commencement of even semester classes"
      },
      {
        id: 20,
        title: "Republic Day",
        startDate: "2025-01-26",
        endDate: "2025-01-26",
        type: "holiday",
        description: "National holiday - Republic Day"
      },
      {
        id: 21,
        title: "Working Saturday",
        startDate: "2025-01-25",
        endDate: "2025-01-25",
        type: "working-saturday",
        description: "Compensatory working day for Republic Day"
      },
      {
        id: 22,
        title: "Compensatory Holiday",
        startDate: "2025-01-27",
        endDate: "2025-01-27",
        type: "compensatory-holiday",
        description: "Compensatory holiday for working Saturday"
      },
      {
        id: 23,
        title: "CIA 1 Examinations (Even Sem)",
        startDate: "2025-02-24",
        endDate: "2025-03-01",
        type: "exam",
        description: "First CIA for even semester"
      },
      {
        id: 24,
        title: "Holi",
        startDate: "2025-03-14",
        endDate: "2025-03-14",
        type: "holiday",
        description: "Festival of colors"
      },
      {
        id: 25,
        title: "Working Saturday",
        startDate: "2025-03-15",
        endDate: "2025-03-15",
        type: "working-saturday",
        description: "Compensatory working day for Holi"
      },
      {
        id: 26,
        title: "Compensatory Holiday",
        startDate: "2025-03-17",
        endDate: "2025-03-17",
        type: "compensatory-holiday",
        description: "Compensatory holiday for working Saturday"
      },
      {
        id: 27,
        title: "CIA 2 Examinations (Even Sem)",
        startDate: "2025-04-07",
        endDate: "2025-04-12",
        type: "exam",
        description: "Second CIA for even semester"
      },
      {
        id: 28,
        title: "Good Friday",
        startDate: "2025-04-18",
        endDate: "2025-04-18",
        type: "holiday",
        description: "Good Friday holiday"
      },
      {
        id: 29,
        title: "Working Saturday",
        startDate: "2025-04-19",
        endDate: "2025-04-19",
        type: "working-saturday",
        description: "Compensatory working day for Good Friday"
      },
      {
        id: 30,
        title: "Compensatory Holiday",
        startDate: "2025-04-21",
        endDate: "2025-04-21",
        type: "compensatory-holiday",
        description: "Compensatory holiday for working Saturday"
      },
      {
        id: 31,
        title: "CIA 3 Examinations (Even Sem)",
        startDate: "2025-04-28",
        endDate: "2025-05-03",
        type: "exam",
        description: "Third CIA for even semester"
      },
      {
        id: 32,
        title: "End Semester Examinations (Even Sem)",
        startDate: "2025-05-12",
        endDate: "2025-05-24",
        type: "exam",
        description: "Final examinations for even semester"
      },
      {
        id: 33,
        title: "Summer Break",
        startDate: "2025-05-25",
        endDate: "2025-07-14",
        type: "holiday",
        description: "Summer vacation"
      }
    ],
    
    // Important dates for quick reference
    importantDates: [
      {
        title: "Semester Registration",
        date: "2024-07-15",
        type: "registration"
      },
      {
        title: "Classes Begin",
        date: "2024-07-22",
        type: "academic"
      },
      {
        title: "End Semester Exams",
        date: "2024-12-02",
        type: "exam"
      },
      {
        title: "Even Sem Registration",
        date: "2025-01-07",
        type: "registration"
      },
      {
        title: "Even Sem Classes Begin",
        date: "2025-01-13",
        type: "academic"
      },
      {
        title: "Final Exams (Even Sem)",
        date: "2025-05-12",
        type: "exam"
      }
    ]
  }
}

// Helper function to check if a date is a working Saturday
export const isWorkingSaturday = (date) => {
  const dateString = date.toISOString().split('T')[0]
  return calendarConfig.current.workingSaturdays.includes(dateString)
}

// Helper function to check if a date is a compensatory holiday
export const isCompensatoryHoliday = (date) => {
  const dateString = date.toISOString().split('T')[0]
  return calendarConfig.current.compensatoryHolidays.includes(dateString)
}

// Helper function to check if a date is a regular weekend (but not working Saturday)
export const isRegularWeekend = (date) => {
  const dayOfWeek = date.getDay()
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6 // Sunday or Saturday
  const isWorkingDay = isWorkingSaturday(date)
  return isWeekend && !isWorkingDay
}

// Helper function to get the current calendar
export const getCurrentCalendar = () => {
  return calendarConfig.current
}

// Helper function to check if calendar needs update notification
export const isCalendarRecent = (daysThreshold = 30) => {
  const lastUpdated = new Date(calendarConfig.current.lastUpdated)
  const now = new Date()
  const daysDiff = (now - lastUpdated) / (1000 * 60 * 60 * 24)
  return daysDiff <= daysThreshold
}

// Helper function to get events by type
export const getEventsByType = (type) => {
  return calendarConfig.current.events.filter(event => event.type === type)
}

// Helper function to get upcoming events
export const getUpcomingEvents = (limit = 5) => {
  const now = new Date()
  return calendarConfig.current.events
    .filter(event => new Date(event.startDate) >= now)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, limit)
}

// Helper function to get events for a specific month
export const getEventsForMonth = (year, month) => {
  return calendarConfig.current.events.filter(event => {
    const eventDate = new Date(event.startDate)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month
  })
}

// Helper function to get day type (working, holiday, weekend, etc.)
export const getDayType = (date) => {
  if (isWorkingSaturday(date)) return 'working-saturday'
  if (isCompensatoryHoliday(date)) return 'compensatory-holiday'
  if (isRegularWeekend(date)) return 'weekend'
  
  // Check if there's a holiday event on this date
  const dateString = date.toISOString().split('T')[0]
  const holidayEvent = calendarConfig.current.events.find(event => 
    event.type === 'holiday' && 
    dateString >= event.startDate && 
    dateString <= event.endDate
  )
  
  if (holidayEvent) return 'holiday'
  
  return 'working-day'
}
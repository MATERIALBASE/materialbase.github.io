// Calendar configuration file
// Update this file whenever you need to change the calendar link or add new calendars

export const calendarConfig = {
  // Current academic year calendar
  current: {
    year: "2024-25",
    title: "Main Calendar 2024-25",
    url: "/images/Calender.pdf",
    description: "Complete academic calendar for the current year",
    lastUpdated: "2024-01-15"
  },
  
  // Archive of previous calendars (optional)
  archive: [
    // Add previous year calendars here if needed
    // {
    //   year: "2023-24",
    //   title: "Main Calendar 2023-24",
    //   url: "/images/Calender-2023-24.pdf",
    //   description: "Academic calendar for 2023-24",
    //   lastUpdated: "2023-01-15"
    // }
  ],
  
  // Future calendars (when available)
  upcoming: [
    // Add future calendars here when they become available
    // {
    //   year: "2025-26",
    //   title: "Main Calendar 2025-26",
    //   url: "/images/Calender-2025-26.pdf",
    //   description: "Academic calendar for 2025-26",
    //   lastUpdated: "2025-01-15"
    // }
  ]
}

// Helper function to get the most recent calendar
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
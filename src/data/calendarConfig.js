// Calendar configuration file
// Update this file whenever you need to change the calendar data

export const calendarConfig = {
  // Current academic year calendar
  current: {
    year: "2024-25",
    title: "Main Calendar 2024-25",
    description: "Complete academic calendar for the current year",
    lastUpdated: "2024-01-15",
    // Calendar events data - update this when new calendar is released
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
        title: "CIA 1 Examinations",
        startDate: "2024-09-02",
        endDate: "2024-09-07",
        type: "exam",
        description: "First Continuous Internal Assessment"
      },
      {
        id: 4,
        title: "Mid-Semester Break",
        startDate: "2024-09-23",
        endDate: "2024-09-29",
        type: "holiday",
        description: "Mid-semester break for students"
      },
      {
        id: 5,
        title: "CIA 2 Examinations",
        startDate: "2024-10-14",
        endDate: "2024-10-19",
        type: "exam",
        description: "Second Continuous Internal Assessment"
      },
      {
        id: 6,
        title: "Diwali Holidays",
        startDate: "2024-10-31",
        endDate: "2024-11-03",
        type: "holiday",
        description: "Diwali festival holidays"
      },
      {
        id: 7,
        title: "CIA 3 Examinations",
        startDate: "2024-11-18",
        endDate: "2024-11-23",
        type: "exam",
        description: "Third Continuous Internal Assessment"
      },
      {
        id: 8,
        title: "End Semester Examinations",
        startDate: "2024-12-02",
        endDate: "2024-12-14",
        type: "exam",
        description: "Final examinations for odd semester"
      },
      {
        id: 9,
        title: "Winter Break",
        startDate: "2024-12-15",
        endDate: "2025-01-06",
        type: "holiday",
        description: "Winter vacation"
      },
      {
        id: 10,
        title: "Even Semester Registration",
        startDate: "2025-01-07",
        endDate: "2025-01-10",
        type: "registration",
        description: "Registration for even semester courses"
      },
      {
        id: 11,
        title: "Even Semester Classes Begin",
        startDate: "2025-01-13",
        endDate: "2025-01-13",
        type: "academic",
        description: "Commencement of even semester classes"
      },
      {
        id: 12,
        title: "Republic Day",
        startDate: "2025-01-26",
        endDate: "2025-01-26",
        type: "holiday",
        description: "National holiday"
      },
      {
        id: 13,
        title: "CIA 1 Examinations (Even Sem)",
        startDate: "2025-02-24",
        endDate: "2025-03-01",
        type: "exam",
        description: "First CIA for even semester"
      },
      {
        id: 14,
        title: "Holi",
        startDate: "2025-03-14",
        endDate: "2025-03-14",
        type: "holiday",
        description: "Festival of colors"
      },
      {
        id: 15,
        title: "CIA 2 Examinations (Even Sem)",
        startDate: "2025-04-07",
        endDate: "2025-04-12",
        type: "exam",
        description: "Second CIA for even semester"
      },
      {
        id: 16,
        title: "CIA 3 Examinations (Even Sem)",
        startDate: "2025-04-28",
        endDate: "2025-05-03",
        type: "exam",
        description: "Third CIA for even semester"
      },
      {
        id: 17,
        title: "End Semester Examinations (Even Sem)",
        startDate: "2025-05-12",
        endDate: "2025-05-24",
        type: "exam",
        description: "Final examinations for even semester"
      },
      {
        id: 18,
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
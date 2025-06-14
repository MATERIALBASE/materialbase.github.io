# Material Base - React Application

A modern React application for SASTRA University students to access academic materials, calendars, and resources.

## 🚀 Features

- **Dynamic Calendar Integration**: Automatically updates when new calendar links are added
- **Semester Materials**: Organized by department and semester
- **Exam Papers**: Previous year question papers
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Real-time Notifications**: Calendar update notifications

## 📅 Calendar Management

### How to Update the Calendar

The calendar system is designed to be easily updated without touching the main code. Follow these steps:

1. **Update Calendar Configuration**:
   - Open `src/data/calendarConfig.js`
   - Update the `current` object with new calendar information:

```javascript
current: {
  year: "2025-26",
  title: "Main Calendar 2025-26", 
  url: "/images/Calender-2025-26.pdf", // New PDF path
  description: "Complete academic calendar for 2025-26",
  lastUpdated: "2025-01-15" // Update date
}
```

2. **Add New PDF File**:
   - Place the new calendar PDF in the `public/images/` folder
   - Name it consistently (e.g., `Calender-2025-26.pdf`)

3. **Archive Previous Calendar** (Optional):
   - Move the previous calendar info to the `archive` array
   - This keeps historical calendars accessible

### Calendar Features

- **Automatic Update Detection**: System checks if calendar is recent (within 30 days)
- **User Notifications**: Shows notification when calendar may need updating
- **Multiple View Options**: PDF viewer, external link, download
- **Error Handling**: Graceful fallbacks if PDF fails to load
- **Mobile Responsive**: Works on all screen sizes

### Calendar Notification System

- Automatically notifies users when calendar might be outdated
- Smart dismissal system (won't show again for 24 hours after dismissal)
- Non-intrusive bottom-right notification
- Direct link to calendar page

## 🛠 Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── CalendarManager.jsx    # Main calendar display
│   ├── CalendarNotification.jsx # Update notifications
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── data/               # Configuration files
│   └── calendarConfig.js      # Calendar configuration
├── hooks/              # Custom React hooks
│   └── useCalendarUpdates.js  # Calendar update logic
├── pages/              # Page components
│   ├── Calendar.jsx
│   ├── Home.jsx
│   └── ...
└── ...
```

## 🔧 Configuration

### Calendar Configuration (`src/data/calendarConfig.js`)

This file controls all calendar-related settings:

- **current**: Current academic year calendar
- **archive**: Previous year calendars
- **upcoming**: Future calendars (when available)

### Helper Functions

- `getCurrentCalendar()`: Returns current calendar configuration
- `isCalendarRecent(days)`: Checks if calendar was updated recently

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Animations

Built with Framer Motion for smooth, professional animations:
- Page transitions
- Loading animations
- Hover effects
- Notification animations

## 🔗 External Links

The application integrates with various external services:
- Google Drive for materials
- SASTRA Hall Plan system
- Utility calculators
- Google Play Store

## 📄 License

This project is for educational purposes for SASTRA University students.

## 🤝 Contributing

To add new materials or update information:
1. Update the relevant configuration files
2. Add new PDF files to the `public/images/` folder
3. Test the changes locally
4. Deploy the updates

## 📞 Support

For issues or questions, contact the Material Base team through the feedback system in the application.
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Semesters from './pages/Semesters'
import SemesterDetail from './pages/SemesterDetail'
import Papers from './pages/Papers'
import Calendar from './pages/Calendar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import TermsModal from './components/TermsModal'
import CalendarNotification from './components/CalendarNotification'

function App() {
  const [loading, setLoading] = useState(true)
  const [showTerms, setShowTerms] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Check if terms modal should be shown
    const modalShown = document.cookie.indexOf('modalShown=true') !== -1
    if (!modalShown) {
      setTimeout(() => {
        setShowTerms(true)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [])

  const handleAcceptTerms = () => {
    document.cookie = "modalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
    setShowTerms(false)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semesters" element={<Semesters />} />
          <Route path="/semester/:id" element={<SemesterDetail />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <TermsModal isOpen={showTerms} onAccept={handleAcceptTerms} />
      <CalendarNotification />
    </div>
  )
}

export default App
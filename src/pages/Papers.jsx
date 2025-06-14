import React from 'react'
import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink } from 'lucide-react'

const Papers = () => {
  const papers = [
    { name: 'SEM 1', link: 'https://drive.google.com/drive/u/0/folders/16Xu43yiAkUSoi9jgiLhCozhGJ6R8n96_', color: 'from-blue-500 to-blue-600' },
    { name: 'SEM 2', link: 'https://drive.google.com/drive/u/0/folders/16Xu43yiAkUSoi9jgiLhCozhGJ6R8n96_', color: 'from-green-500 to-green-600' },
    { name: 'SEM 3', link: '#', color: 'from-purple-500 to-purple-600' },
    { name: 'SEM 4', link: '#', color: 'from-red-500 to-red-600' },
    { name: 'SEM 5', link: '#', color: 'from-yellow-500 to-yellow-600' },
    { name: 'SEM 6', link: '#', color: 'from-indigo-500 to-indigo-600' },
    { name: 'SEM 7', link: '#', color: 'from-pink-500 to-pink-600' },
    { name: 'SEM 8', link: '#', color: 'from-teal-500 to-teal-600' },
    { name: 'BCOM', link: 'https://drive.google.com/drive/u/0/folders/1fKG_YfO4WYXEhveVbxS6cn8YMZ2kzS8t', color: 'from-orange-500 to-orange-600' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Exam Papers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Access previous year question papers for better preparation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {papers.map((paper, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block group ${paper.link === '#' ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={paper.link === '#' ? (e) => e.preventDefault() : undefined}
              >
                <div className="card overflow-hidden dark:bg-gray-800 dark:shadow-gray-700/20">
                  <div className={`h-32 bg-gradient-to-br ${paper.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <FolderOpen className="w-8 h-8 text-white" />
                    </div>
                    {paper.link !== '#' && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-4 right-4"
                      >
                        <ExternalLink className="w-6 h-6 text-white/80" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {paper.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {paper.link === '#' ? 'Coming Soon' : 'Papers Available'}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Papers
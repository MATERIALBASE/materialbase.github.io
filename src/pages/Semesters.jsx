import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderOpen, ArrowRight } from 'lucide-react'

const Semesters = () => {
  const semesters = [
    { 
      id: 1, 
      name: 'SEM 1', 
      link: 'https://drive.google.com/drive/folders/1hsEFhsA27jZWcD76U3-dnijXcphFoYYZ?usp=drive_link',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 2, 
      name: 'SEM 2', 
      link: 'https://drive.google.com/drive/folders/1hsEFhsA27jZWcD76U3-dnijXcphFoYYZ?usp=drive_link',
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 3, 
      name: 'SEM 3', 
      path: '/semester/3',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 4, 
      name: 'SEM 4', 
      path: '/semester/4',
      color: 'from-red-500 to-red-600'
    },
    { 
      id: 5, 
      name: 'SEM 5', 
      path: '/semester/5',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      id: 6, 
      name: 'SEM 6', 
      path: '/semester/6',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      id: 7, 
      name: 'SEM 7', 
      path: '/semester/7',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      id: 8, 
      name: 'SEM 8', 
      path: '/semester/8',
      color: 'from-teal-500 to-teal-600'
    },
    { 
      id: 'law', 
      name: 'LAW', 
      link: 'https://drive.google.com/drive/u/0/folders/1yckeIjA2mTwTkjNm19VoCqdlx6KtYBWC',
      color: 'from-gray-600 to-gray-700'
    }
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
            Choose Your Semester
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Access materials for your current semester
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {semesters.map((semester) => {
            const Component = semester.link ? 'a' : Link
            const props = semester.link 
              ? { href: semester.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: semester.path }

            return (
              <motion.div key={semester.id} variants={itemVariants}>
                <Component
                  {...props}
                  className="block group"
                >
                  <div className="card overflow-hidden dark:bg-gray-800 dark:shadow-gray-700/20">
                    <div className={`h-32 bg-gradient-to-br ${semester.color} relative`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute bottom-4 left-4">
                        <FolderOpen className="w-8 h-8 text-white" />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-4 right-4"
                      >
                        <ArrowRight className="w-6 h-6 text-white/80" />
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                        {semester.name}
                      </h3>
                    </div>
                  </div>
                </Component>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Semesters
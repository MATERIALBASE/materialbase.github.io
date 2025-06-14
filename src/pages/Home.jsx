import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, FileText, Calendar, Users, ArrowRight, Download, Sparkles } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: "Any PDFs",
      description: "for you!!",
      color: "bg-red-500"
    },
    {
      icon: BookOpen,
      title: "Any Books",
      description: "for you!!",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Any PPTs",
      description: "for you!!",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Any Papers",
      description: "for you!!",
      color: "bg-purple-500",
      link: "/papers"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg mb-4 text-blue-100"
              >
                Ready to learn
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Learning is{' '}
                <motion.span
                  animate={{ 
                    color: ['#ffffff', '#fbbf24', '#f59e0b', '#ffffff']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center"
                >
                  Fun
                  <Sparkles className="w-8 h-8 ml-2" />
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl mb-8 text-blue-100 leading-relaxed"
              >
                Hello Sastraites! Welcome to Material Base where you can find all materials 
                which are useful for your semester preparation. Basically, we plan to bring 
                all the materials which are provided by various faculty.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/semesters" className="btn-primary group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.materialbase.materialbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[BookOpen, FileText, Calendar, Users].map((Icon, index) => (
                      <motion.div
                        key={index}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut"
                        }}
                        className="bg-white/20 rounded-2xl p-6 flex items-center justify-center"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  x: [0, 20, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, -15, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Access all your study materials in one place
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              const Component = feature.link ? Link : 'div'
              const props = feature.link ? { to: feature.link } : {}
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Component
                    {...props}
                    className="card group dark:bg-gray-700 dark:shadow-gray-800/20"
                  >
                    <div className="card-content">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </Component>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who trust Material Base for their academic success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/semesters" className="btn-secondary">
                Browse Materials
              </Link>
              
              <a
                href="https://sas.sastra.edu/hallplan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Check Hall Plan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
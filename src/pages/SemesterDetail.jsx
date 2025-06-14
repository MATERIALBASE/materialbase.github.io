import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink } from 'lucide-react'

const SemesterDetail = () => {
  const { id } = useParams()
  
  const semesterData = {
    3: {
      title: 'Semester 3',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1AIchr0eSIq27tmshWsrXZPi3HBbhmbOG?usp=sharing', color: 'from-blue-500 to-blue-600' },
        { name: 'BIOTECHNOLOGY', link: 'https://drive.google.com/drive/folders/1-3qFdM2VU40JXa7lFZqsw69q4gu-luH4?usp=sharing', color: 'from-green-500 to-green-600' },
        { name: 'CSE', link: 'https://drive.google.com/drive/u/4/folders/1JWzazYiV3ry7IeadbJs5xCnrlOIHetB1', color: 'from-purple-500 to-purple-600' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/u/0/folders/1Rpbt7zURT1FoP6JZm76sbPhWHVVVHUjW', color: 'from-red-500 to-red-600' },
        { name: 'CSBS', link: 'https://drive.google.com/drive/folders/1NkrYykRPnY-EQF-QaThpRN1ROvwxNbCw', color: 'from-yellow-500 to-yellow-600' },
        { name: 'IOT', link: 'https://drive.google.com/drive/u/4/folders/1JWzazYiV3ry7IeadbJs5xCnrlOIHetB1', color: 'from-indigo-500 to-indigo-600' },
        { name: 'IT', link: 'https://drive.google.com/drive/folders/1TyQOKdgIqizo4p6YZ-0v75CjBvl1VWkC?usp=drive_link', color: 'from-pink-500 to-pink-600' },
        { name: 'ICT', link: 'https://drive.google.com/drive/u/4/folders/1TyQOKdgIqizo4p6YZ-0v75CjBvl1VWkC', color: 'from-teal-500 to-teal-600' },
        { name: 'ECE', link: 'https://drive.google.com/drive/u/4/folders/19U7wFLtcwEg3JOc98JzoHeAQQwYWwlrf', color: 'from-orange-500 to-orange-600' },
        { name: 'EEE', link: 'https://drive.google.com/drive/u/0/folders/19RmmtxCWEYgO4p2Ym962wFUrwCGB1XeB', color: 'from-cyan-500 to-cyan-600' },
        { name: 'EIE', link: 'https://drive.google.com/drive/folders/1rc8Y4MgMX9e5yt1RnKCCisorxM9hN2Al?usp=drive_link', color: 'from-lime-500 to-lime-600' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1BA9RYB2UU86K7vOvuLkzDwr2NUKCVDTf', color: 'from-amber-500 to-amber-600' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1emJWtfXo91SsiQx0Bfn5OIlLCZynhVrW?usp=sharing', color: 'from-rose-500 to-rose-600' }
      ]
    },
    4: {
      title: 'Semester 4',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1Gmem7ecw2Tr-wHWyJGLECSjt-w6_guI0?usp=sharing', color: 'from-blue-500 to-blue-600' },
        { name: 'BIOTECHNOLOGY', link: 'https://drive.google.com/drive/folders/1Nl3vIiQqnlwIaUURJORV3bSPuHmhtffv', color: 'from-green-500 to-green-600' },
        { name: 'CSE', link: 'https://drive.google.com/drive/u/4/folders/1A04tgtB_tzuBz29eg_ZE-cN3C08aEF5k', color: 'from-purple-500 to-purple-600' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/u/0/folders/1Rpbt7zURT1FoP6JZm76sbPhWHVVVHUjW', color: 'from-red-500 to-red-600' },
        { name: 'CSBS', link: 'https://drive.google.com/drive/folders/1NkrYykRPnY-EQF-QaThpRN1ROvwxNbCw', color: 'from-yellow-500 to-yellow-600' },
        { name: 'IOT', link: 'https://drive.google.com/drive/u/4/folders/1t35bYgiEnu84OMtbeWPmiIKi9ysDE-D-', color: 'from-indigo-500 to-indigo-600' },
        { name: 'IT', link: 'https://drive.google.com/drive/u/4/folders/1t35bYgiEnu84OMtbeWPmiIKi9ysDE-D-', color: 'from-pink-500 to-pink-600' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1CD4Mm7xGd5PrAFO-MyJKReoIdcqrozI6?usp=drive_link', color: 'from-teal-500 to-teal-600' },
        { name: 'ECE', link: 'https://drive.google.com/drive/folders/1GEVNQAs2rv0AUcTLol5Rz-91MyMir1SO?usp=share_link', color: 'from-orange-500 to-orange-600' },
        { name: 'EEE', link: 'https://drive.google.com/drive/u/0/folders/17ZN2RFfzT4-e5m6xnHVDzdmKIyK4TNVR', color: 'from-cyan-500 to-cyan-600' },
        { name: 'EIE', link: 'https://drive.google.com/drive/folders/1XqLBdnWxeWjjh6mHLNE1je4NcDNpCoIr?usp=drive_link', color: 'from-lime-500 to-lime-600' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1-wo9s1lpvthH-I2agHN7QNpMFlySwwnd', color: 'from-amber-500 to-amber-600' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1ol-nloz1eXbNkWSg9Rwei0LJDgX6zocI?usp=sharing', color: 'from-rose-500 to-rose-600' }
      ]
    },
    5: {
      title: 'Semester 5',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1Avk-hLvmB5aeuoxJPENe-dpyShLm5vW9?usp=drive_link', color: 'from-blue-500 to-blue-600' },
        { name: 'BIOTECH', link: '#', color: 'from-green-500 to-green-600' },
        { name: 'CSE', link: 'https://drive.google.com/drive/folders/1Zcu-2IdTx_5r8_EuSUGWai4bSjvym--L?usp=sharing', color: 'from-purple-500 to-purple-600' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/u/0/folders/1nl6O97RL9LKXt1mvZv8mLRLc0WXPx1UA', color: 'from-red-500 to-red-600' },
        { name: 'IT', link: 'https://drive.google.com/drive/folders/1wePTXbNjTwsFbF7bVBzxH6k0RpgOCUwi', color: 'from-pink-500 to-pink-600' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1Wr0ksIrG_AgHWwXSQMNHheZWdLDp5aG5?usp=drive_link', color: 'from-teal-500 to-teal-600' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600' },
        { name: 'ECE', link: 'https://drive.google.com/drive/folders/1pxDYkjYFcLRYy0K4pzWsr6YrjYMy_xCw?usp=drive_link', color: 'from-orange-500 to-orange-600' },
        { name: 'EEE', link: 'https://drive.google.com/drive/folders/1p-jZ7TPJCqrCubTSj9N_-3WfwyaF1T5K?usp=drive_link', color: 'from-cyan-500 to-cyan-600' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1wp73DjhCIgGvCs2kgLzaTsUJoSqs5Svu', color: 'from-amber-500 to-amber-600' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1CvLsC6Ay1tS32pQdM-HBIo2UnSRFW6o4?usp=drive_link', color: 'from-rose-500 to-rose-600' }
      ]
    },
    6: {
      title: 'Semester 6',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1Cxmvu_tmD5Pve3g57KaQ2-JX10OfvTRq?usp=drive_link', color: 'from-blue-500 to-blue-600' },
        { name: 'BIOTECH', link: '#', color: 'from-green-500 to-green-600' },
        { name: 'CSE', link: 'https://drive.google.com/drive/folders/1hzgn3MGGIBkNpr7TqDUUnSJRv9toDxE3?usp=sharing', color: 'from-purple-500 to-purple-600' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/folders/1epvlc9E8i8NqkYZEHhZloOL3IYWpc-M4?usp=drive_link', color: 'from-red-500 to-red-600' },
        { name: 'IT', link: 'https://drive.google.com/drive/folders/19SoaCs4aRKLBaUI0itAQFXnFcEfu8wW_?usp=drive_link', color: 'from-pink-500 to-pink-600' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1s54p3v3kEgvd-lpXXRQKhOtzya_fp5tI?usp=drive_link', color: 'from-teal-500 to-teal-600' },
        { name: 'ECE', link: 'https://drive.google.com/drive/folders/1fS0bW_RS_NFFMbjIDxgiVttbHqqeR3Uu?usp=sharing', color: 'from-orange-500 to-orange-600' },
        { name: 'EEE', link: 'https://drive.google.com/drive/folders/1-VZtrWBZLxy_fOUU1uNEnV0GK-k1kVGF?usp=drive_link', color: 'from-cyan-500 to-cyan-600' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1L3WHKSokMaebWWbjrPLnf4hLVXMuLFDG', color: 'from-amber-500 to-amber-600' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1F3IKAbREGn3DGTFbvPzzyHoeERSzBDfK?usp=drive_link', color: 'from-rose-500 to-rose-600' }
      ]
    },
    7: {
      title: 'Semester 7',
      departments: [
        { name: 'AEROSPACE', link: '#', color: 'from-blue-500 to-blue-600' },
        { name: 'BIOTECHNOLOGY', link: '#', color: 'from-green-500 to-green-600' },
        { name: 'CSE', link: 'https://drive.google.com/drive/folders/1k5y9UtD4NkKwMrBC4dxOkgU0iS6TOgbi?usp=drive_link', color: 'from-purple-500 to-purple-600' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/folders/1CPP61yEqWmZn4FgAR8mo-BsBIyVE9cx8?usp=drive_link', color: 'from-red-500 to-red-600' },
        { name: 'IT', link: '#', color: 'from-pink-500 to-pink-600' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1Avw33hD17gwuw5_vaWY5OKkoARVgJvI8?usp=drive_link', color: 'from-teal-500 to-teal-600' },
        { name: 'ECE', link: '#', color: 'from-orange-500 to-orange-600' },
        { name: 'EEE', link: 'https://drive.google.com/drive/folders/19sKFH9VzMBzuVnUZadn6mRT1Esyj464T', color: 'from-cyan-500 to-cyan-600' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/13KpWIWpvJ_H4IlsbvxK5KNJWqX1YVS_w', color: 'from-amber-500 to-amber-600' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/19dQA70v4aem5TRZbiBC1ZuuQa7OMjVkS?usp=drive_link', color: 'from-rose-500 to-rose-600' }
      ]
    },
    8: {
      title: 'Semester 8',
      departments: [
        { name: 'AEROSPACE', link: '#', color: 'from-blue-500 to-blue-600' },
        { name: 'BIOTECHNOLOGY', link: '#', color: 'from-green-500 to-green-600' },
        { name: 'CSE', link: '#', color: 'from-purple-500 to-purple-600' },
        { name: 'CIVIL', link: '#', color: 'from-red-500 to-red-600' },
        { name: 'IT', link: '#', color: 'from-pink-500 to-pink-600' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600' },
        { name: 'ICT', link: '#', color: 'from-teal-500 to-teal-600' },
        { name: 'ECE', link: '#', color: 'from-orange-500 to-orange-600' },
        { name: 'EEE', link: '#', color: 'from-cyan-500 to-cyan-600' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600' },
        { name: 'MECHANICAL', link: '#', color: 'from-amber-500 to-amber-600' },
        { name: 'MECHATRONICS', link: '#', color: 'from-rose-500 to-rose-600' }
      ]
    }
  }

  const semester = semesterData[id]

  if (!semester) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Semester Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">The requested semester materials are not available.</p>
        </div>
      </div>
    )
  }

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
            {semester.title} Materials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose your department to access materials
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {semester.departments.map((dept, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={dept.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block group ${dept.link === '#' ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={dept.link === '#' ? (e) => e.preventDefault() : undefined}
              >
                <div className="card overflow-hidden dark:bg-gray-800 dark:shadow-gray-700/20">
                  <div className={`h-24 bg-gradient-to-br ${dept.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-2 left-4">
                      <FolderOpen className="w-6 h-6 text-white" />
                    </div>
                    {dept.link !== '#' && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-2 right-4"
                      >
                        <ExternalLink className="w-5 h-5 text-white/80" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {dept.link === '#' ? 'Coming Soon' : 'Materials Available'}
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

export default SemesterDetail
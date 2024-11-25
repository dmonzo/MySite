'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './AnimatedLogo.module.css'

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClickExpanded, setIsClickExpanded] = useState(false)
  const [displayText, setDisplayText] = useState('DM')

  const handleClick = () => {
    setIsClickExpanded(!isClickExpanded)
  }

  const isExpanded = isClickExpanded || isHovered

  useEffect(() => {
    setDisplayText(isExpanded ? 'Dashiel Monzo' : 'DM')
  }, [isExpanded])

  return (
    <div 
      className="relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="flex items-center"
        initial={false}
        animate={{ 
          width: isExpanded ? 'auto' : '2.4em',
          scale: isHovered && isClickExpanded ? 0.9 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <span 
          className={`text-xl font-medium whitespace-nowrap ${styles.glowingText}`}
          data-text={displayText}
        >
          {displayText}
        </span>
      </motion.div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './AnimatedLogo.module.css'

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClickExpanded, setIsClickExpanded] = useState(false)

  const handleClick = () => {
    setIsClickExpanded(!isClickExpanded)
  }

  const isExpanded = isClickExpanded || isHovered

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="flex items-center overflow-hidden"
        initial={false}
        animate={{ 
          width: isExpanded ? 'auto' : '2.4em',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.span 
          className={`text-xl font-medium ${styles.glowingText}`}
          style={{
            display: 'block',
            whiteSpace: 'nowrap',
          }}
        >
          {isExpanded ? 'Dashiel Monzo' : 'DM'}
        </motion.span>
      </motion.div>
    </div>
  )
}


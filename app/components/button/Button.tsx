"use client"

import React from "react"
import { motion } from "framer-motion"

interface ButtonProps {
  text: string
  onClick?: () => void
  bg?: string
  modifier?: string
  padding?: string
  borderRadius?: string
  hover?: string
}

function Button({
  text,
  onClick,
  bg,
  modifier = "primary",
  padding,
  borderRadius = "60px",
  hover,
}: ButtonProps) {
  return (
    /**
     * damping: Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
     */
    <motion.button
      whileHover={hover && { scale: 1.1 }} // if hover is true then scale up to 1.1
      transition={{
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 6,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className={`button button--${modifier}`}
      onClick={onClick}
      style={{
        background: bg,
        padding: padding || ".8rem 2rem",
        borderRadius: borderRadius || "1rem",
      }}
    >
      {text}
    </motion.button>
  )
}

export default Button

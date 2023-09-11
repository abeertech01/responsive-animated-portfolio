"use client"

import React from "react"

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
    <button
      className={`button button--${modifier}`}
      style={{
        background: bg,
        padding: padding || ".8rem 2rem",
        borderRadius: borderRadius || "1rem",
      }}
    >
      {text}
    </button>
  )
}

export default Button

"use client"

import React from "react"
import Button from "../button/Button"

interface Props {
  text: string
  button?: boolean
  background?: string
  shadow?: boolean
  color?: string
}

function Banner({
  text,
  button,
  background = "radial-gradient(80.97% 80.37% at 56.01% 19.03%, #9759F5 0%, #7263F3 99.23%)",
  shadow,
  color,
}: Props) {
  return (
    <div
      className="banner"
      style={{
        background,
        boxShadow: shadow ? "0px 4px 4px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <p
        className="banner__text"
        style={{
          color,
        }}
      >
        {text}
      </p>
      {button && (
        <Button
          text="Contact Us"
          bg="white"
          padding="1.2rem 2rem"
          hover="true"
        />
      )}
    </div>
  )
}

export default Banner

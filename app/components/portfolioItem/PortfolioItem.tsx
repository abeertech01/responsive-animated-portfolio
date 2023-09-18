"use client"

import { Portfolio } from "@/app/utils/portfolios"
import Image from "next/image"
import React from "react"

import { motion } from "framer-motion"

function PortfolioItem({ name, image, categories, onClick }: Portfolio) {
  const [isHover, setIsHover] = React.useState(false)

  const hoverVariants = {
    hidden: {
      y: -100,
      scaleX: 0.5,
      opacity: 0,
    },
    visible: {
      y: 0,
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const hoverVariants2 = {
    hidden: {
      y: 100,
      scaleX: 0.6,
      opacity: 0,
    },
    visible: {
      y: 0,
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const handleHoverStart = () => {
    setIsHover(true)
    console.log("hover")
  }
  const handleHoverEnd = () => {
    setIsHover(false)
    console.log("hover end")
  }
  return (
    <motion.div
      className="portfolio"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={onClick}
    >
      <Image src={image} alt={name} />
      <div className="hover">
        <motion.div
          className="hover__categories"
          initial="hidden"
          variants={hoverVariants}
          animate={isHover ? "visible" : "hidden"}
        >
          {categories.map((category) => {
            return <span key={category}>{category}</span>
          })}
        </motion.div>
        <motion.p
          className="hover__title"
          initial="hidden"
          variants={hoverVariants2}
          animate={isHover ? "visible" : "hidden"}
        >
          {name}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default PortfolioItem

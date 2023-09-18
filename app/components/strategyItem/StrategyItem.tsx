"use client"

import React from "react"

interface Props {
  number: string
  title: string
  description: string
}

function StrategyItem({ number, title, description }: Props) {
  return (
    <li className="strategy-item">
      <div className="strategy-item__title">
        <span className="strategy-item__number">{number}</span>
        <span className="strategy-item__text">{title}</span>
      </div>
      <p className="strategy-item__description">{description}</p>
    </li>
  )
}

export default StrategyItem

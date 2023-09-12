"use client"

import React from "react"

import { portfolios } from "../utils/portfolios"
import PortfolioItem from "./portfolioItem/PortfolioItem"

function Portfolios() {
  return (
    <div className="portfolios">
      {portfolios.map((portfolio) => {
        return (
          <PortfolioItem
            key={portfolio.id}
            name={portfolio.name}
            image={portfolio.image}
            url={portfolio.url}
            categories={portfolio.categories}
          ></PortfolioItem>
        )
      })}
    </div>
  )
}

export default Portfolios

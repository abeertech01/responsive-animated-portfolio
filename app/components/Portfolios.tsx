"use client"

import React from "react"

import { portfolios } from "../utils/portfolios"
import PortfolioItem from "./portfolioItem/PortfolioItem"
import { useRouter } from "next/navigation"

function Portfolios() {
  const router = useRouter()

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
            onClick={() => {
              router.push(`/portfolio/${portfolio.url}`)
            }}
          ></PortfolioItem>
        )
      })}
    </div>
  )
}

export default Portfolios

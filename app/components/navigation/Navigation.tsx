"use client"

import React from "react"
import Button from "../button/Button"
import Image from "next/image"
import menuItems from "../../utils/menuItems"
import Link from "next/link"

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-items">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={45}
          height={45}
          style={{
            objectFit: "contain",
            backgroundColor: "#f2f6ff",
            borderRadius: "50%",
            padding: ".3rem",
          }}
        />

        {menuItems.map((item) => {
          return (
            <li key={item.id} className="nav-items__item">
              <Link href={item.url}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
      <Button
        text="Contact Us"
        bg="#a855f7"
        modifier="white"
        borderRadius="60px"
        padding="1.2rem 2rem"
        hover="true"
      />
    </nav>
  )
}

export default Navigation

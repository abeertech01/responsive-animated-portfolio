import React from "react"

interface Props {
  logo?: string
  title?: string
  description?: string
  links?: string[]
  background?: string
}

function ContactBanner({
  logo = "/logo.png",
  title,
  description,
  links = ["Home", "About", "Contact"],
  background = "linear-gradient(90deg, #A855F7 60%, #7263F3 100%)",
}: Props) {
  return (
    <div
      className="contact-banner"
      style={{
        background,
      }}
    >
      <div className="contact-banner__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="contact-banner__title">
        <h1>{title}</h1>
      </div>
      <div className="contact-banner__description">
        <p>{description}</p>
      </div>
      <div className="contact-banner__links">
        {links.map((link) => {
          return (
            <a href="#" key={link}>
              {link}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default ContactBanner

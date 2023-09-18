import React from "react"
import Banner from "../components/banners/Banner"
import ContactBanner from "../blogs/ContactBanner"
import StrategyItem from "../components/strategyItem/StrategyItem"

type AboutProps = {}

const AboutPage: React.FC<AboutProps> = () => {
  const gradients = [
    "linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))",
    "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
    "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
    "linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))",
  ]

  const randomGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)]
  }

  return (
    <div className="use-pad-2">
      <div
        className="about-header"
        style={{
          background: randomGradient(),
        }}
      >
        <img src="/about.png" alt="" className="about-header__image" />
      </div>

      <div className="about-content">
        <Banner
          text="I am a full-stack web developer with a passion for building
            beautiful and functional websites."
          button
          color="white"
        />

        <section className="strategy-section">
          <h2 className="strategy-section__title">Strategay</h2>
          <ol className="strategy-section__list">
            <StrategyItem
              number={"01"}
              title="Research"
              description="We start by researching your business and your competitors. We then create a plan to help you achieve your goals. After the plan is in place, we collaborate closely with you to execute the strategies effectively."
            />
            <StrategyItem
              number="02"
              title="Discover"
              description="We digest, analyse and challenge the information gathered to reveal strategic insights. They’ll inform the direction of your project and establish the strategic foundations that everything else will be built on."
            />
            <StrategyItem
              number="03"
              title="Plan"
              description="We create a plan to help you achieve your goals. After the plan is in place, we collaborate closely with you to execute the strategies effectively."
            />
          </ol>

          <h2 className="strategy-section__title">Creative Development</h2>
          <ol className="strategy-section__list">
            <StrategyItem
              number="04"
              title="Design"
              description="We create a plan to help you achieve your goals. After the plan is in place, we collaborate closely with you to execute the strategies effectively."
            />
            <StrategyItem
              number="05"
              title="Develop"
              description="Now we’re ready to bring our chosen idea to life. We’ll build it. Refine it. Test it. Tweak it. And test it and tweak it some more. Until it meets our (and your) exceptionally high standards."
            />
            <StrategyItem
              number="06"
              title="Deliver"
              description="The way we see it, our role isn’t over until we’ve supported you to implement and deliver your creative solution. Because we want it to be a success just as much as you do."
            />
          </ol>
        </section>

        <ContactBanner />
      </div>
    </div>
  )
}
export default AboutPage

import ContactBanner from "./blogs/ContactBanner"
import Portfolios from "./components/Portfolios"
import Banner from "./components/banners/Banner"
import PortfolioItem from "./components/portfolioItem/PortfolioItem"
import { portfolios } from "./utils/portfolios"

export default function Home() {
  return (
    <main className="u-pad-2">
      <Portfolios />
      <Banner
        color="white"
        text="Interested in working with me on your next project? Send me an email or schedule a meeting."
        button
      />
      <div className="mini-portfolios">
        {portfolios.slice(-4).map((portfolio) => {
          return (
            <PortfolioItem
              key={portfolio.id}
              name={portfolio.name}
              image={portfolio.image}
              url={portfolio.url}
              categories={portfolio.categories}
            />
          )
        })}
      </div>
      <Banner
        background="white"
        shadow
        color="#6366F1"
        text="I am a tech-savvy individual leading a design and web development studio dedicated to providing comprehensive digital solutions."
      />

      <ContactBanner />
    </main>
  )
}

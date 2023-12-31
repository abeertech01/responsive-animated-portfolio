"use client"

import { blogs } from "@/app/utils/blogs"
import Image from "next/image"

interface Params {
  params: {
    blogName: string
  }
}

const BlogItem = ({ params: { blogName } }: Params) => {
  const blog = blogs.find(
    (blog) =>
      blog.title?.replace(/:/g, "").split(" ").join("-").toLowerCase() ===
      blogName
  )

  const { title, introduction, image, outro, list, featuredPortfolio } = blog

  const { image: introImage } = featuredPortfolio

  if (!blog) {
    return <div>Loading...</div>
  }
  return (
    <section className="blog-page">
      <div className="blog-page__header">
        {title && <h1 className="blog-page__title">{title}</h1>}
        <div className="blog-page__header__profile">
          <Image
            className="logo"
            src={"/logo.png"}
            alt="logo"
            width={45}
            height={45}
            style={{ objectFit: "contain" }}
          />
          <p className="blog-page__header__date">
            <span>The Code Dealer</span>
            <span>21 May 2023</span>
          </p>
        </div>

        <div className="blog-page__header__image">
          <Image src={image} alt={title} />
        </div>
      </div>

      <div className="blog-page__content">
        <h3 className="blog-page__content__introduction">{introduction}</h3>
        {introImage && (
          <Image
            className="blog-page__content__intro-image"
            src={introImage}
            alt="intro image"
          />
        )}

        <ol className="blog-page__content__list">
          {list &&
            list?.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </li>
              )
            })}
        </ol>

        <p className="blog-page__content__outro">{outro}</p>
      </div>
    </section>
  )
}

export default BlogItem

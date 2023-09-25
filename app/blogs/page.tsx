"use client"

import React from "react"
import ContactBanner from "./ContactBanner"
import Banner from "../components/banners/Banner"
import { blogs } from "../utils/blogs"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BlogsPage = () => {
  const router = useRouter()
  return (
    <div className="u-pad-2">
      <div className="blogs">
        {blogs.map((blog, index: number) => {
          return (
            <div
              key={index}
              className="blog"
              onClick={() => {
                router.push(
                  `/blog/${blog.title
                    ?.replace(/:/g, "")
                    ?.split(" ")
                    .join("-")
                    .toLocaleLowerCase()}`
                )
              }}
            >
              <div className="blog__image">
                {blog.image && <Image src={blog.image} alt="blog" />}
              </div>
              <h4 className="blog__title">{blog.title}</h4>
            </div>
          )
        })}
      </div>
      <Banner
        color="white"
        button
        text="Interested in working with me on your next project? Send me an email or schedule a meeting."
      />
      <ContactBanner />
    </div>
  )
}
export default BlogsPage

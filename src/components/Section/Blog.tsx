import { Blog as BlogType } from "@/constants/blog"
import Link from "next/link"
import React from "react"
import Cardblog from "../Card/Cardblog"

type Props = {
  blog: BlogType[]
  title: string
  top: string
  type?: string
}

const Blog = ({ blog, title, top, type }: Props) => {
  return (
    <section id="overview">
      <div className="container">
        <div className="text-center mb-5">
          <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
            {top}
          </p>
          <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">
            {title}
          </h3>
        </div>
        <div className="row">
          {blog.map((obj, i) => {
            return (
              <div key={i} className="col-lg-4 mb-4 mb-lg-0">
                <Cardblog data={obj} />
              </div>
            )
          })}
        </div>

        {type == "blog" ? (
          <div className="text-center mt-5">
            <div className="d-inline-block">
              <Link
                href="/news"
                className="semi-bold font__size--14 text__14-1024 btn btn__outlined--orange color__orange no__opacity rounded-0 shadow text-uppercase btn__blog-more"
              >
                <div className="d-flex align-items-center">
                  <span className="mr-2">load more</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                      stroke="#EA6B00"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  )
}

export default Blog

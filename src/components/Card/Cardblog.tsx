/* eslint-disable @next/next/no-img-element */
import { Blog } from "@/constants/blog"
import Link from "next/link"
import React from "react"

type Props = {
  data: Blog
}

const Cardblog = ({ data }: Props) => {
  return (
    <Link
      href={`/article/${data.id}`}
      className="wrapper__card-blog color__black d-inline-block w-100"
    >
      <img src={data.img} className="img" alt="" />
      <div className="desc">
        <div className="d-flex align-items-center mb-2">
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__orange">
            {data.tag}
          </h5>
          <span className="font__size--14 text__14-1024 text-uppercase color__gray-1 px-2">
            |
          </span>
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__gray-1">
            {data.date}
          </h5>
        </div>
        <div className="h5 medium font__size--20 text__20-1024 text-uppercase">
          {data.title}
        </div>
        <p className="normal font__size--16 text__16-1024 roboto color__gray-2">
          {data.desc}
        </p>
        <div className="d-inline-block">
          <div className="color__orange text-uppercase text__16-1024">
            read more
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Cardblog

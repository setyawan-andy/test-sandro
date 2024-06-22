/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import Link from "next/link"

type CardServiceProps = {
  data: {
    img: string
    title: string
    desc: string
  }
}

const CardService = (props: CardServiceProps) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="wrapper__card-service color__black d-inline-block w-100">
      <img src={props.data.img} className="img" alt="" />
      <div className="desc">
        <div className="h5 medium font__size--20 text__20-1024 text-uppercase">
          {props.data.title}
        </div>
        <p className="normal font__size--16 text__16-1024 roboto color__gray-2">
          {props.data.desc}
        </p>
        {/* <div className="d-inline-block">
          <a href="#!" className="color__orange text-uppercase">
            read more
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default CardService

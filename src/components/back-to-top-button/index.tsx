"use client"

import React, { useEffect, useState } from "react"

type Props = {}

const BackToTopButton = (props: Props) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true)
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", checkScrollHeight)
    return () => {
      window.removeEventListener("scroll", checkScrollHeight)
    }
  }, [showButton])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showButton && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 9999,
          }}
        >
          <button
            onClick={scrollToTop}
            className="semi-bold font__size--10 text__14-1024 btn btn__orange color__orange no__opacity rounded-0 shadow text-uppercase"
            style={{ padding: "4px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default BackToTopButton

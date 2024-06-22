/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import React from "react"
import { articles } from "@/constants/articles"

type Props = {}

const ArticleDetail = (props: Props) => {
  const router = useRouter()

  const { id } = router.query

  const article = articles.find((article) => article.id === Number(id))

  return (
    <section>
      <div onClick={() => router.push("/")} className="back-button-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#00266d"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </div>
      <div className="container">
        <div style={{ position: "relative", width: "100%" }}>
          <button
            onClick={() => router.push("/")}
            className="semi-bold font__size--10 text__14-1024 btn btn__outlined--orange color__orange no__opacity rounded-0 shadow text-uppercase back-button"
          >
            Back to Home
          </button>
          {article?.title}
        </div>

        {article?.mainImage2 ? (
          <div style={{ display: "flex", gap: 4 }}>
            <img
              src={article?.mainImage}
              className="w-100 images__blog-head mb-5"
              alt=""
            />
            <img
              src={article?.mainImage2}
              className="w-100 images__blog-head mb-5"
              alt=""
            />
          </div>
        ) : (
          <img
            src={article?.mainImage}
            className="w-100 images__blog-head mb-5"
            alt=""
          />
        )}

        <div className="position-relative">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                {article?.p1}
              </p>

              <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                {article?.p2}
              </p>

              <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                {article?.p3}
              </p>

              <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                {article?.p4}
              </p>

              {article?.p5}

              <img src={article?.subImage} className="w-100 mb-3" alt="" />

              <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                {article?.p6}
              </p>
              <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                {article?.p7}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleDetail

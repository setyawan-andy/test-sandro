/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Fragment } from "react"
import Footer from "../components/Other/Footer"
import Navbar from "../components/Other/Navbar"
import Blog from "../components/Section/Blog"
import Contact from "../components/Section/Contact"
import Head from "../components/Section/Head"

const DetailNews = ({ blog }: { blog: any }) => {
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img src="/images/Bg.png" className="images__wrap-head" alt="" />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head default="home" current="Detail News" title={"Detail News"} />
        </div>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h3 className="bold font__size--32 text__32-1024 text-uppercase mb-3">
                Cargo flow through better supply chain{" "}
                <br className="d-none d-sm-block" /> visibility, control.
              </h3>
              <div className="d-flex align-items-center justify-content-center">
                <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__orange">
                  oil & gas
                </h5>
                <span className="font__size--14 text__14-1024 text-uppercase color__gray-1 px-2">
                  |
                </span>
                <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__gray-1">
                  29 Nov 2022
                </h5>
              </div>
            </div>

            <img
              src="/images/as (1).png"
              className="w-100 images__blog-head mb-5"
              alt=""
            />

            <div className="position-relative">
              <div className="wrapper__sosmed-left d-none d-md-block">
                <a href="#!">
                  <img src="/images/sos (1).png" alt="" />
                </a>
                <a href="#!">
                  <img src="/images/sos (4).png" alt="" />
                </a>
                <a href="#!">
                  <img src="/images/sos (3).png" alt="" />
                </a>
                <a href="#!">
                  <img src="/images/sos (2).png" alt="" />
                </a>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-7">
                  <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                    Lorem ipsum dolor sit amet consectetur. Facilisis natoque
                    aliquam arcu eget risus luctus sed consectetur. Rhoncus
                    cursus ac pretium nibh ipsum leo nibh. Eu fames morbi id
                    magna egestas commodo leo egestas. Sed sed nisl scelerisque
                    semper. Ante tempus nisi est molestie egestas blandit et.
                    Enim quisque aliquet sit tellus eu faucibus sed lacinia
                    orci. Aenean sed malesuada luctus non facilisi eget
                    pellentesque fermentum pellentesque. Risus faucibus vitae
                    libero phasellus leo. Sapien nunc lacinia quam ut sit.
                    Consectetur cras varius posuere a. Arcu ut arcu massa cursus
                    quisque. Lorem eget ac convallis nec tincidunt facilisis
                    dolor augue pellentesque.
                  </p>

                  <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                    Maecenas in pharetra hendrerit neque, tellus eu. Arcu
                    tempus, vel blandit adipiscing a sed cursus. Augue
                    vestibulum tempus lectus gravida condimentum mauris iaculis.
                    Sodales imperdiet id maecenas molestie id.
                  </p>

                  <div className="wrapper__left-line blog mb-3">
                    <div className="normal roboto font__size--20 text__20-1024 color__black lh-2 pl-4">
                      “Tincidunt magnis eu, vitae dictumst commodo dolor in. Aen
                      ean dictumst risus posuere a at id fermentum nibh. Luctus
                      nunc bibendum duis egestas scelerisque.”
                    </div>
                  </div>

                  <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    pellentesque ut pellentesque varius amet mauris. Tempor,
                    risus, congue gravida nulla tincidunt nec diam. Tincidunt
                    magnis eu, vitae dictumst commodo dolor in. Aenean dictumst
                    risus posuere a at id fermentum nibh. Luctus nunc bibendum
                    duis egestas scelerisque.{" "}
                  </p>

                  <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                    Maecenas in pharetra hendrerit neque, tellus eu. Arcu
                    tempus, vel blandit adipiscing a sed cursus. Augue
                    vestibulum tempus lectus gravida condimentum mauris iaculis.
                    Sodales imperdiet id maecenas molestie id.
                  </p>

                  <ul className="normal roboto font__size--16 text__16-1024 color__gray-1 pl-4 mb-3">
                    <li>
                      Id pellentesque ut pellentesque varius amet mauris.{" "}
                    </li>
                    <li>Tempor, risus, congue gravida nulla tincidunt. </li>
                    <li>Tincidunt magnis eu, vitae dictumst. </li>
                    <li>
                      Aenean dictumst risus posuere a at id fermentum nibh.
                    </li>
                  </ul>

                  <img src="/images/as (2).png" className="w-100 mb-3" alt="" />

                  <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    pellentesque ut pellentesque varius amet mauris. Tempor,
                    risus, congue gravida nulla tincidunt nec diam. Tincidunt
                    magnis eu, vitae dictumst commodo dolor in. Aenean dictumst
                    risus posuere a at id fermentum nibh. Luctus nunc bibendum
                    duis egestas scelerisque.{" "}
                  </p>
                  <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                    Maecenas in pharetra hendrerit neque, tellus eu. Arcu
                    tempus, vel blandit adipiscing a sed cursus. Augue
                    vestibulum tempus lectus gravida condimentum mauris iaculis.
                    Sodales imperdiet id maecenas molestie id.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Blog blog={blog} title={"articles"} top={"latest blog"} />

        <Contact />

        <Footer type={""} />
      </div>
    </Fragment>
  )
}

export default DetailNews

/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react"
import Contact from "../components/Section/Contact"
import Footer from "../components/Other/Footer"
import Client from "@/components/Section/Client"
import Team from "@/components/Section/Team"

const DetailProject = () => {
  return (
    <Fragment>
      <div className="overflow-hidden" id="client">
        <section>
          <div className="container">
            <div className="mb-5 text-center">
              <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
                Our Customer
              </p>
              <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">
                Trusted Partners
              </h3>
            </div>

            {/* <Client /> */}
            <Client />
          </div>
        </section>

        <Team />

        <section className="pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-7 mb-4 mb-md-0">
                <h3 className="bold font__size--32 text__32-1024 text-uppercase mb-3">
                  about project
                </h3>

                <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                  Lorem ipsum dolor sit amet consectetur. Facilisis natoque
                  aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus
                  ac pretium nibh ipsum leo nibh. Eu fames morbi id magna
                  egestas commodo leo egestas. Sed sed nisl scelerisque semper.
                  Ante tempus nisi est molestie egestas blandit et. Enim quisque
                  aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed
                  malesuada luctus non facilisi eget pellentesque fermentum
                  pellentesque. Risus faucibus vitae libero phasellus leo.
                  Sapien nunc lacinia quam ut sit. Consectetur cras varius
                  posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac
                  convallis nec tincidunt facilisis dolor augue pellentesque.
                </p>
                <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                  Lorem ipsum dolor sit amet consectetur. Facilisis natoque
                  aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus
                  ac pretium nibh ipsum leo nibh. Eu fames morbi id magna
                  egestas commodo leo egestas. Sed sed nisl scelerisque semper.
                  Ante tempus nisi est molestie egestas blandit et. Enim quisque
                  aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed
                  malesuada luctus non facilisi eget pellentesque fermentum
                  pellentesque. Risus faucibus vitae libero phasellus leo.
                  Sapien nunc lacinia quam ut sit. Consectetur cras varius
                  posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac
                  convallis nec tincidunt facilisis dolor augue pellentesque.
                </p>
                <p className="normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3">
                  Lorem ipsum dolor sit amet consectetur. Facilisis natoque
                  aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus
                  ac pretium nibh ipsum leo nibh. Eu fames morbi id magna
                  egestas commodo leo egestas. Sed sed nisl scelerisque semper.
                  Ante tempus nisi est molestie egestas blandit et. Enim quisque
                  aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed
                  malesuada luctus non facilisi eget pellentesque fermentum
                  pellentesque. Risus faucibus vitae libero phasellus leo.
                  Sapien nunc lacinia quam ut sit. Consectetur cras varius
                  posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac
                  convallis nec tincidunt facilisis dolor augue pellentesque.
                </p>
              </div>
              <div className="col-md-5 col-lg-4 offset-lg-1">
                <h3 className="bold font__size--32 text__32-1024 text-uppercase mb-3">
                  download brochure
                </h3>

                <a
                  href="/assets/Company_Profile.pdf"
                  download
                  className="wrapper__list-document d-inline-block color__gray-1"
                >
                  <div className="d-flex align-items-center">
                    <img src="/images/pdf (1) 1.png" alt="" />
                    <div className="ml-2 semi-bold font__size--14 text__14-1024 text-uppercase">
                      download COMPANY PROFILE
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <Footer type={""} />
      </div>
    </Fragment>
  )
}

export default DetailProject

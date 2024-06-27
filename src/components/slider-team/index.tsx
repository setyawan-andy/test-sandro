/* eslint-disable @next/next/no-img-element */
import React from "react"
import { useRef } from "react"
import Slider from "react-slick"

const SliderConstruction = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          adaptiveHeight: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slider1 = useRef(null)
  return (
    <Slider
      ref={slider1}
      {...settings}
      className="wrapper__slider-construction"
    >
      <div className="hover-img">
        <img src="/images/team3.jpg" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team6.jpg" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team 2.jpg" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team1.jpg" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team4.jpg" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team5.jpg" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
    </Slider>
  )
}

export default SliderConstruction

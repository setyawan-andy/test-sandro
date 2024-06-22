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
        <img src="/images/rn (1).png" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/rn (3).png" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/rn (2).png" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/rn (1).png" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/rn (3).png" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Lakstoro <br />
            <br />
            <span style={{ fontSize: "12px" }}>Electrical Engineer</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/rn (2).png" className="images__construction" alt="" />
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

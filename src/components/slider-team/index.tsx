/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRef } from "react";
import Slider from "react-slick";

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
  };

  const slider1 = useRef(null);
  return (
    <Slider
      ref={slider1}
      {...settings}
      className="wrapper__slider-construction"
    >
      <div className="hover-img">
        <img src="/images/team3.JPG" className="images__construction" alt="" />
        <figcaption>
          <h6>
            RR Rina Triyanti
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>Mkt&Ops. Mgr.</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team6.JPG" className="images__construction" alt="" />
        <figcaption>
          <h6>
            William Falencius H.
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>QC Spv.</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team 2.JPG" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Rifqi Afisha
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>Marketing Coord.</span>
          </h6>
        </figcaption>
      </div>
      <div className="hover-img">
        <img src="/images/team1.JPG" className="images__construction" alt="" />
        <figcaption>
          <h6>
            Ullia Oktaviana
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>Admin Coord.</span>
          </h6>
        </figcaption>
      </div>
    </Slider>
  );
};

export default SliderConstruction;

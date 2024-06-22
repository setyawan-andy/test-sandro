import { carouselImages } from "@/constants/home"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Slider from "react-slick"

type Props = {
  //
}

const SliderCarousel = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const buttonSlider = useRef<Slider | null>(null)

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
    buttonSlider.current?.slickGoTo(index)
  }

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <Slider
        {...settings}
        className="carousel-container"
        ref={buttonSlider}
        beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
      >
        {carouselImages.map((item, i) => (
          <Image
            unoptimized
            priority
            key={i}
            src={item.src}
            alt=""
            width={100}
            height={100}
            objectPosition="center"
            className="custom-img-carousel"
          />
        ))}
      </Slider>
      <section className="dot-section absolute bottom-3">
        <ul className="dots">
          {Array.from({ length: carouselImages.length }, (_, index) => (
            <li
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default SliderCarousel

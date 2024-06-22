import React from "react"
import SliderConstruction from "../slider-team"

type Props = {}

const Team = (props: Props) => {
  return (
    <section className="overflow-hidden" id="team">
      <div className="text-center mb-5">
        <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
          our team
        </p>
        <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">
          {`We serve what you're deserved`}
        </h3>
      </div>
      <SliderConstruction />
    </section>
  )
}

export default Team

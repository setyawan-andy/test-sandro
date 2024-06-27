import React from "react"
import styled, { keyframes, css } from "styled-components"

type Props = {}

const Client = (props: Props) => {
  const row1 = [
    "/images/client-1.png",
    "/images/client-2.png",
    "/images/client-3.png",
    "/images/client-4.png",
    "/images/client-5.png",
    "/images/client-6.png",
  ]

  const row2 = [
    "/images/client-7.png",
    "/images/client-8.png",
    "/images/client-9.png",
    "/images/client-10.png",
    "/images/client-11.png",
    "/images/baker (2).png"
  ]

  return (
    <Wrapper>
      <Marquee>
        <MarqueeGroup>
          {row1.map((el, i) => (
            <ImageGroup key={i}>
              <Image src={el} alt="" />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el, i) => (
            <ImageGroup key={i}>
              <Image src={el} alt="" />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      <Marquee>
        <MarqueeGroup2>
          {row2.map((el, i) => (
            <ImageGroup key={i}>
              <Image src={el} alt="" />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {row2.map((el, i) => (
            <ImageGroup key={i}>
              <Image src={el} alt="" />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
      </Marquee>
    </Wrapper>
  )
}

export default Client

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`

const MarqueeGroup = styled.div`
  ${common}
`
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

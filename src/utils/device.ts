import { useState, useEffect } from "react"

interface Dimensions {
  width: number | undefined
  height: number | undefined
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function getWindowDimensions(): Dimensions {
      if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window
        return {
          width,
          height,
        }
      } else {
        return {
          width: undefined,
          height: undefined,
        }
      }
    }

    setWindowDimensions(getWindowDimensions())

    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

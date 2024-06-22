/* eslint-disable @next/next/no-page-custom-font */
import "bootstrap/dist/css/bootstrap.min.css"

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null
  }, [])
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

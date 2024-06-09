/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React, { Component, Fragment } from "react"
import { useEffect } from "react"
import { useState } from "react"

type Props = {
  //
}

const Navbar = (props: Props) => {
  const [toogleMenu, setToogleMenu] = useState(false)

  return (
    <Fragment>
      <div
        className={
          "wrapper__side-nav-mobile d-flex d-lg-none " +
          (toogleMenu ? "active" : "")
        }
      >
        <div className="d-flex flex-wrap w-100">
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Link
                href="/"
                className="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
              >
                BUILD<span className="color__orange">UP</span>
              </Link>
              <img
                src="./../images/Close.png"
                onClick={() => setToogleMenu(!toogleMenu)}
                className="pointer"
                alt=""
              />
            </div>
            <div className="menu">
              <Link
                href="/"
                className="medium font__size--14 text__14-1024 color__white"
              >
                Home
              </Link>
              <hr />
              <div className="position-relative">
                <div
                  className="wrapper__drodown-wrap medium font__size--14 text__14-1024 color__white pointer"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    pages
                    <svg
                      className="ml-2 arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70742 5.88334L4.7005 5.87711L4.69314 5.87142C4.46003 5.69119 4.12805 5.71226 3.91883 5.93027C3.69372 6.16484 3.69372 6.54105 3.91883 6.77561L7.08012 10.0697L7.08648 10.0764L7.0933 10.0825L7.13129 10.1167L7.13821 10.1229L7.14557 10.1286C7.37868 10.3088 7.71066 10.2877 7.91988 10.0697L11.0812 6.77561L11.0875 6.76903L11.0933 6.762L11.1261 6.72242L11.1319 6.71538L11.1372 6.70793C11.3037 6.47418 11.2865 6.14425 11.0812 5.93027L11.0748 5.92365L11.068 5.91751L11.03 5.88334L11.0231 5.87711L11.0157 5.87142C10.7826 5.69119 10.4506 5.71226 10.2414 5.93027C10.2414 5.93027 10.2414 5.93027 10.2414 5.93027L7.5 8.78672L4.75858 5.93027L4.75223 5.92365L4.74541 5.91751L4.70742 5.88334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="dropdown-menu wrapper__dropdown-menu-all medium font__size--14 text__14-1024"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link href="/about" className="dropdown-item">
                    About
                  </Link>
                  <Link href="/contact" className="dropdown-item">
                    Contact
                  </Link>
                  <Link href="/news/detail" className="dropdown-item">
                    Detail News
                  </Link>
                  <Link href="/service/detail" className="dropdown-item">
                    Detail Service
                  </Link>
                  <Link href="/project/detail" className="dropdown-item">
                    Detail Project
                  </Link>
                  <Link href="/terms" className="dropdown-item">
                    Terms
                  </Link>
                  <Link href="/privacy" className="dropdown-item">
                    Privacy
                  </Link>
                </div>
              </div>
              <hr />
              <Link
                href="/videos"
                className="medium font__size--14 text__14-1024 color__white"
              >
                Service
              </Link>
              <hr />
              <Link
                href="/contact"
                className="medium font__size--14 text__14-1024 color__white"
              >
                Project
              </Link>
              <hr />
              <Link
                href="/faq"
                className="medium font__size--14 text__14-1024 color__white"
              >
                News
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg__wrap-menu d-lg-none"
        onClick={() => setToogleMenu(!toogleMenu)}
      ></div>
      <nav
        className="navbar navbar-expand-lg bg__black-2 wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <Link
            href="/"
            className="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
          >
            BUILD<span className="color__orange">UP</span>
          </Link>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item position-relative">
                <div
                  className="nav-link wrapper__drodown-wrap semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover pointer"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    pages
                    <svg
                      className="ml-2 arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70742 5.88334L4.7005 5.87711L4.69314 5.87142C4.46003 5.69119 4.12805 5.71226 3.91883 5.93027C3.69372 6.16484 3.69372 6.54105 3.91883 6.77561L7.08012 10.0697L7.08648 10.0764L7.0933 10.0825L7.13129 10.1167L7.13821 10.1229L7.14557 10.1286C7.37868 10.3088 7.71066 10.2877 7.91988 10.0697L11.0812 6.77561L11.0875 6.76903L11.0933 6.762L11.1261 6.72242L11.1319 6.71538L11.1372 6.70793C11.3037 6.47418 11.2865 6.14425 11.0812 5.93027L11.0748 5.92365L11.068 5.91751L11.03 5.88334L11.0231 5.87711L11.0157 5.87142C10.7826 5.69119 10.4506 5.71226 10.2414 5.93027C10.2414 5.93027 10.2414 5.93027 10.2414 5.93027L7.5 8.78672L4.75858 5.93027L4.75223 5.92365L4.74541 5.91751L4.70742 5.88334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="dropdown-menu wrapper__dropdown-menu-all"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link href="/about" className="dropdown-item">
                    About
                  </Link>
                  <Link href="/contact" className="dropdown-item">
                    Contact
                  </Link>
                  <Link href="/news/detail" className="dropdown-item">
                    Detail News
                  </Link>
                  <Link href="/service/detail" className="dropdown-item">
                    Detail Service
                  </Link>
                  <Link href="/project/detail" className="dropdown-item">
                    Detail Project
                  </Link>
                  <Link href="/terms" className="dropdown-item">
                    Terms
                  </Link>
                  <Link href="/privacy" className="dropdown-item">
                    Privacy
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  href="/service"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                >
                  service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/project"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                >
                  project
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/news"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setToogleMenu(!toogleMenu)}
            className="nav__button d-lg-none position-relative ml-auto flex-shrink-0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a
            href="#!"
            className="d-none d-lg-block semi-bold font__size--14 btn btn__outlined--white color__white no__opacity h__black rounded-0 shadow ml-auto text-uppercase"
          >
            get a quote
          </a>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar

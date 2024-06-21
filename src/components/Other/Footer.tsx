import React from "react";
import Link from "next/link";
import Image from "next/image";

type FooterProps = {
  type: string;
};

const Footer = (props: FooterProps) => {
  return (
    <section className={"pb-4 " + (props.type !== "contact" ? "mt__10" : "")}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="semi-bold font__size--24 text__24-1024 color__black">
              MANDIRI<span className="color__orange">TRANSUTAMA</span>
            </h3>
            <p className="normal font__size--16 text__16-1024 roboto color__gray-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium
            </p>
          </div>
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              links
            </h5>
            <ul className="wrapper__list-footer">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover">
                    home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/service" legacyBehavior>
                  <a className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover">
                    service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/project" legacyBehavior>
                  <a className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover">
                    project
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/news" legacyBehavior>
                  <a className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover">
                    news
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover">
                    contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              follow our social account
            </h5>
            <div className="d-flex align-items-center">
              <Link href="#!" legacyBehavior>
                <a>
                  <Image
                    src="/images/FB.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="#!" legacyBehavior>
                <a className="mx-3">
                  <Image
                    src="/images/IG.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="#!" legacyBehavior>
                <a>
                  <Image
                    src="/images/WA.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div className="mt-5">
              <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
                CONTACT US
              </h5>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="/images/Message.png"
                  alt="Message"
                  width={24}
                  height={24}
                />
                <span className="semi-bold font__size--14 text__14-1024 text-uppercase ml-2">
                  commercial-support@mandiritrans.com
                </span>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src="/images/Call.png"
                  alt="Call"
                  width={24}
                  height={24}
                />
                <span className="semi-bold font__size--14 text__14-1024 text-uppercase ml-2">
                  +62 2188956606
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              subscribe
            </h5>
            <input
              type="text"
              className="form-control wrapper__field roboto normal font__size--16 text__16-1024 mb-3"
              placeholder="Enter your email"
              name=""
              id=""
            />
            <button className="semi-bold font__size--14 text__14-1024 color__white text-uppercase btn btn__orange shadow rounded-0">
              send
            </button>
          </div>
        </div>
        <div className="text-center normal roboto font__size--16 text__16-1024 color__gray-1 mt-5">
          Designed By IT@2024
        </div>
      </div>
    </section>
  );
};

export default Footer;

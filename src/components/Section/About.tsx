/* eslint-disable @next/next/no-img-element */

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4 my-md-auto">
            <img src="/images/articles13.jpeg" className="w-100" alt="" />
          </div>
          <div className="col-md-7 col-lg-6 my-auto pl-lg-5">
            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
              about us
            </p>
            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">
              History
            </h3>
            <p className="roboto semi-bold font__size--16 text__16-1024">
              19+ Years of working experience with global industries
            </p>
            <p className="roboto normal font__size--16 text__16-1024 color__gray-1">
              PT Mandiri Trans Utama (MTU) is a transportation and logistics
              company based in Indonesia. Established in 2005, the company
              offers a range of services including truck rentals, trucking
              services, and logistics solutions. They have expanded their
              operations to serve the oil and coal mining sectors.
            </p>
            <p className="roboto normal font__size--16 text__16-1024 color__gray-1">
              MTU is committed to quality and safety, adhering to ISO 9001:2000
              and OHSAS 18001:1999 standards, ensuring high service quality and
              safety management​ (PT Mandiri Trans Utama)​.
            </p>
            {/* <Link
              href="/contact"
              className="semi-bold rounded-0 font__size--14 text__14-1024 btn btn__orange shadow color__white text-uppercase"
            >
              Have A Project
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
              Economic development during early 90’s had given a golden
              opportunity for both international and national corporation to
              expand their business in Indonesia. Mandiri Group them self aware
              of the moment and decided to established a company PT. Mandiri
              Traktor Utama (MTU) in May 18, 1995 in order to provide the market
              with truck rental and trucking services.
            </p>
            <p className="roboto normal font__size--16 text__16-1024 color__gray-1">
              And in October 15, 2005 Mandiri Traktor Utama transformed into
              Mandiri Trans Utama and expand the services to oil company and
              coal mining operation
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

import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className="hero container--fluid">
      <div className="hero__inner container">
        <div className="inner__description">
          <h1 className="inner__description--heading">
            Make every sale with pleasure.
          </h1>
        </div>

        <div className="inner__description">
          <p className="inner__description--body">
            We work with manufacturing brands and have created a web application
            for you to get more sales and easily communicate with your buyers.
          </p>

          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section className="features container-fluid section">
      <div className="container">
        <div className="features__title-wrap text-center">
          <h2 className="features__heading">Features</h2>
        </div>

        <div className="features__cards-wrap">
          <FeaturesCard
            icon="icon"
            heading="Better Buyer Experience"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />

          <FeaturesCard
            icon="icon"
            heading="Easy Communication"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />

          <FeaturesCard
            icon="icon"
            heading="Carry Your Customers Along"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />

          <FeaturesCard
            icon="icon"
            heading="Get Paid Directly"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

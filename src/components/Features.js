import FeaturesCard from "./FeaturesCard";

// Importing icons
import icons8_buying from "../img/icons/icons8_buying.png";
import icons8_chat_bubble from "../img/icons/icons8_chat_bubble.png";
import icons8_expensive from "../img/icons/icons8_expensive.png";
import icons8_learn_more from "../img/icons/icons8_learn_more.png";

const Features = () => {
  return (
    <section className="features container-fluid section">
      <div className="container">
        <div className="features__title-wrap text-center">
          <h2 className="features__heading">Features</h2>
          <p className="features__sub-heading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sequi
            eius velit ipsam fugit officia dolor cupiditate quod quam mollitia?
          </p>
        </div>

        <div className="features__cards-wrap">
          <FeaturesCard
            icon={icons8_buying}
            heading="Better Buyer Experience"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />

          <FeaturesCard
            icon={icons8_chat_bubble}
            heading="Easy Communication"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />

          <FeaturesCard
            icon={icons8_learn_more}
            heading="Carry Your Customers Along"
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              repellendus obcaecati consequuntur tempore, vero quis ad saepe a!
              Inventore, nulla."
          />

          <FeaturesCard
            icon={icons8_expensive}
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

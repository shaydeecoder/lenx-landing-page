import SectionTitle from "./SectionTitle";
import CallToAction from "./CallToAction";

const Footer = () => {
  return (
    <footer className="footer container-fluid section">
      <div className="container">
        <div className="footer__cta-wrap">
          <div className="footer__title">
            <SectionTitle heading="Get An Exclusive Invite When We Lunch" />
          </div>

          <div className="footer__cta">
            <CallToAction ctaMauto={true} />
          </div>

          <div className="footer__copyright text-center">
            <p>&copy; eComm 2021 designed & developed by Shaydee Coder</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

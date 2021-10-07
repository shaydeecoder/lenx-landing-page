import { Fragment } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./styles/App.scss";

const App = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Footer />
    </Fragment>
  );
};

export default App;

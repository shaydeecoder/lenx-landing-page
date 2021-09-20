import { Fragment } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import "./styles/App.scss";

const App = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
};

export default App;

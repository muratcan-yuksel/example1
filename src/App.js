import React, { useEffect } from "react";
import Background from "./components/Background";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./components/Icons";
// import "./style/generalStyle.css";
import Stories from "./components/Stories";
import FormComp from "./components/FormComp";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import backgroundImage from "./assets/background.jpg";

const App = () => {
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <NavbarComp />
      <Background />
      <Icons />
      <div data-aos="zoom-out-up">
        <Stories />
      </div>
      <FormComp />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Background from "./components/Background";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./components/Icons";
// import "./style/generalStyle.css";
import Stories from "./components/Stories";
import FormComp from "./components/FormComp";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <Background />
      <Icons />
      <Stories />
      <FormComp />
    </div>
  );
};

export default App;

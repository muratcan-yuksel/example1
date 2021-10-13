import React from "react";
import Background from "./components/Background";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./components/Icons";
// import "./style/generalStyle.css";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <Background />
      <Icons />
    </div>
  );
};

export default App;

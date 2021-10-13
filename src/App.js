import React from "react";
import Background from "./components/Background";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "vivid-icons/dist/vivid-icons.min.js";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <Background />
      <i data-vi="doc"></i>
      <i data-vi="doc" data-vi-size="96"></i>
    </div>
  );
};

export default App;

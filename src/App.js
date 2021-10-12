import React from "react";
import Background from "./components/Background";
import NavbarComp from "./components/NavbarComp";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <Background />
    </div>
  );
};

export default App;

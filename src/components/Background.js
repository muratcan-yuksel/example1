import React from "react";
import image from "../assets/background.jpg";
import "../style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Background = () => {
  return (
    <div>
      <div id="imgContainer">
        <img id="backgroundImg" src={image} alt="" />
        <div id="backPosition">
          <h1 className="backgroundTitle">TechLab</h1>
          <div className="text">Lorem ipsum dolor sit amet consectetur</div>
          <div className="text">fugit error aliquid?</div>
          <Button className="danger" variant="danger">
            Get in Touch
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Background;

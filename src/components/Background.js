import React from "react";
import image from "../assets/background.jpg";
import "../style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Background = () => {
  return (
    <div>
      <div id="imgContainer">
        <img id="back" src={image} alt="" />
        <div id="backPosition">
          <div className="text">lolooooo</div>
          <Button variant="danger">Danger</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Background;

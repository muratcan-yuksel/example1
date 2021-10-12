import React from "react";
import image from "../assets/background.jpg";
import "../style/style.css";

const Background = () => {
  return (
    <div>
      <div id="imgContainer">
        <img id="back" src={image} alt="" />
        <div className="text">lolooooo</div>
      </div>
    </div>
  );
};

export default Background;

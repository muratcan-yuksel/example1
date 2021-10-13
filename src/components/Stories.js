import React from "react";
import mainImg from "../assets/main.jpg";
import "../style/stories.css";
import Button from "react-bootstrap/Button";

const Stories = () => {
  return (
    <div>
      <div className="mainPart">
        <div className="imgContainer">
          <img id="mainImage" src={mainImg}></img>
        </div>
        <div className="textContainer">
          <h3>Lorem Ipsum </h3>
          <p id="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            adipisci aut voluptatibus eaque tempore! Delectus, nemo ut odit
            veniam nesciunt veritatis minus modi sed ducimus enim? Iste expedita
            at illo!
          </p>
          <Button variant="outline-danger">Danger</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Stories;

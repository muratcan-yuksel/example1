import React from "react";
import mainImg from "../assets/main.jpg";
import "../style/stories.css";
import Button from "react-bootstrap/Button";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";

const Stories = () => {
  return (
    <div id="container">
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
          <Button variant="outline-danger">View Project</Button>{" "}
        </div>
      </div>
      <div id="mainStoryContainer">
        <div className="storyContainer">
          <img className="stories" src={one} alt="" />
        </div>
        <div className="storyContainer">
          <img className="stories" src={two} alt="" />
        </div>{" "}
        <div className="storyContainer">
          <img className="stories" src={three} alt="" />
        </div>{" "}
        <div className="storyContainer">
          <img className="stories" src={four} alt="" />
        </div>
        <div className="storyContainer">
          <img className="stories" src={five} alt="" />
        </div>{" "}
        <div className="storyContainer">
          <img className="stories" src={six} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stories;

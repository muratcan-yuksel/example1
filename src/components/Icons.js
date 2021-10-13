import React from "react";
import "vivid-icons/dist/vivid-icons.min.js";
import "../style/iconStyle.css";

const Icons = () => {
  return (
    <div>
      <div className="iconContainer">
        <div className="iconItem">
          <i data-vi="hourglass" data-vi-size="96"></i>
          <h3>Save Time</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            voluptate modi fugiat cumque corrupti sapiente deleniti, laboriosam
            incidunt enim tenetur vero similique fuga, maiores nisi nostrum quod
            rem, laudantium nam.
          </p>
        </div>
        <div className="iconItem">
          <i data-vi="share" data-vi-size="96"></i>
          <h3>Connect</h3>
          <p className="para">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            voluptate modi fugiat cumque corrupti sapiente deleniti, laboriosam
            incidunt enim tenetur vero similique fuga, maiores nisi nostrum quod
            rem, laudantium nam.{" "}
          </p>
        </div>{" "}
        <div className="iconItem">
          <i data-vi="rocket" data-vi-size="96"></i>
          <h3>Scale</h3>
          <p className="para">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            voluptate modi fugiat cumque corrupti sapiente deleniti, laboriosam
            incidunt enim tenetur vero similique fuga, maiores nisi nostrum quod
            rem, laudantium nam.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Icons;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/footerStyle.css";

const Footer = () => {
  return (
    <div id="footerContainer">
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>TechLab</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              {/* <div className="col item social">
                <a href="#">
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-instagram"></i>
                </a>
              </div> */}
            </div>
            <p className="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

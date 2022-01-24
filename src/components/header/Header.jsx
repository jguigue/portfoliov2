import React from "react";
import { Link } from "react-router-dom";

const logo = "img/logo/dark.png";

const HeaderSixLight = () => {
  return (
    <div className="topbar_inner">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="brand" />
        </Link>
      </div>
      <div className="right">
        <div className="julien_button fixedVersion">
          <a href="img/cv/cv.pdf" download>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSixLight;

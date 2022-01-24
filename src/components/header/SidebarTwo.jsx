import Scrollspy from "react-scrollspy";
import React, { useState } from "react";

// sidebar content
const sidebarContent = [
  {
    icon: "icon-squares",
    itemName: "Accueil",
    itemRoute: "#home",
    activeClass: "current",
  },
  {
    icon: "icon-archive",
    itemName: "À propos",
    itemRoute: "#about",
    activeClass: "",
  },
  {
    icon: "icon-contacs",
    itemName: "CV",
    itemRoute: "#resume",
    activeClass: "",
  },
  {
    icon: "icon-briefcase",
    itemName: "Portfolio",
    itemRoute: "#portfolio",
    activeClass: "",
  },
  {
    icon: "icon-letter",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

const SidebarTwo = () => {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <button className="navbar-toggler" type="button" onClick={handleClick}>
        <div className={click ? "hamburger active" : "hamburger"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {/* <!-- SIDEBAR --> */}
      <div className={click ? "julien_sidebar_3 active" : "julien_sidebar_3"}>
        <div className={navbar ? "inner animate" : "inner"}>
          <div className="image">
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/13.jpg"
                })`,
              }}
            ></div>
          </div>
          {/* End image */}

          <div className="menu scrollable">
            <Scrollspy
              className="anchor_nav"
              items={["home", "about", "resume", "portfolio", "contact"]}
              currentClassName="current"
              offset={0}
            >
              {sidebarContent.map((val, i) => (
                <li className={val.activeClass} key={i}>
                  <a
                    className="julien_full_link"
                    href={val.itemRoute}
                    onClick={handleClick}
                  >
                    <div className={`svg ${val.icon}`}></div>
                    <span>{val.itemName}</span>
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
        </div>
      </div>
      {/* <!-- /SIDEBAR --> */}
    </>
  );
};

export default SidebarTwo;

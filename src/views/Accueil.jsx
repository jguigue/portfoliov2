import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroFour from "../components/hero/HeroThree";
import PersonalInfoFour from "../components/about/PersonalInfoFour";
import Resume from "../components/about/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";
import Address from "../components/Address";
import OnePageMenu from "../components/header/OnePageMenu";
import SidebarTwo from "../components/header/SidebarTwo";

const Accueil = () => {
  return (
    <div className="julien_extra_demo_2 ">
      <span className="top_shape"></span>
      <span className="bottom_shape"></span>

      {/* <!-- BACKGROUND --> */}
      <div
        className="julien_fixed_background movingEffect"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/4.jpg"})`,
        }}
      ></div>
      {/* <!-- /BACKGROUND --> */}

      <div className="julien_topbar julien_topbar smaller onepage">
        <Header />
        {/* End header five */}
      </div>
      <div className="julien_extra_demo">
        {" "}
        <SidebarTwo />
      </div>

      <div className="julien_mainpart_new_2">
        {/* <!-- MENU --> */}
        <div className="main_menu">
          <OnePageMenu />
        </div>
        {/* <!-- /MENU --> */}

        {/* <!-- HERO --> */}
        <HeroFour />
        {/* <!-- /HERO --> */}

        {/* <!-- ABOUT --> */}
        <div className="julien_section_new" id="about">
          <div className="julien_about">
            <PersonalInfoFour />
          </div>
        </div>
        {/* <!-- /ABOUT --> */}

        {/* <!-- RESUME --> */}
        <div className="julien_section_new" id="resume">
          <div className="julien_resume">
            <Resume />
          </div>
        </div>
        {/* <!-- /RESUME --> */}

        {/* <!-- PORTFOLIO --> */}
        <div className="julien_section_new" id="portfolio">
          <div className="julien_portfolio">
            <Portfolio />
          </div>
        </div>
        {/* <!-- /PORTFOLIO --> */}

        {/* <!-- CONTACT --> */}
        <div className="julien_section_new" id="contact">
          <div className="julien_contact">
            <div className="julien_main_title">
              <span>Me contacter</span>
              <h3>
                Je suis disponible à la recherche d'un stage et d'une alternance
                !
              </h3>
            </div>
            <div className="wrapper">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Address />
              </div>
              {/* End .left */}
              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="fields">
                  <Contact />
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .julien_contact */}
        </div>
        {/* <!-- /CONTACT --> */}

        {/* <!-- COPYRIGHT --> */}
        <div className="julien_copyright julien_copyright smaller onepage empty">
          <div className="container">
            <Footer />
          </div>
        </div>
        {/* <!-- /COPYRIGHT --> */}
      </div>
    </div>
  );
};

export default Accueil;

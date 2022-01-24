import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalInfo from "../../about/PersonalInfo";
import Resume from "../../about/Resume";
import Portfolio from "../../portfolio/Portfolio";
import Service from "../../service/Service";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Address from "../../Address";
import Contact from "../../Contact";
import Footer from "../../footer/Footer";

const tabMenuList = [
  { icon: "icon-archive", title: "About Me" },
  { icon: "icon-contacs", title: "Resume" },
  { icon: "icon-briefcase", title: "Portfolio" },
  { icon: "icon-gear", title: "Service" },
  { icon: "icon-message", title: "Testimonial" },
  { icon: "icon-writing", title: "Blog" },
  { icon: "icon-letter", title: "Contact" },
];

const MainContentTabs = () => {
  return (
    <Tabs className="julien_hero ">
      <div className="main_menu">
        <TabList>
          {tabMenuList.map((menu, i) => (
            <Tab key={i}>
              <div className={`svg ${menu.icon}`}></div>
              <span>{menu.title}</span>
            </Tab>
          ))}
        </TabList>
      </div>

      <div className="julien_mainpart">
        <TabPanel>
          <div className="julien_main_section">
            <PersonalInfo />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="julien_main_section">
            <Resume />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="julien_main_section">
            <Portfolio />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="julien_main_section">
            <Service />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="julien_main_section">
            {/* <!-- TESTIMONIALS --> */}

            <div className="julien_testimonials">
              <div className="julien_main_title">
                <span>Testimonials</span>
                <h3>What people say about me</h3>
              </div>
              <div className="testimonials_list">
                <Testimonial />
              </div>
            </div>

            {/* <!-- /TESTIMONIALS --> */}
          </div>
        </TabPanel>
        {/* End testimonial Content */}

        <TabPanel>
          <div className="julien_main_section">
            {/* <!-- NEWS --> */}

            <div className="julien_news">
              <div className="julien_main_title">
                <span>Blog</span>
                <h3>Latest tips, tricks &amp; Updates</h3>
              </div>
              {/* End .julien_main_title */}
              <Blog />
            </div>

            {/* <!-- /NEWS --> */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="julien_main_section">
            {/* <!-- CONTACT --> */}
            <div className="julien_contact">
              <div className="julien_main_title">
                <span>Contact Me</span>
                <h3>Contact me to get your work done</h3>
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

            {/* <!-- /CONTACT --> */}
          </div>
        </TabPanel>
      </div>

      {/* <!-- COPYRIGHT --> */}
      <div className="julien_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <!-- /COPYRIGHT --> */}
    </Tabs>
  );
};

export default MainContentTabs;

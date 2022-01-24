import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalSkills from "./PersonalSkills";
import PersonalSkills2 from "./PersonalSkills2";

const Resume = () => {
  return (
    // <!-- RESUME -->
    <>
      <div className="julien_resume" data-aos="fade-right">
        <div className="julien_main_title">
          <span>Compétences</span>
          <h3>Mes compétences et mon expérience</h3>
        </div>
        {/* End  .julien_resume_title */}
        <div className="resume_inner">
          <div className="left">
            <div className="info_list">
              <div className="julien_resume_title">
                <h3>Expériences Professionnelles</h3>
                <span className="shape"></span>
              </div>
              {/* End  .julien_resume_title */}
              <Experience />
            </div>
            <div className="skills_list">
              <div className="julien_resume_title">
                <h3>Compétences</h3>
                <span className="shape"></span>
              </div>
              {/* End  .julien_resume_title */}
              <PersonalSkills />
            </div>
          </div>
          {/* End left */}
          <div className="right">
            <div className="info_list">
              <div className="julien_resume_title">
                <h3>Parcours Scolaire</h3>
                <span className="shape"></span>
              </div>
              {/* End  .julien_resume_title */}
              <Education />
            </div>
          </div>
        </div>
      </div>
    </>
    // <!-- /RESUME -->
  );
};

export default Resume;

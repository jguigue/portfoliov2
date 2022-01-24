import React from "react";

const skillContent = [
  {
    label: "Communication Digitale",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "HTML / CSS3 / WP",
    percentagePosition: "10%",
    percentageNo: "90%",
  },
  {
    label: "Figma / Adobe XD",
    percentagePosition: "30%",
    percentageNo: "70%",
  },
  {
    label: "Adobe Illustrator",
    percentagePosition: "30%",
    percentageNo: "70%",
  },
  {
    label: "Adobe Photoshop",
    percentagePosition: "30%",
    percentageNo: "70%",
  },
  {
    label: "SEO / SMO",
    percentagePosition: "40%",
    percentageNo: "60%",
  },
  {
    label: "Adobe Indesign",
    percentagePosition: "50%",
    percentageNo: "50%",
  },
  {
    label: "Adobe Premiere",
    percentagePosition: "50%",
    percentageNo: "50%",
  },
];

const PersonalSkills = () => {
  return (
    <div className="personal">
      <div className="dodo_progress">
        {skillContent.map((val, i) => (
          <div className="progress_inner" key={i}>
            <span>
              <span className="label">{val.label}</span>
              <span
                className="number"
                style={{ right: val.percentagePosition }}
              >
                {val.percentageNo}
              </span>
            </span>
            <div className="background">
              <div className="bar">
                <div
                  className="bar_in"
                  style={{ width: val.percentageNo }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;

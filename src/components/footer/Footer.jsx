import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="left">
          <p>
            Fait avec ❤️ &copy; {new Date().getFullYear()} par{" "}
            <strong>Guigue Julien</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
const Lia = () => {
  return (
    <div className="description_wrap ">
      <div className="news_informations">
        <div className="details">
          <span className="category">Graphisme</span>
          <h3 className="title">Logo LIA pour Airbus</h3>
        </div>
        {/* End details */}
      </div>
      <div>
        <img src="/img/portfolio/api_lia/lia.webp" alt="Logo lia version 1" />
        <img src="/img/portfolio/api_lia/lia2.webp" alt="Logo lia version 2" />
        <img src="/img/portfolio/api_lia/lia3.webp" alt="Logo lia version 3" />
      </div>
    </div>
  );
};

export default Lia;

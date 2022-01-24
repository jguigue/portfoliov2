import React from "react";
const MagicBird = () => {
  return (
    <div className="description_wrap ">
      <div className="news_informations">
        <div className="details">
          <span className="category">Graphisme</span>
          <h3 className="title">
            Logo "Magic Bird" application fictive d'ornithologie
          </h3>
        </div>
        {/* End details */}
      </div>
      <div>
        <img
          src="/img/portfolio/magicbird/magicbird_1.webp"
          alt="Logo magic bird version 1"
        />
        <img
          src="/img/portfolio/magicbird/magicbird_2.webp"
          alt="Logo magic bird version 2"
        />
      </div>
    </div>
  );
};

export default MagicBird;

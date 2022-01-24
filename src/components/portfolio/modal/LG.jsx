import React from "react";
import ReactPlayer from "react-player";

const LG = () => {
  return (
    <div className="description_wrap ">
      <div className="news_informations">
        <div className="details">
          <span className="category">Vidéo</span>
          <h3 className="title">Vidéo fictive publicitaire pour LG</h3>
        </div>
        {/* End details */}
        <ReactPlayer url="https://vimeo.com/396301908" width="100%" light />
      </div>
    </div>
  );
};

export default LG;

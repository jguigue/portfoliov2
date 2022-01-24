import React from "react";
import ReactPlayer from "react-player";

const Teaser = () => {
  return (
    <div className="description_wrap ">
      <div className="news_informations">
        <div className="details">
          <span className="category">Vidéo</span>
          <h3 className="title">Vidéo teaser pour une application Airbus</h3>
        </div>
        {/* End details */}
        <ReactPlayer url="https://vimeo.com/666480863" width="100%" light />
      </div>
    </div>
  );
};

export default Teaser;

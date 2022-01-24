import React from "react";

const HeroThree = () => {
  return (
    <div>
      {/* <!-- HERO --> */}
      <div className="julien_hero_third" id="home">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/hero/hero.jpg"
              })`,
            }}
          ></div>
          <div className="overlay"></div>
        </div>
        <div className="content">
          <span className="hello">Bonjour! Je suis</span>
          <h3 className="name">Guigue Julien</h3>
          <p className="text">
            Étudiant Ingémedia en M1 Information communication spécialité
            Communication, Innovation et Management de Projets Numériques
          </p>
        </div>
        <div className="julien_down_arrow">
          <div className="down-icon white top_120 section10">
            <a className="anchor" href="#about">
              <span></span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- /HERO --> */}
    </div>
  );
};

export default HeroThree;

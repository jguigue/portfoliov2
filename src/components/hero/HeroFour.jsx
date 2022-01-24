import React from "react";

const HeroFour = () => {
  return (
    <div>
      {/* <!-- HERO --> */}
      <div className="julien_hero_third julien_hero_fifth" id="home">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/hero/10.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End background */}

        <div className="content">
          <div className="avatar">
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/11.jpg"
                })`,
              }}
            ></div>
          </div>
          <span className="hello">Bonjour! Je suis</span>
          <h3 className="name">Guigue Julien</h3>
          <p className="text">
            Étudiant Ingémedia en M1 Information communication spécialité
            Communication Innovation et Management de Projets Numériques
          </p>
          <img className="sign" src="img/hero/sign.png" alt="hero" />
        </div>
        {/* End .content */}
      </div>
      {/* <!-- /HERO --> */}
    </div>
  );
};

export default HeroFour;

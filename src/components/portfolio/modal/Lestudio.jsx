import React from "react";
const Lestudio = () => {
  return (
    <div className="description_wrap ">
      <div className="news_informations">
        <div className="details">
          <span className="category">Webesign</span>
          <h3 className="title">Site vitrine pour un département d'Airbus</h3>
          <span className="category">Airbus - 2019</span>
        </div>
        <div className="text">
          <p>
            Ce site est mon premier projet de webdesign réalisé dans le cadre de
            mon alternance DUT MMI/Airbus. Ici l'intérêt est de présenter une
            entité au sein d'un département et de mettre en valeur les
            différentes composantes. Les seules contraintes ici ont été le temps
            (5 jours pour un premier projet) et un contenu uniquement en
            anglais. Les contraintes du projet ont été de faire un site vitrine
            sans framework Javascript, sans CMS. De faire tout 'from scratch'
            sans rien. Le site est donc construit en HTML5 et CSS3 avec du
            Javascript pour la navbar et un peu de PHP pour la création d'un
            espace professeur. Il a également été optimisé référencement SEO.
          </p>
        </div>
      </div>
      <img
        className="image_screensite"
        src="/img/portfolio/lestudio/lestudio_1.webp"
        alt="Présentation du site Lestudio"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/lestudio/lestudio_2.webp"
        alt="Présentation du site Lestudio"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/lestudio/lestudio_3.webp"
        alt="Présentation du site Lestudio"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/lestudio/lestudio_4.webp"
        alt="Présentation du site Lestudio"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/lestudio/lestudio_5.webp"
        alt="Présentation du site Lestudio"
      />
    </div>
  );
};

export default Lestudio;

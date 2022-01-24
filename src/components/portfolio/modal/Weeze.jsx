import React from "react";
const Weeze = () => {
  return (
    <div className="description_wrap ">
      <div className="news_informations">
        <div className="details">
          <span className="category">Webesign</span>
          <h3 className="title">Site vitrine pour une application</h3>
          <span className="category">Airbus - 2019</span>
        </div>
        <div className="text">
          <p>
            Ce site vitrine est en fait constitué de deux sites. Ici il s'agit
            de la présentation d'une application s'adressant à une niche, le
            personnel d'Airbus et de sa variante pour le département Ressources
            Humaines. J'ai fait le choix de réunir les deux pages car les pages
            sont similaires. La contrainte ici est d'avoir un site en deux
            langue anglais et français et de présenter une application au stade
            de maquette. Ici aucun template, seulement le framework bootstrap et
            la réadaptation d'un snippet Jquery. Par soucis de confidentialité
            je ne divulguerai pas le lien de la page.
          </p>
        </div>
      </div>
      <img
        className="image_screensite"
        src="/img/portfolio/bluepower/bluepower_1.webp"
        alt="Présentation du site Weeze 1"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/bluepower/bluepower_2.webp"
        alt="Présentation du site Weeze 2"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/bluepower/bluepower_3.webp"
        alt="Présentation du site Weeze 3"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/bluepower/bluepower_4.webp"
        alt="Présentation du site Weeze 4"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/bluepower/bluepower_5.webp"
        alt="Présentation du site Weeze 5"
      />
      <img
        className="image_screensite"
        src="/img/portfolio/bluepower/bluepower_6.webp"
        alt="Présentation du site Weeze 6"
      />
    </div>
  );
};

export default Weeze;

import React from "react";

const personalDetails = [
  { title: "Nom", info: "Guigue Julien" },
  { title: "Date", info: "1er Juin 1997" },
  { title: "Email", info: "contact@guiguejulien.com" },
  { title: "Téléphone", info: "+336 77 51 05 37" },
  { title: "Addresse", info: "Toulon" },
  { title: "Nationalité", info: "Française" },
];

const aboutContentInfo = {
  meta: "À propos de moi",
  title: "Étudiant rêvant de management numérique",
  subTitle:
    "Un ancien couteau suisse prêt à investir ses compétences dans le management",
  description: `Je m’appelle Julien Guigue, étudiant de 23 ans en première année de Master Ingémédia, Information Communiction parcours Création, Innovation et Management de projets à l'Université de Toulon
  J'ai fait mes classes à Airbus Helicopters en tant que Community Manager, et responsable des communautés digitales du site mais aussi à My Groom Service une société Seynoise spécialisée dans les sites pour hôtels et restaurants. J'envisage de devenir Chef de Projet Digital ou bien Traffic manager. Ce qui m'importe c'est de garder un contact fort avec le développement du digital dans notre société et dans les entreprises.`,
};

const PersonalInfoFour = () => {
  return (
    <div className="julien_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/11.jpg"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="julien_main_title">
          <span>{aboutContentInfo.meta}</span>
          <h3>{aboutContentInfo.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutContentInfo.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutContentInfo.description}</p>
        </div>
        <div className="julien_button">
          <a href="img/cv/cv.pdf" download>
            Télécharger mon CV
          </a>
        </div>
      </div>
      {/* End .right */}
    </div>
  );
};

export default PersonalInfoFour;

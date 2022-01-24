import React from "react";

const experienceContent = [
  {
    position: "Assistant Marketing",
    compnayName: "My Groom Service",
    year: "   2020 - 2021",
    details: `Intégration de site sur CMS ReactJS, Création d'un dashboard Laravel 8, Redesign d’un annuaire web, diverses tâches de création et modification de logos et vidéos, Création de maquettes sous Adobe XD.`,
  },
  {
    position: "Community Manager",
    compnayName: "Airbus Helicopters",
    year: "2018 - 2020",
    details: ` Réalisation de supports audiovisuels, création de sites vitrines en HTML5, gestion de communautés, réalisation de teasers.`,
  },
  {
    position: "Technicien Prototype Aéronautique",
    compnayName: "Airbus Helicopters",
    year: "2016 - 2018",
    details: ` Coordination chantiers hélicoptères, suivi et maintien de données chantiers,analyse de manquants chantiers.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.position}</h3>
                <span>{val.compnayName}</span>
              </div>
              <div className="year">
                <span>{val.year}</span>
              </div>
            </div>
            <div className="text">
              <p>{val.details}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

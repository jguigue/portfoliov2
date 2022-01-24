import React from "react";

const educationContent = [
  {
    degree:
      "M1 Ingémédia - IC parcours Communication, Innovation et Management de Projets Numériques",
    institute: "UFR Ingémédia - Université de Toulon",
    year: "2021 - 2022",
    details: `Ce master vise à acquérir : fondamentaux du management et de la conduite de projet, processus de management collaboratif, veille technologique, acquisition de connaissances et de compétences essentielles à l’élaboration de stratégies communicationnelles créatives dans des environnements numériques.`,
  },
  {
    degree: "LP E-commerce et Marketing Numérique en Alternance",
    institute: "IUT TC - Université de Toulon",
    year: "2020 - 2021",
    details: ` La LP ECMN forme aux techniques de commercialisation utilisant les NTIC et à l'adaptation des technologies internes à l’entreprise.`,
  },
  {
    degree: "DUT Métiers du Multimédia et de l'Internet (MMI) en Alternance",
    institute: "IUT MMI - Université de Toulon",
    year: "2018 - 2020",
    details: ` Le DUT MMI englobe la conception et le développement de sites Web, la création graphique et la gestion et l'animation de projets numériques pour la communication des entreprises et organisations.`,
  },
  {
    degree: "BTS Aéronautique en Alternance",
    institute: " UIMM Provence",
    year: "2016 - 2018",
    details: `Le BTS Aéronautique est un diplôme qui forme sur les activités de production, d’exploitation et de maintenance dans le domaine aéronautique.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.degree}</h3>
                <span>{val.institute}</span>
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

export default Education;

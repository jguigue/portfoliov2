import React from "react";

const addressContent = [
  {
    icon: "icon-smartphone",
    title: "Appelez-moi",
    info: "+33 6 77 51 05 37",
    href: "Tel: +33 6 77 51 05 37",
  },
  {
    icon: "icon-letter",
    title: "Envoyez moi un mail",
    info: "contact@guiguejulien.com",
    href: "mailto:ib-themes21@gmail.com",
  },
  {
    icon: "icon-placeholder",
    title: "Ville",
    info: "Toulon",
  },
];

const Address = () => {
  return (
    <ul>
      {addressContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <span className="icon">
              <span className={`svg ${val.icon}`}></span>
            </span>
            <div className="short">
              <h3>{val.title}</h3>
              <span>
                <a href={val.href}>{val.info}</a>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;

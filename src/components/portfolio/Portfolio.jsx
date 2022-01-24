import React, { useState } from "react";
import Modal from "react-modal";
import useMasonry from "../../hooks/use-masonry";
import Filters from "./Filters";
import VarFootball from "./modal/VarFootball";
import Bluepower from "./modal/Bluepower";
import LogoYourbox from "./modal/LogoYourbox";
import Yourbox from "./modal/Yourbox";
import Weeze from "./modal/Weeze";
import Lia from "./modal/Lia";
import LG from "./modal/LG";
import MuseeToulon from "./modal/MuseeToulon";
import SAM from "./modal/SAM";
import Teaser from "./modal/Teaser";
import Lestudio from "./modal/Lestudio";
import MagicBird from "./modal/MagicBird";
import ProjectF from "../../data/categories.json";

Modal.setAppElement("#root");

const Portfolio = () => {
  // for popup video
  const [isOpen, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);

  function toggleVarFootball() {
    setIsOpen1(!isOpen);
  }
  function toggleLia() {
    setIsOpen2(!isOpen2);
  }
  function toggleBluepower() {
    setIsOpen3(!isOpen3);
  }
  function toggleLogoYourbox() {
    setIsOpen4(!isOpen4);
  }
  function toggleLogoMagicBird() {
    setIsOpen5(!isOpen5);
  }
  function toggleYourbox() {
    setIsOpen6(!isOpen6);
  }
  function toggleWeeze() {
    setIsOpen7(!isOpen7);
  }
  function toggleLestudio() {
    setIsOpen8(!isOpen8);
  }
  function toggleLG() {
    setIsOpen9(!isOpen9);
  }
  function toggleTeaser() {
    setIsOpen10(!isOpen10);
  }
  function toggleSAM() {
    setIsOpen11(!isOpen11);
  }
  function toggleMuseeToulon() {
    setIsOpen12(!isOpen12);
  }

  const { categories } = useMasonry(
    ProjectF,
    ".project-list",
    ".masonry-grid",
    ".messonry-button",
    ".messonry-button li"
  );
  return (
    <div className="julien_main_section">
      <div className="julien_portfolio">
        <div className="julien_main_title">
          <span>Portfolio</span>
          <h3>Mes réalisations</h3>
        </div>
        <div
          className="messonry-button"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Filters categories={categories} />
        </div>

        <div className="portfolio_list">
          <ul className=" gallery_zoom  project-list">
            <li
              data-aos="fade-right"
              data-aos-delay="100"
              className="masonry-grid graphisme"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleVarFootball}>
                  <img
                    src="/img/portfolio/varfootball/varfootball_miniature.webp"
                    alt="Graphisme"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Graphisme</span>
                  <h3>VarFootball</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid webdesign graphisme">
              <div className="list_inner">
                <div className="image" onClick={toggleMuseeToulon}>
                  <img
                    src="/img/portfolio/musees_toulon/musee_toulon_miniature.webp"
                    alt="Miniature site musée fictif"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Webdesign et graphisme</span>
                  <h3>Musées fictif de Toulon</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid graphisme">
              <div className="list_inner">
                <div className="image" onClick={toggleLia}>
                  <img src="/img/portfolio/api_lia/lia2.webp" alt="Graphisme" />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Graphisme</span>
                  <h3>API Lia</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid vido">
              <div className="list_inner">
                <div className="image" onClick={toggleLG}>
                  <img
                    src="/img/portfolio/lg/lg_miniature.webp"
                    alt="Graphisme"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Vidéo</span>
                  <h3>Vidéo fictive publicitaire pour LG</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid vido">
              <div className="list_inner">
                <div className="image" onClick={toggleTeaser}>
                  <img
                    src="/img/portfolio/teaser/teaser_miniature.webp"
                    alt="Graphisme"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Vidéo</span>
                  <h3>Teaser pour une application Airbus</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid graphisme">
              <div className="list_inner">
                <div className="image" onClick={toggleLogoYourbox}>
                  <img
                    src="/img/portfolio/charte_yourbox/yourboxv1.webp"
                    alt="Graphisme"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Graphisme</span>
                  <h3>Logo site e-commerce</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid webdesign">
              <div className="list_inner">
                <div className="image" onClick={toggleYourbox}>
                  <img
                    src="/img/portfolio/site_yourbox/siteyourbox_miniature.webp"
                    alt="Logo magic bird"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Webdesign</span>
                  <h3>Site e-commerce fictif de vente de box cadeau</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid graphisme">
              <div className="list_inner">
                <div className="image" onClick={toggleLogoMagicBird}>
                  <img
                    src="/img/portfolio/magicbird/magicbird_miniature.webp"
                    alt="Logo magic bird"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Graphisme</span>
                  <h3>Logo d'application fictive d'ornithologie</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid webdesign">
              <div className="list_inner">
                <div className="image" onClick={toggleLestudio}>
                  <img
                    src="/img/portfolio/lestudio/lestudio_miniature.webp"
                    alt="Miniature de site lestudio pour Airbus"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Webdesign</span>
                  <h3>Site de présentation d'un département d'Airbus</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid webdesign">
              <div className="list_inner">
                <div className="image" onClick={toggleBluepower}>
                  <img
                    src="/img/portfolio/bluepower/bluepower_miniature.webp"
                    alt="Miniature de site bluepower"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Webdesign</span>
                  <h3>Site de présentation d'application pour Airbus</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid webdesign">
              <div className="list_inner">
                <div className="image" onClick={toggleWeeze}>
                  <img
                    src="/img/portfolio/weeze/weeze_miniature.webp"
                    alt="Miniature de site Weeze"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Webdesign</span>
                  <h3>Site de présentation d'application pour Airbus</h3>
                </div>
              </div>
            </li>
            <li className="masonry-grid vido">
              <div className="list_inner">
                <div className="image">
                  <img
                    src="/img/portfolio/SAM/SAM_miniature.webp"
                    alt="Capture de vidéo de court métrage muet"
                  />
                </div>
                <div className="overlay"></div>
                <span className="icon-text svg"></span>
                <div className="details">
                  <span>Vidéo</span>
                  <h3>Court-métrage muet</h3>
                </div>
              </div>
            </li>
            {/* END DETAILS */}
          </ul>
          {/* END DETAILS GALLERY */}
          {/* END Details Gallery */}
        </div>
      </div>

      {/* Modal Var football */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleVarFootball}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleVarFootball}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <VarFootball />
          </div>
        </div>
      </Modal>
      {/* Modal Lia*/}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleLia}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleLia}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <Lia />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleBluepower}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleBluepower}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <Bluepower />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleLogoYourbox}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleLogoYourbox}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <LogoYourbox />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleLogoMagicBird}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleLogoMagicBird}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <MagicBird />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleYourbox}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleYourbox}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <Yourbox />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen7}
        onRequestClose={toggleWeeze}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleWeeze}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <Weeze />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen8}
        onRequestClose={toggleLestudio}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleLestudio}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <Lestudio />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen9}
        onRequestClose={toggleLG}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleLG}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <LG />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen10}
        onRequestClose={toggleTeaser}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleTeaser}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <Teaser />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen11}
        onRequestClose={toggleSAM}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleSAM}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <SAM />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen12}
        onRequestClose={toggleMuseeToulon}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="julien_modalbox">
          <button className="close-modal" onClick={toggleMuseeToulon}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <MuseeToulon />
          </div>
        </div>
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </div>
  );
};

export default Portfolio;

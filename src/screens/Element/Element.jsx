import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Element = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return (
    <div className="element">
      <div className="frame-wrapper">
        <div className="frame">
          <header className="header">
            <div className="text-wrapper">Pelota Libre TV</div>
            <img className="solar-football-bold" alt="Solar football bold" src="/img/solar-football-bold-duotone.svg" />
          </header>
          <div className="hero-page">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-7.png" />
            <div className="div-wrapper">
              <p className="div" onClick={routeChange}>Take this button to return main page</p>
            </div>
          </div>
          <footer className="footer">
            <div className="text-wrapper-2">Social</div>
            <div className="frame-2">
              <div className="frame-3">
                <img className="img" alt="Ri twitter fill" src="/img/ri-twitter-fill.svg" />
                <div className="text-wrapper-3">Twitter</div>
              </div>
              <div className="frame-3">
                <img className="img" alt="Ri instagram fill" src="/img/ri-instagram-fill.svg" />
                <div className="text-wrapper-3">Instagram</div>
              </div>
              <div className="frame-4">
                <img className="vector" alt="Vector" src="/img/vector.svg" />
                <div className="text-wrapper-3">YouTube</div>
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-4">Pelota Libre</div>
              <div className="text-wrapper-5">DMCA</div>
            </div>
            <p className="p">Pelota Libre TV 2023 © Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

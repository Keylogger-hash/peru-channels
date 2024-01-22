import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export const Element = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/peru-channels/`; 
    navigate(path);
  }
  return (
    <div className="element">
      <div className="frame-wrapper">
        <div className="frame">
          <Header></Header>
          <div className="hero-page">
            <img className="rectangle" alt="Rectangle" src="./public/rectangle-7.png" />
            <div className="div-wrapper">
              <p className="div" onClick={routeChange}>Take this button to return main page</p>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

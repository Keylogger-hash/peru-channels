import React from "react";
import { ButtonChanel } from "../../components/ButtonChanel";
import { Frame } from "../../components/Frame";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./style.css";


export const Footer = () => {
    return (
        <footer className="footer">
        <div className="text-wrapper-11">Social</div>
        <div className="frame-9">
          <div className="frame-10">
            <img className="img-2" alt="Ri twitter fill" src="./assets/ri-twitter-fill.svg" />
            <div className="text-wrapper-12">Twitter</div>
          </div>
          <div className="frame-10">
            <img className="img-2" alt="Ri instagram fill" src="./assets/ri-instagram-fill.svg" />
            <div className="text-wrapper-12">Instagram</div>
          </div>
          <div className="frame-11">
            <img className="vector" alt="Vector" src="./assets/vector.svg" />
            <div className="text-wrapper-12">YouTube</div>
          </div>
        </div>
        <div className="frame-12">
          <div className="text-wrapper-13">Pelota Libre</div>
          <div className="text-wrapper-14">DMCA</div>
        </div>
        <p className="text-wrapper-15">Pelota Libre TV 2023 © All rights reserved.</p>
      </footer>    
    )
}
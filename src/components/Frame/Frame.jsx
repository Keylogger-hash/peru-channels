/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Frame = ({ name,start_time,className }) => {
  const start_tournament_time = new Date(start_time).toLocaleDateString('ru-RU')

  return (
    <div className={`frame ${className}`}>
      <div className="text-wrapper">{start_tournament_time}</div>
      <img className="ri-football-fill" alt="Ri football fill" src="./public/ri-football-fill.svg" />
      <p className="eliminatorias"> {name}</p>
    </div>
  );
};

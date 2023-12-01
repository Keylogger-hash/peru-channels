/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
export const ButtonChanel = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/detail`; 
    navigate(path);
  }
  return (
    <div className="button-chanel" onClick={routeChange}>
      <div className="overlap-group">
        <div className="div" >See Chanel</div>
      </div>
      <img className="image" alt="Image" src="/img/image-1.png" />
      <p className="p">Watch DirecTV Sports online live and direct</p>
      <div className="text-wrapper-2">D Sports</div>
      <img className="line" alt="Line" src="/img/line-1.svg" />
    </div>
  );
};

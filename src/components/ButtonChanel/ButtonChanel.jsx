/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
export const ButtonChanel = ({channel}) => {
  let navigate = useNavigate(); 
  const id = channel.id
  const routeChange = () =>{ 
    let path = `/peru-channels/detail/${id}`; 
    navigate(path);
  }
  return (
    <div className="button-chanel" onClick={routeChange}>
      <div className="title">{channel.channel_name}</div>
      <img className="image" alt="Image" src={channel.logo}/>
      <div className="overlap-group">
        See channel
      </div>
      {/* <div className="title">{channel.channel_name}</div>
      <img className="image" alt="Image" src={channel.logo}/>
      <p className="description">{channel.channel_name}</p>
      <div className="overlap-group">
        See Chanel
      </div> */}
    </div>
  );
};

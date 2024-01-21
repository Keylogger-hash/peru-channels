import React from "react";
import "./style.css"
import {NavLink, useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export const Header = ()=>{
    const reloadPage = ()=>{
        window.location.reload()
      }
      let navigate = useNavigate(); 
      const routeChange = () =>{ 
        let path = `/peru-channels/`; 
        navigate(path);
      }
    return (
        <header className="header">
        <div className="header-title" onClick={routeChange}>Pelota Libre TV</div>
        <img className="solar-football-bold" alt="Solar football bold" src="./public/solar-football-bold-duotone.svg" />
      </header>
    )
}
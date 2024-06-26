import React, { useEffect } from "react";
import {useState} from "react";
import "./style.css"
import {NavLink, useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthComponent } from "../AuthModal/AuthModal";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {isAuth,getMyProfile,handleLogOut} from '../AuthModal/Utils.jsx'

export const Header = ()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState("")
    useEffect(()=>{
      getMyProfile(setUsername)
    })
    const reloadPage = ()=>{
        window.location.reload()
      }
    let navigate = useNavigate(); 
    const routeChangeMain = () =>{ 
      let path = `/peru-channels/`; 
      navigate(path);
    }
    const routeChangePricing = () =>{ 
      let path = `/peru-channels/pricing`; 
      navigate(path);
    }
    const routeChangeAbout = () =>{ 
      let path = `/peru-channels/about`; 
      navigate(path);
    }
    const routeChangeContacts = () =>{ 
      let path = `/peru-channels/contacts`; 
      navigate(path);
      }
    const ProfileName = ()=>{
      return(
        <div style={{"display":"flex","marginTop":"6px"}}>
          <p>{username}</p>
          /
          <p style={{"color":"blue","userSelect":"none","cursor":"pointer"}} onClick={handleLogOut}>Выйти</p>
        </div>
      )
    }
    return (
        <header className="header">
          <div className="header-container">
            <div style={{"display":"flex","flexDirection":"row"}}>
            <div className="header-title" onClick={routeChangeMain}>
              Pelota Libre TV
            </div>
            <Nav.Item>
            <Nav.Link className="header-title" variant="light" onClick={routeChangePricing}>
              Pricing
            </Nav.Link >
            </Nav.Item>
            <Nav.Link className="header-title" onClick={routeChangeContacts}> 
              Contacts
            </Nav.Link>
            <Nav.Link className="header-title" onClick={routeChangeAbout}>
              About us
            </Nav.Link>
            </div>
            <div style={{"marginLeft":"auto","display":"flex","columnGap":"20px","marginTop":"14px","marginRight":"19px"}}>
            {
              isAuth()?
                <ProfileName></ProfileName>
                :
                <Button size="small" onClick={handleShow}>
                Login
              </Button>
            }
            <AuthComponent show={show} handleClose={handleClose}></AuthComponent>
            <img className="solar-football-bold" alt="Solar football bold" src="./public/solar-football-bold-duotone.svg" />
            </div>
        </div>
      </header>
    )
}
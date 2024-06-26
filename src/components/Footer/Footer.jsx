import React from "react";
import {useState,useEffect} from "react";
import {FeedbackModal} from "../../components/FeedbackModal/FeedbackModal";
import { ButtonChanel } from "../../components/ButtonChanel";
import { Frame } from "../../components/Frame";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "./style.css";


export const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <footer className="footer">
        <div className="text-wrapper-11">Social</div>
        <div className="frame-9">
          <div className="frame-10">
            <img className="img-2" alt="Ri twitter fill" src="./public/ri-twitter-fill.svg" />
            <div className="text-wrapper-12">Twitter</div>
          </div>
          <div className="frame-10">
            <img className="img-2" alt="Ri instagram fill" src="./public/ri-instagram-fill.svg" />
            <div className="text-wrapper-12">Instagram</div>
          </div>
          <div className="frame-11">
            <img className="vector" alt="Vector" src="./public/vector.svg" />
            <div className="text-wrapper-12">YouTube</div>
          </div>
        </div>
        <div className="frame-12">
          <div className="text-wrapper-13">Pelota Libre</div>
          <div className="text-wrapper-14">DMCA</div>
            <Button onClick={handleShow} variant="primary">
              Feedback form
            </Button>
            <FeedbackModal show={show} handleClose={handleClose}/>

          <div className="text-wrapper-16">

          </div>
        </div>
        <p className="text-wrapper-15">Pelota Libre TV 2023 © All rights reserved.</p>
      </footer>    
    )
}
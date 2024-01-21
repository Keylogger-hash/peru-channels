import React from "react";
import { Component } from "../Component";
import "./style.css";
import { Footer } from "../../components/Footer/Footer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Header } from "../../components/Header/Header";
export const FilmPage = () => {
  const reloadPage = ()=>{
    window.location.reload()
  }
  return (
    <div className="film-page">
      <div className="frame-wrapper">
        <div className="frame">
          <Header></Header>
          <p className="canal-d-sports">
            <span className="span">
              Canal D Sports Online LIVE and direct
            <br />
            </span>
            <span className="text-wrapper-2">Pelota Libre TV - D Sports</span>
          </p>
          <div className="video-player">
            <div className="video-player-2" >
              <VideoPlayer></VideoPlayer>
            </div>
            <div className="options">
              <div className="frame-2">
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
              </div>
              <div className="frame-2">
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
              </div>
            </div>
            <div className="reboot-button">
              <div className="text-wrapper-3" onClick={reloadPage}>Reload page</div>
            </div>
          </div>
          <div className="questions-answers">
            <div className="element">
              <p className="p">What is D Sports channel live?</p>
              <p className="ver-canal-d-sports">
                <span className="text-wrapper-4">
                Watch D Sports channel online live and direct. D Sports is a Latin American television channel
                   to watch live all the matches of the Spanish Football League, Copa del Rey, Spanish Super Cup,
                   Conmebol Sudamericana matches, among other sporting events.                  <br />
                  <br />
                  In addition to this channel you can also watch its sister channels online, which are:{" "}                </span>
                <a href="https://pelotalibre.com/en-vivo/directv-sports-2/" rel="noopener noreferrer" target="_blank">
                  <span >D Sports 2</span>
                </a>
                <span className="text-wrapper-4"> y </span>
                <a
                  href="https://pelotalibre.com/en-vivo/directv-sports-plus/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span >D Sports Plus</span>
                </a>
                <span>.</span>
              </p>
            </div>
            <div className="element">
              <p className="text-wrapper-6">How can I watch the D Sports channel online live and direct?</p>
              <p className="para-poder-ver-todos">
                <span >
                To be able to watch all the live matches that D Sports broadcasts online, you must go to
                   page home{" "}
                </span>
                <a href="https://pelotalibre.com/" rel="noopener noreferrer" target="_blank">
                  <span >Pelota Libre TV</span>
                </a>
                <span >
                  {" "}
                  at the time the match is being played and then click on the logo{" "}
                </span>
                <a href="https://pelotalibre.com/en-vivo/directv-sports/" rel="noopener noreferrer" target="_blank">
                  <span >D Sports</span>
                </a>
                <span className="text-wrapper-4">
                  {" "}
                  or in &#34;View Channel&#34; to access live and direct D Sports programming. Then to
                   To enter the page you must click on the Play button in the player under the title
                   &#34;Canal D Sports Online LIVE and direct&#34;. You can also enter the official page of
                   D Sports at directvsports.com to watch the channel live from your computer, cell phone or from the
                   television via Chromecast.                </span>
              </p>
            </div>
            <div className="element">
              <p className="text-wrapper-7">D Sports programming live and direct 24 hours a day</p>
              <p className="text-wrapper-8">
              The complete programming 24 hours a day of D Sports can be seen live and direct from this
                 page to be able to watch programs such as Fútbol Total, DirecTV Connection, Football is spoken like this, among others
                 exclusive programs on this channel.              </p>
            </div>
            <div className="element">
              <p className="text-wrapper-9">How to watch D Sports matches live without paying?</p>
              <p className="para-ver-todos-los">
                <span className="text-wrapper-4">To see all the games that happen </span>
                <a href="https://pelotalibre.com/en-vivo/directv-sports/" rel="noopener noreferrer" target="_blank">
                  <span>D Sports</span>
                </a>
                <span className="text-wrapper-4">
                  {" "}
                  of the Spanish League, Premier League, Champions League and Europa League you can enter this channel and
                   Watch it for free live and direct for everyone.                  <br />
                </span>
              </p>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

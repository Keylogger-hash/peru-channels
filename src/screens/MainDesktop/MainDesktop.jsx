import React from "react";
import { ButtonChanel } from "../../components/ButtonChanel";
import { Frame } from "../../components/Frame";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import { Header } from "../../components/Header/Header";


export const MainDesktop = () => {
  return (
    <div className="main-desktop">
      <div className="frame-wrapper">
        <div className="frame-2">
          <Header></Header>
          <div className="hero-page">
            <div className="text-wrapper-4">Pelota Libre TV</div>
            <p className="text-wrapper-5">
            Watch Pelota Libre TV online live and direct. Free stream channels to watch football matches
               Argentine, Chilean, Colombian, Peruvian, Ecuadorian, Copa Libertadores, Copa Sudamericana and Champions
               League among others.
            </p>
          </div>
          <div className="video-player" >
          <VideoPlayer></VideoPlayer>
            </div>

          <div className="slider">
            <div className="group">
              <div className="image-wrapper">
                <img className="img" alt="Image" src="./public/frame-30.png" />
              </div>
              <div className="frame-3" />
              <div className="frame-4" />
              <div className="frame-5" />
            </div>
          </div>
          <div className="list-of-games">
            <div className="buttons-games">
              <Frame className="frame-1" />
              <Frame className="frame-1" />
              <Frame className="frame-1" />
              <Frame className="frame-1" />
              <Frame className="frame-1" />
              <Frame className="frame-1" />
            </div>
            {/* <div className="title-of-games">
              <p className="text-wrapper-6">Sports agenda for Friday, Decamber 1, 2023</p>
            </div> */}
          </div>
          <div className="second-page">
            <p className="text-wrapper-7">Watch live online football channels</p>
            <div className="chanels">
              <div className="frame-6">
                <ButtonChanel />
                <ButtonChanel />
                <ButtonChanel />
              </div>
              <div className="frame-6">
                <ButtonChanel />
                <ButtonChanel />
                <ButtonChanel />
              </div>
              <div className="frame-6">
                <ButtonChanel />
                <ButtonChanel />
                <ButtonChanel />
              </div>
            </div>
          </div>
          <div className="third-page">
            <div className="text-wrapper-8">Common questions</div>
            <div className="questions-and">
              <div className="frame-8">
                <p className="qu-es-pelota-libre"> What is Pelota Libre TV?</p>
                <p className="div-2">
                  <a href="https://pelotalibre.com/" rel="noopener noreferrer" target="_blank">
                    <span className="span">Pelota Libre TV</span>
                  </a>
                  <span className="span">
                    {" "}
                    It has all the free live channels to watch Argentine, Chilean, Colombian and soccer.
                     Peruvian online, in addition to the Copa Sudamericana, Copa Libertadores, Boca Juniors matches and
                     River Plate, Argentine National Team and much more.                  </span>
                </p>
              </div>
              <div className="frame-8">
                <p className="text-wrapper-9">
                How to watch Pelota Libre TV live from your computer/PC or cell phone?                </p>
                <p className="div-2">
                  <span className="span">To be able to see </span>
                  <a href="https://pelotalibre.com/" rel="noopener noreferrer" target="_blank">
                    <span className="span">Pelota Libre TV</span>
                  </a>
                  <span className="span">
                    {" "}
                    From your computer or cell phone you just have to go to pelotalibre.com from Android or iPhone iOS and
                     Choose the channel you want to watch live.                  </span>
                </p>
              </div>
              <div className="frame-8">
                <p className="text-wrapper-9">How to watch a match on Pelota Libre TV live and direct?</p>
                <p className="div-2">
                  <span className="span">Para ver </span>
                  <a href="https://pelotalibre.com/" rel="noopener noreferrer" target="_blank">
                    <span className="span">Pelota Libre TV</span>
                  </a>
                  <span className="span">
                    {" "}
                    online live and direct you must enter this page and then select the soccer match in
                     live that you want to see that appear in the daily agenda or simply enter the channel that broadcasts the
                     match at match time.
                  </span>
                </p>
              </div>
              <div className="frame-8">
                <p className="text-wrapper-9">What soccer games does Fútbol Libre broadcast?</p>
                <p className="div-2">
                In Fútbol Libre you can see all the Argentine soccer matches that include those of Boca Juniors
                   and River Plate for the Argentine, Chilean, Colombian and Peruvian championship, Copa Libertadores and Copa
                   South American.                </p>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

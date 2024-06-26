import {React} from "react";
import { useEffect, useState } from "react";
import { ButtonChanel } from "../../components/ButtonChanel";
import { Frame } from "../../components/Frame";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import 'hls-video-element';
import { Header } from "../../components/Header/Header";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { Carousel, Col, Form } from "react-bootstrap";
import { useLocalObservable } from "mobx-react-lite";
import { CheckboxDropdown } from "../../components/CheckboxDropdown/CheckboxDropdown";


export const MainDesktop = () => {

  const [nextUrl,setNextUrl] = useState("")
  const [channelsList, setChannelsList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [playlistList, setPlaylistList] = useState([])
  const [query, setQuery] = useState("")
  const [liveUrl, setLiveUrl] = useState("")
  const [nextSearchUrl,setNextSearchUrl] = useState("")
  const [curPage, setCurPage] = useState(0);
  const [loading,setLoading] = useState(true)
  const [field, setField] = useState([]);
  let queryParams = {"search":query}
  const URL = 'http://localhost:8000/api/v1/channels/'
  const CATEGORY_URL  = 'http://localhost:8000/api/v1/category/'
  const PLAYLIST_URL = 'http://localhost:8000/api/v1/playlist/'
  const LIVE_URL = 'http://localhost:8000/api/v1/live/'
  
  useEffect(() => {
    const url = LIVE_URL
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLiveUrl(data["live"])
      });
  }, []);
  
  useEffect(() => {
    const url = PLAYLIST_URL
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlaylistList(data["results"].map((item)=>item["checked"]=false))
      });
  }, []);

  useEffect(() => {
    const url = CATEGORY_URL
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryList(data["results"].map((item)=>{item["checked"]=false;return item}))
      });
  }, []);

  useEffect(() => {
    let url = curPage===0?URL:nextUrl
    if (query){
      queryParams["search"] = query
      url=curPage===0?`http://localhost:8000/api/v1/channels/?search=${query}`:nextSearchUrl
    } else{
      url = url
    }
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(categoryList)
        if (query){
          if (data["next"]){
            setNextSearchUrl(data["next"])
          } else{
            setNextSearchUrl(null)
            setLoading(false)
          }
          setChannelsList([...data["results"]])
        }else{
          if (data["next"]){
            setNextUrl(data["next"])
          } else{
            setNextUrl(null)
            setLoading(false)
          }
          setChannelsList([...channelsList,...data["results"]]);
        }
      });
  }, [curPage,query]);

  const loadMore = ()=>{
    setCurPage((prev)=>prev+1)
  }

  const createChannelsElement=()=>{
    return channelsList.map((channel,key)=>
      <ButtonChanel key={key} channel={channel}></ButtonChanel>
    ) 
  }
  const state = useLocalObservable(()=>{
    categoryList: [{}];
    playlistList: [{}];
  })
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
            <VideoPlayer streams={[liveUrl]}></VideoPlayer>
          </div>
          {/* <Carousel >
            <Carousel.Item interval={1000}>
              <img className="img" alt="Image" src="https://ufc-video.s3.amazonaws.com/image/205/030580_205_BoutAnn_EACM_1024x512_ENG.jpg" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="img" alt="Image" src="https://pp.userapi.com/c845522/v845522458/bd397/oTnZS9-cmXI.jpg" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="img" alt="Image" src="https://ufc-video.s3.amazonaws.com/image/205/030580_205_BoutAnn_EACM_1024x512_ENG.jpg" />
            </Carousel.Item>
          </Carousel> */}
          <div className="list-of-games">
          <p className="text-wrapper-7">Hot matches today</p>
          <div className="iframe-games">
          <iframe src="https://www.scorebat.com/embed/livescore/" width="805" height="418" allowFullScreen allow='autoplay; fullscreen' style={{"border":"1px solid","borderColor":"black","width":"100%","height":"418px","overflow":"hidden","display":"block"}} className="_scorebatEmbeddedPlayer_"></iframe>
          </div>
          </div>
          <script src="iframe.js"></script>
          <div className="second-page">
            <p className="text-wrapper-7">Watch live online football channels</p>
            <div
              style={{"display":"flex","flexDirection":"row",marginTop:"40px",marginBottom:"21px","columnGap":"20px"}}
            >
              <input placeholder="Enter channel name"  onChange={event => setQuery(event.target.value)} />
              <CheckboxDropdown name={"Category"} variant={"success"}  items={categoryList}/>
              <CheckboxDropdown name={"Playlist"} variant={"success"} items={playlistList}/>
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"40px"}}>
              <div className="chanels">
                {createChannelsElement()}
              </div>
              {loading?<Button variant="success" className="load-button" onClick={loadMore}>Load more</Button>:<p></p>}
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

import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import {
  MediaController,
  MediaLoadingIndicator,
  MediaControlBar,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaVolumeRange,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaPlaybackRateButton,
  MediaFullscreenButton
} from "media-chrome/react"

const Video = (props) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};

export default function VideoPlayer({streams}) {
  let sources = []
  if (streams.length>0){
    sources = streams.map((stream)=>{
      return {
        src: stream,
        type: "application/vnd.apple.mpegurl"
      }
    })
  } else{
    sources =  []
  }
  const play = {
    fill: true,
    fluid: true,
    controls: true,
    preload: "metadata",
    muted: true,
    autoplay: true,
    sources: sources
  };
  return (
    <div className="App">
      
      {streams.length > 0?
      <MediaController>
        <hls-video
          src={streams[0]}
          slot="media"
          crossorigin
          autoplay
          muted
        ></hls-video>
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaSeekBackwardButton></MediaSeekBackwardButton>
          <MediaSeekForwardButton ></MediaSeekForwardButton>
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange></MediaVolumeRange>
          <MediaTimeRange></MediaTimeRange>
          <MediaTimeDisplay showduration remaining></MediaTimeDisplay>
          <MediaPlaybackRateButton></MediaPlaybackRateButton>
          <MediaFullscreenButton></MediaFullscreenButton>
        </MediaControlBar>
      </MediaController>
      :<img width={800} src={"https://www.stellarinfo.com/blog/wp-content/uploads/2018/05/Media-file-error-in-online-video.png"}></img>}
    </div>
  );
}
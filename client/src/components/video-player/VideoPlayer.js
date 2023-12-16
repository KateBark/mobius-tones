import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VideoPlayer.scss";

const url = "http://localhost:8080";

function VideoPlayer() {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  // console.log("helloooooo")

  useEffect(() => {
    // console.log("videoId: ", videoId)
    console.log(url.channel)
    // const fetchVideoData = () => {
      axios.get(`${url}/${videoId}`)
      .then(response => {
        console.log(response.data);
        setVideo(response.data);
      })
      .catch(error => {
        console.error("Error getting video data:", error);
      });
    // };
    // fetchVideoData();
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>
  }

  const opts = {
    height: 315,
    width: 560
  };

  return (
    <div className="video-player">
      <h2 className="video-player__title">{video.title}</h2>
      <p className="video-player__artist">{video.artist}</p>
      <YouTube className="video-player__size" videoId={video.url.split("https://www.youtube.com/watch?v=")[1].split("&")[0]}
       opts={opts} 
       />
      {/* <YouTube videoId={url.channel} /> */}

    </div>
  )
}

export default VideoPlayer;
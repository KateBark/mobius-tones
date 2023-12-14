import Video from "react-youtube";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:8080";

function VideoPlayer() {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    console.log("videoId: ", videoId)
    // const fetchVideoData = () => {
      axios.get(`${url}/videos/${videoId}`)
      .then(response => {
        console.log(response.data)
        setVideo(response);
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

  return (
    <div className="video-player">
      <h2>{video.title}</h2>
      <p>{video.artist}</p>
      <Video videoId={video.youtubeVideoId} />
    </div>
  )
}

export default VideoPlayer;
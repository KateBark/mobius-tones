import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import "./VideoPlayer.scss";
import BackIcon from "../../assets/arrow_back-24px.svg"

const url = "http://localhost:8080";

function VideoPlayer() {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    axios.get(`${url}/${videoId}`)
      .then(response => {
        setVideo(response.data);
      })
      .catch(error => {
        console.error("Error getting video data:", error);
      });
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>
  }

  return (
    <div className="video-player__section">


      <div className="video-player__button-container">
        <NavLink
          to={`/`}
          className="video-player__back-button"
        >
          <img src={BackIcon} alt="return to previous page" className="video-player__button-img" />
        </NavLink>
      </div>
      <div className="video-player__styles">
        <div className="video-player">
          <YouTube
            className="video-player__size"
            videoId={video.url.split("https://www.youtube.com/watch?v=")[1].split("&")[0]}
          />
          <h3 className="video-player__title">{video.title}</h3>
          <p className="video-player__artist">{video.artist}</p>
        </div>
        <div className="video-player__lyrics-container">
          <h6 className="video-player__lyrics-title">Lyrics:</h6>
          {/* hard-coded lyrics for demo purposes. will include lyrics in database and pass in */}
          <p className="video-player__lyrics">
            No it's aimed to know on the day<br></br>
            We go right on to say the phrase<br></br>
            Howlite on to go write it on<br></br>
            This blazing way to sigh the praise<br></br><br></br>

            None before than I want it more<br></br>
            With no time counting on delays<br></br>
            Bring it round with no standing down<br></br>
            And so like charging forth the maze<br></br><br></br>

            Form creates and forces displace<br></br>
            And no sense bringing it to bear<br></br>
            Rueful cry and beg to deny<br></br>
            This precept calling forth to care<br></br><br></br>

            Inching dark to brandish the mark<br></br>
            That borders only on today<br></br>
            Daring glance or blindsided stance<br></br>
            And no hope wishing it away<br></br>

          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer;
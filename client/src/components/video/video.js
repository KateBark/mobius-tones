import "./video.scss";
import { Link } from "react-router-dom";

function VideoComponent(props) {

  return (
    <div className="video">
      {/* <Link to={`http://localhost:3000/${props.videoId}`}> */}
        {/* // remove above line and comment-in below line when db operational */}
        <Link to={`/${props.videoId}`}>
        <video
          controls
          className="video__video"
          poster={props.poster}
          src={props.url}
          type="video/mp4"
        >
        </video>
        <p className="video__title">{props.title}</p>
        <p className="video__artist">{props.artist}</p>
      </Link>
    </div>
  );
}

export default VideoComponent;
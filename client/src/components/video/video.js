import "./video.scss";
import { Link } from "react-router-dom";

function VideoComponent(props) {
  // console.log(props.url)
  // console.log(props.poster)
  return (
    <li className="video">
      {/* <img src="https://img.youtube.com/vi/oqOghpWHYio&list=OLAK5uy_nb8rNOWorj0XISXKSLgZDxXWMMrJr64M8/0.jpg"></img> */}
      {/* {props.id} */}
      {/* <Link to={`/mytones/${props.videoId}`}> */}
      <Link to={`/videos/${props.videoId}`}>
        <video controls
          className="video__video"
          poster={props.poster}
          src={props.url}
          type="video/mp4"
          frameborder="O"
          allowFullScreen>
        </video>
        <p className="video__title">{props.title}</p>
        <p className="video__artist">{props.artist}</p>
      </Link>
    </li>
  );
}

export default VideoComponent;
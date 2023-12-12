import "./video.scss";
import { Link } from "react-router-dom";

function Video(props) {
  console.log(props.url)
  console.log(props.poster)
  return (
    <li className="video">
      {/* <img src="https://img.youtube.com/vi/oqOghpWHYio&list=OLAK5uy_nb8rNOWorj0XISXKSLgZDxXWMMrJr64M8/0.jpg"></img> */}
      {/* {props.id} */}
      <Link to={`/videos/${props.videoId}`}>
        <video className="video__video" poster={props.poster} >
          <source src={`url=${props.url}`} type="video/mp4"></source>
        </video>
        <p className="video__title">{props.title}</p>
        <p className="video__artist">{props.artist}</p>
      </Link>
    </li>
  );
}

export default Video;
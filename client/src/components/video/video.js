import "./video.scss";
import { Link } from "react-router-dom";

function Video(props) {
  return (
    <li className="video">
      {props.id}
      <Link to={`/videos`}>
        <video className="video__video" poster={props.poster}>
        </video>
      </Link>
    </li>
  )
}
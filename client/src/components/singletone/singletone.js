import "./singletone.scss";
import { Link } from "react-router-dom";

function SingleToneComp(props) {

  return (
    <div className="single-tone">
      <Link to={`/${props.videoId}`}>
        <video
          controls
          className="single-tone__video"
          poster={props.poster}
          src={props.url}
          type="video/mp4"
        >
        </video>
        <p className="single-tone__title">{props.title}</p>
        <p className="single-tone__artist">{props.artist}</p>
      </Link>
    </div>
  );
}

export default SingleToneComp;
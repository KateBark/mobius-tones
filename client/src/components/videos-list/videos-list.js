import "./videos-list.scss";
import Video from "./video/video";

function VideosList({ videos }) {
  return (
    <div className="videos">
      <ul className="videos__list">
        {videos.map(video => {
          return (
            <Video
              key={video.id}
              videoId={video.id}
              title={video.title}
              poster={video.image}
              url={video.url}
            />
          );
        })}
      </ul>
    </div>
  )
}

export default VideosList;
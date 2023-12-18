import "./videos-list.scss";
import VideoComponent from "../video/video";

function VideosList({ videos }) {
  return (
    <div className="videos">
      <div className="videos__list">
        {videos.map(video => (
          <VideoComponent
            key={video.id}
            videoId={video.id}
            title={video.title}
            poster={video.image}
            url={video.url}
            artist={video.artist}
          />
        ))}
      </div>
    </div>
  );
}

export default VideosList;
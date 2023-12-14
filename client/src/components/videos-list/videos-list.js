import "./videos-list.scss";
import VideoComponent from "../video/video";

function VideosList({ videos }) {
  console.log(videos[0]);
  // console.log(videos.data.image);
  return (
    <div className="videos">
      <ul className="videos__list">
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
      </ul>
    </div>
  );
}

export default VideosList;

// import "./videos-list.scss";
// import Video from "../video/video";

// function VideosList({ videos }) {
//   console.log(videos);
//   console.log(videos.image);
  
//   const opts = {
//     height: "315",
//     width: "560"
//   };

//   return (
//     <div className="videos">
//       <ul className="videos__list">
//         {videos.map(video => {
//           return (
//             <>
//             <YouTube videoId={extractVideoId(video.url)}
//             opts={opts}
//               {/* <Video */}
//                 key={video.id}
//                 // videoId={video.id}
//                 title={video.title}
//                 poster={video.image}
//                 url={video.url}
//                 artist={video.artist}
//               {/* /> */}
//               />
//             </>
//           );
//         })}
//       </ul>
//     </div>
//   )
// }

// function extractVideoId(url) {
//   const videoIdMatch = url.match(/[?&]v=([^&]+)/);
//   return videoIdMatch ? videoIdMatch[1] : "";
// }

// export default VideosList;
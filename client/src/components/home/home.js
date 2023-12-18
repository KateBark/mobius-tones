import "./home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import VideosList from "../videos-list/videos-list";
import VideosData from "../../data/videos.json"

// const url = "http://localhost:8080";

function HomeComponent() {
  // remove VideosData from state when db confirmed - revert to []
  const [videos] = useState(VideosData);

  // useEffect(() => {
  //   axios.get(`${url}`)
  //     .then(results => {
  //       setVideos(results.data);
  //       return results;
  //     })
  // }, [])

  return (
    <main className="home">
      <div className="home__container">
        <VideosList
          videos={videos}
        />
      </div>
    </main>
  )
}

export default HomeComponent;
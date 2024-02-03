import "./home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import VideosList from "../videos-list/videos-list";
// import VideosData from "../../data/videos.json"

const url = "http://localhost:8080";

function HomeComponent() {
  // remove VideosData from state when db confirmed - revert to []
  // const [videos] = useState(VideosData);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${url}`)
      .then(results => {
        setVideos(results.data);
        return results;
      })
  }, [])

  return (
    <main className="home">
      <div className="home__quote-container">
        <h3 className="home__quote">"The secret to getting ahead is getting started."<br></br>~ Mark Twain</h3>
      </div>
      <div className="home__container">
        <VideosList
          videos={videos}
        />
      </div>
    </main>
  )
}

export default HomeComponent;
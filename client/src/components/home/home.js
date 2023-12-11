import "./home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import VideosList from "../videos-list/videos-list";

const url = "http://localhost:8080";

function HomeComponent() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${url}`)
      .then(results => {
        console.log(results.data)
        setVideos(results.data);
        return results;
      })
  }, [])

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
import "./tones.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import VideosData from "../../data/videos.json"
import Members from "../../data/members.json"

// const url = "http://localhost:8080";

function TonesComponent() {
  const [tones, setTones] = useState([]);

  // remove code between here line when db confirmed working
  useEffect(() => {
    const selectedTones = VideosData.filter(videoEl => videoEl.member_id === "1");
    setTones(selectedTones);
  }, []);
  // _________________________________

  // const { id } = useParams();

  // useEffect(() => {
  //   axios.get(`${url}/mytones/${id}`)
  //     .then(results => {
  //       const selectedTones = results.data;
  //       setTones(selectedTones);
  //       return selectedTones;
  //     })
  // }, [id]);

  return (
    <section className="tones">
      <h1 className="tones__title">Tones You Have Uploaded:</h1>
      <ul className="tones__style"
      >
        {tones.map((tone) => (
          <YouTube
            className="tones__video"
            videoId={tone.url.split("https://www.youtube.com/watch?v=")[1].split("&")[0]} />
        ))}
      </ul>
    </section>
  )
}

export default TonesComponent;
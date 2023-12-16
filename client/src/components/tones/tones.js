import "./tones.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const url = "http://localhost:8080";

function TonesComponent() {
  const [tones, setTones] = useState([]);

  // const params = useParams();
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    // axios.get(`${url}/:mytones`)
    // axios.get(`${url}/${params.mytones}`)
    axios.get(`${url}/mytones/${id}`)
      // axios.get("http://localhost:8080/mytones/id")
      .then(results => {
        // console.log(results.data[0].title);
        const selectedTones = results.data;
        setTones(selectedTones);
        return selectedTones;
      })
  }, [id]);

  // const opts = {
  //   height: "315",
  //   width: "560"
  // }

  return (
    <section className="tones">
      <ul className="tones__style"
      // style={{ width: '100%' }}
      >
        {tones.map((tone) => (
          // <video
          <YouTube 
          // opts={opts} 
          className="tones__video" 
          videoId={tone.url.split("https://www.youtube.com/watch?v=")[1].split("&")[0]} />

            // controls
            // className="tones__style"
            // key={tone.id}
            // url={tone.url}
            // videoId={tone.id}
            // title={tone.title}
            // poster={tone.image}
            // artist={tone.artist}>
            // <h3>{tone.title}</h3>
            // <p>{tone.artist}</p>
            
          
          // </YouTube>
        ))}
      </ul>
    </section>
  )
}

export default TonesComponent;
import "./tones.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <section className="tones">
      <ul>
        {tones.map((tone) => (
          <video controls className="tones__style"
            key={tone.id}
            url={tone.url}
            videoId={tone.id}
            title={tone.title}
            poster={tone.image}
            artist={tone.artist}>
            <h3>{tone.title}</h3>
            <p>{tone.artist}</p>
            {/* Add other tone details here */}
          </video>
        ))}
      </ul>
    </section>
  )
}

export default TonesComponent;
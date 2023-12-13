import "./tones.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "http://localhost:8080";

function MyTones() {
  const [tones, setTones] = useState([]);

  // const params = useParams();
  const { id } = useParams();

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
      <iframe>

      </iframe>
    </section>
  )
}

export default MyTones;
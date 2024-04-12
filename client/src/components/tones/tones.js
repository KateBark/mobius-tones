import "./tones.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import YouTube from "react-youtube";
import BackIcon from "../../assets/arrow_back-24px.svg";
import SingleToneComp from "../singletone/singletone";

const url = "http://localhost:8080";

function TonesComponent() {
  const [tones, setTones] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${url}/mytones/${id}`)
      .then(results => {
        const selectedTones = results.data;
        setTones(selectedTones);
        return selectedTones;
      })
  }, [id]);

  const handleEdit = (toneId) => {
    alert("Edit functionality coming soon to a theatre near you! 🚀")
    // logic to be added for editing video - also update info in database
  }

  const handleDelete = (toneId) => {
    alert("Delete functionality coming soon to a theatre near you! 🚀")
    // logic to be added for deleting video - also delete from database (or just remove from site?)
  }

  return (
    <section className="tones">
      <div className="tones__button-container">
        <NavLink
          to={`/`}
          className="tones__back-button"
        >
          <img src={BackIcon} alt="return to previous page" className="tones__button-img" />
        </NavLink>
      </div>
      <h1 className="tones__title">Tones You Have Uploaded:</h1>
      <div className="tones__style">
        {tones.slice().reverse().map((tone) => (
          <div className="tones__container">
            <SingleToneComp
              key={tone.id}
              videoId={tone.id}
              poster={tone.image}
              url={tone.url}
              artist={tone.artist}
              title={tone.title}
            />
            <div className="tones__buttons-container">
              <button
                type="button"
                className="tones__button"
                onClick={() => handleEdit(tone.id)}
              >Edit</button>
              <button
                type="button"
                className="tones__button"
                onClick={() => handleDelete(tone.id)}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TonesComponent;
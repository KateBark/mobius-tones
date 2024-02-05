import "./channel.scss";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import BackIcon from "../../assets/arrow_back-24px.svg";

const url = "http://localhost:8080";

function ChannelComponent() {
  const [posts, setPosts] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [artistError, setArtistError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const artist = event.target.artist.value;
    const inputUrl = event.target.url.value;

    if (title === "") {
      setTitleError(true);
    }

    if (artist === "") {
      setArtistError(true);
    }

    if (inputUrl === "") {
      setUrlError(true);
    }

    if (!title || !artist || !inputUrl) {
      alert("🦄 Please fill in all fields");
      return;
    }

    const newPost = {
      title: title,
      artist: artist,
      url: inputUrl
    }

    // hard-coded user "1" on back-end. Will update with useParams() to make dynamic
    axios.post(`${url}/channel`, newPost)
      .then(results => {
        setPosts(results.data);
        navigate("/");
        alert("⭐ Upload successful!");
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <section className="channel">
      
      <div className="channel__button-container">
        <NavLink
          to={`/`}
          className="channel__back-button"
        >
          <img src={BackIcon} alt="return to previous page" className="channel__button-img" />
        </NavLink>
      </div>
      <div className="channel__container">
        <h1 className="channel__title">Upload Video</h1>
        <div className="channel__info-container">
          <div className="channel__input-container">
            <form className="channel__form-container" onSubmit={handleSubmit}>
              <label htmlFor="title" className="channel__video-title">SONG TITLE</label>
              <input type="text" name="title" id="video-title"
                className={titleError === false ? "channel__title-input" : "channel__title-input channel__title-input-error"}
                placeholder="Add a title to your video" />
              <label htmlFor="artist" className="channel__video-description">ARTIST / BAND NAME</label>
              <input type="text" name="artist" id="video-description"
                className={artistError === false ? "channel__description-input" : "channel__description-input channel__description-input-error"}
                placeholder="Add your artist or band name here" />
              <label htmlFor="url" className="channel__video-url">URL</label>
              <input type="text" name="url" id="video-url"
                className={urlError === false ? "channel__url-input" : "channel__url-input channel__url-input-error"}
                placeholder="Paste your YouTube url here" />
              <div className="channel__cta-container">
                <div className="channel__button-location">
                  <button type="submit" className="channel__publish-button">
                    <p className="channel__publish-button-text">PUBLISH</p>
                  </button>
                </div>
                {/* <button className="channel__cancel-button">CANCEL</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChannelComponent;
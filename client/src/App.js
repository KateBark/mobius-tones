import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import './styles/App.scss';
import Header from "./components/header/Header";
import About from "./components/about/About";
import HomePage from "./pages/home/Home";
import TonesComponent from "./components/tones/tones";
import Channel from "./components/channel/channel";
import VideoPlayer from "./components/video-player/VideoPlayer";
import Login from "./components/login/Login";

function App() {
  let { id } = useParams();

  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleLogin = (username) => {
    setAuthenticatedUser(username);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:videoId" element={<VideoPlayer />} />
        <Route
          path="/mytones/:id"
          element={authenticatedUser ? <TonesComponent /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />} />
        {/* Make channel dynamic ( /channel/:id ) once auth set up */}
        <Route path="/channel"
          element={authenticatedUser ? <Channel /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

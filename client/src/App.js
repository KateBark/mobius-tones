import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './styles/App.scss';
import Header from "./components/header/Header";
import About from "./components/about/About";
import HomePage from "./pages/home/Home";
import TonesComponent from "./components/tones/tones";
import Channel from "./components/channel/channel";
import VideoPlayer from "./components/video-player/VideoPlayer";

function App() {
  let { id } = useParams();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:videoId" element={<VideoPlayer />} />
        {/* <Route path="/:mytones" element={<MyTones />} /> */}
        <Route path="/mytones/:id" element={<TonesComponent />} />
        <Route path="/:channel" element={<Channel />} />
        {/* <Route path="/videos/:id" element={<VideoPlayer />} /> */}
        {/* <Route path="/video-player" element={<VideoPlayer />} /> */}
        
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './styles/App.scss';
import Header from "./components/header/Header";
import About from "./components/about/About";
import HomePage from "./pages/home/Home";

function App() {
  // const { myvids, mystuff } = useParams();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/:myvids" element={<MyFlicks />} /> */}
        {/* <Route path="/:channel" element={<Channel />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

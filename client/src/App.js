import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './styles/App.scss';
import Header from "./components/header/Header";
import About from "./components/about/About";

function App() {
  const { myvids, mystuff } = useParams();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/:myvids" element={<MyVids />} /> */}
        {/* <Route path="/:mystuff" element={<MyStuff />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

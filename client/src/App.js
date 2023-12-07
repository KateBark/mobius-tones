import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles./App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myvids" element={<MyVids />} />
        <Route path="/mystuff" element={<MyStuff />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

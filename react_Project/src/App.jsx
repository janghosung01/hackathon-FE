import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Calender from "./pages/Calender";
import MentorBoard from "./pages/MentorBoard";
import MyMentor from "./pages/MyMentor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/board" element={<MentorBoard />} />
        <Route path="/mymentor" element={<MyMentor />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home";
import SharedCalendar from "./pages/SharedCalendar";
import MentorBoard from "./pages/MentorBoard";
import MyMentor from "./pages/MyMentor";
import Mypage from "./pages/Mypage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<SharedCalendar />} />
        <Route path="/board" element={<MentorBoard />} />
        <Route path="/mymentor" element={<MyMentor />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App;

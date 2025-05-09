import "./App.css";
import Home from "./pages/Home";
import SharedCalendar from "./pages/SharedCalendar";
import MentorBoard from "./pages/MentorBoard";
import MyMentor from "./pages/MyMentor";
import Mypage from "./pages/Mypage";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";

const mockData = [
  {
    id: 1,
    name: "홍길동",
    city: { name: "SEOUL" },
    subjects: [{ name: "COMMUNICATION" }, { name: "CULTURE" }],
    rating: 4.5,
    reviewCnt: 12,
    gender: "MALE",
    profileImage: "https://example.com/image.jpg",
    description: "한국 생활을 도와드릴 멘토입니다.",
    level: 3,
    languages: [{ name: "Korean" }, { name: "English" }],
  },
  {
    id: 2,
    name: "홍",
    city: { name: "INCHEON" },
    subjects: [{ name: "COMMUNICATION" }, { name: "CULTURE" }],
    rating: 3.5,
    reviewCnt: 22,
    gender: "MALE",
    profileImage: "https://example.com/image.jpg",
    description: "hi everyone",
    level: 3,
    languages: [{ name: "Korean" }, { name: "English" }],
  },
  {
    id: 2,
    name: "홍",
    city: { name: "INCHEON" },
    subjects: [{ name: "COMMUNICATION" }, { name: "LIVING_SUPPORT" }],
    rating: 3.5,
    reviewCnt: 22,
    gender: "MALE",
    profileImage: "https://example.com/image.jpg",
    description: "hi everyone",
    level: 3,
    languages: [{ name: "Korean" }, { name: "English" }],
  },
  {
    id: 2,
    name: "홍",
    city: { name: "INCHEON" },
    subjects: [{ name: "COMMUNICATION어" }, { name: "CULTURE" }],
    rating: 3.5,
    reviewCnt: 22,
    gender: "MALE",
    profileImage: "https://example.com/image.jpg",
    description: "hi everyone",
    level: 3,
    languages: [{ name: "Korean" }, { name: "English" }],
  },
  {
    id: 2,
    name: "홍",
    city: { name: "INCHEON" },
    subjects: [{ name: "COMMUNICATION" }, { name: "CULTURE" }],
    rating: 3.5,
    reviewCnt: 22,
    gender: "MALE",
    profileImage: "https://example.com/image.jpg",
    description: "hi everyone",
    level: 3,
    languages: [{ name: "Korean" }, { name: "English" }],
  },
  {
    id: 2,
    name: "홍",
    city: { name: "INCHEON" },
    subjects: [{ name: "COMMUNICATION" }, { name: "CULTURE" }],
    rating: 3.5,
    reviewCnt: 22,
    gender: "MALE",
    profileImage: "https://example.com/image.jpg",
    description: "hi everyone",
    level: 3,
    languages: [{ name: "Korean" }, { name: "English" }],
  },
];

export const MentorInfoContext = createContext();

function App() {
  return (
    <>
      <MentorInfoContext.Provider value={mockData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<SharedCalendar />} />
          <Route path="/board/page" element={<MentorBoard />} />
          <Route path="/mymentor" element={<MyMentor />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/board/page/:id" element={<PostDetail />} />
          <Route path="/board/new" element={<WritePost />} />
        </Routes>
      </MentorInfoContext.Provider>
    </>
  );
}

export default App;

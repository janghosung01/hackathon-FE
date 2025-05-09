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
import { useState } from "react";
import MentorSearch from "./components/MentorSearch"; // 경로는 프로젝트에 맞게 수정
import MentorList from "./components/MentorList"; // 결과를 보여줄 컴포넌트 예시



export const MentorInfoContext = createContext();
export const MentorSearchChange = createContext();

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleFilterChange = (results) => {
    setSearchResults(results); // MentorSearch에서 전달된 결과 저장
  };
  console.log("App전달", searchResults);

  return (
    <>
      <MentorInfoContext.Provider value={searchResults}>
        <MentorSearchChange.Provider value={handleFilterChange}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<SharedCalendar />} />
          <Route path="/board/page" element={<MentorBoard />} />
          <Route path="/mymentor" element={<MyMentor />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/board/page/:id" element={<PostDetail />} />
          <Route path="/board/new" element={<WritePost />} />
        </Routes>
        </MentorSearchChange.Provider>
      </MentorInfoContext.Provider>
    </>
  );
}

export default App;

import "./MentorSearch.css";
import { useState } from "react";

const MentorSearch = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [area, setArea] = useState("");
  const [keyword, setKeyword] = useState("");
  const [reviewScore, setReviewsSore] = useState("");
  const page=1;
  const size=6;
  const language="KOREAN"
const handleSearchClick = async (page,size) => {
  const requestData = {
    keyword:searchTerm,
    city:area,
    subject:keyword,
    minRating:reviewScore,
    language:language,
  };

  try {
    const response = await fetch("http://localhost:8080/api/mentors/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (response) {
      const result = await response.json();
      console.log("🔍 검색 결과:", result);
      onFilterChange?.(result);
    }
      //response 를 App.jsx 에서쓰고싶어
  } catch (err) {
    console.error("❌ 네트워크 오류:", err);
    alert("서버와 연결할 수 없습니다.");
  }
};


  return (
    <div className="parentDiv">
      <div className="ContainerSearch">
        <div className="searchRow">
          <input
            className="SearchInput"
            type="text"
            placeholder="멘토 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn Search-btn" onClick={handleSearchClick}>
            검색
          </button>
        </div>
        <div className="filterOptions">
          <span>지역</span>
          <span>주제</span>
          <span>정렬</span>
        </div>

        <div className="OptSelect">
          <select
            name="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">선택</option>
            <option value="SEOUL">서울특별시</option>
            <option value="BUSAN">부산광역시</option>
            <option value="DAEGU">대구광역시</option>
            <option value="INCHEON">인천광역시</option>
            <option value="GWANGJU">광주광역시</option>
            <option value="DAEJEON">대전광역시</option>
            <option value="ULSAN">울산광역시</option>
            <option value="SEJONG">세종특별자치시</option>
            <option value="GYEONGGI">경기도</option>
            <option value="GANGWON">강원특별자치도</option>
            <option value="CHUNGBUK">충청북도</option>
            <option value="CHUNGNAM">충청남도</option>
            <option value="JEOLLABUK">전북특별자치도</option>
            <option value="JEOLLANAM">전라남도</option>
            <option value="GYEONGBUK">경상북도</option>
            <option value="GYEONGNAM">경상남도</option>
            <option value="JEJU">제주특별자치도</option>
          </select>
          <select
            name="keyWord"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          >
            <option value="">키워드</option>
            <option value="LIVING_SUPPORT">생활적응</option>
            <option value="COMMUNICATION">한국어/소통</option>
            <option value="EMPLOYMENT">취업/노동</option>
            <option value="MEDICAL_HEALTH">의료/건강</option>
            <option value="LEGAL_VISA">법률/비자/행정</option>
            <option value="CULTURE">문화/예절</option>
            <option value="EDUCATION">교육</option>
            <option value="FAMILY">가족/양육</option>
            <option value="PUBLIC_SERVICE">공공서비스</option>
            <option value="LOCAL_INFO">지역정보</option>
            <option value="FRIEND">친구</option>
          </select>
          <select name="reviewScore"
            value={reviewScore}
            onChange={(e) => setReviewsSore(e.target.value)}
          >
            <option value="">평점순</option>
            <option value="">(4.5)⭐⭐⭐⭐☆</option>
            <option value="">(4.0)⭐⭐⭐⭐ </option>
            <option value="">(3.5)⭐⭐⭐☆ </option>
            <option value="">(3.0)⭐⭐⭐ </option>
            <option value="">(2.5)⭐⭐☆ </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MentorSearch;

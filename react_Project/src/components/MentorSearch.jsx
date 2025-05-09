import "./MentorSearch.css";
const MentorSearch = () => {
  return (
    <div className="parentDiv">
      <div className="ContainerSearch">
        <div className="searchRow">
          <input className="SearchInput" type="text" placeholder="멘토 검색" />
          <button className="btn Search-btn">검색</button>
        </div>
        <div className="filterOptions">
          <span>지역</span>
          <span>주제</span>
          <span>정렬</span>
        </div>

        <div className="OptSelect">
          <select name="Area">
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
          <select name="keyWord ">
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
          <select name="reviewScore">
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

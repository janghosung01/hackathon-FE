import "./MentorSearch.css";

const MentorSearch = () => {
  return (<div className="parentDiv">
    <div className="TitleText">
      <h1 className="Title">한국 적응을 위한 멘토 찾기</h1>
      <p className="Pcontent">한국에서의 새로운 시작을 도와줄 멘토를 찾아보세요. 언어,문화,생활 등 다양한
        분야의 전문가들이 기다리고 있습니다.
      </p>
    </div>
    <div className="ContainerSearch">
      <div className="searchRow">
        <input type="text" placeholder="멘토 검색"/>
        <button>검색</button>
      </div>
      <div className="filterOptions">
        <span>지역</span>
        <span>주제</span>
        <span>정렬</span>
      </div>
    </div>

  </div>);
};

export default MentorSearch;

import "./MentorSearch.css";

const MentorSearch = () => {
  return (<div className="parentDiv">
    
    <div className="ContainerSearch">
      <div className="searchRow">
        <input className ="SearchInput" type="text" placeholder="멘토 검색"/>
        <button className="btn Search-btn">검색</button>
      </div>
      <div className="filterOptions">
        <span>지역</span>
        <span>주제</span>
        <span>정렬</span>
      </div>
      <div className="OptSelect">
          <optgroup>
            <select name="" id=""></select>
          </optgroup>

      </div>
      

    </div>

  </div>);
};

export default MentorSearch;

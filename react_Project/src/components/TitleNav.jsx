import "./TitleNav.css";

const TitleNav = () => {

    return(
      <div id="TitleConTainer">
        <div className="TitleText">
            <h1 className="Title">한국 적응을 위한 멘토 찾기</h1>
            <p className="Pcontent">한국에서의 새로운 시작을 도와줄 멘토를 찾아보세요. 언어,문화,생활 등 다양한
                분야의 전문가들이 기다리고 있습니다.
            </p>
        </div>
        <div className="btnGroup">
        <button>멘토 목록</button>
        <button>일정 캘린더</button>
        <button>멘토 게시판</button>
        </div>
    </div>
    )
}

export default TitleNav

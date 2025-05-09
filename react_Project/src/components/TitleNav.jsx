import "./TitleNav.css";
import { Link } from "react-router-dom";

const TitleNav = () => {
  return (
    <div id="TitleConTainer">
      <div className="TitleText">
        <h1 className="Title">한국 적응을 위한 멘토 찾기</h1>
        <p className="Pcontent">
          한국에서의 새로운 시작을 도와줄 멘토를 찾아보세요. 언어,문화,생활 등
          다양한 분야의 전문가들이 기다리고 있습니다.
        </p>
      </div>
      {/* 탭 메뉴 (라우터 링크로 변경) */}
      <div className="tab-menu">
        <Link
          to="/"
          className={`tab-btn ${location.pathname === "/" ? "active" : ""}`}
        >
          멘토 목록
        </Link>
        <Link
          to="/calender"
          className={`tab-btn ${
            location.pathname === "/calendar" ? "active" : ""
          }`}
        >
          일정 캘린더
        </Link>
        <Link
          to="/board"
          className={`tab-btn ${
            location.pathname === "/board" ? "active" : ""
          }`}
        >
          멘토 게시판
        </Link>
        <Link
          to="/mymentor"
          className={`tab-btn ${
            location.pathname === "/settings" ? "active" : ""
          }`}
        >
          내 멘토
        </Link>
      </div>
    </div>
  );
};

export default TitleNav;

import { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState("mentee");
  const nav = useNavigate();

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setShowRegisterModal(false);
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
    setShowLoginModal(false);
  };

  const loginSubmit = () => {
    setIsLogin(true);
    setShowLoginModal(false);
  };

  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>멘토코리아</h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li onClick={() => nav("/")} style={{ cursor: "pointer" }}>
              홈
            </li>
            <li style={{ cursor: "pointer" }}>내 멘토</li>
            <li style={{ cursor: "pointer" }}>멘토 등록</li>
          </ul>
          <div className="auth-buttons">
            {isLogin ? (
              <button className="btn logout-btn" onClick={onClickLogout}>
                로그아웃
              </button>
            ) : (
              <>
                <button className="btn login-btn" onClick={toggleLoginModal}>
                  로그인
                </button>
                <button
                  className="btn register-btn"
                  onClick={toggleRegisterModal}
                >
                  회원가입
                </button>
              </>
            )}
          </div>
        </nav>
      </div>

      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleLoginModal}>
              &times;
            </span>
            <h2>로그인</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" required />
              </div>
              <button
                type="submit"
                className="btn submit-btn"
                onClick={loginSubmit}
              >
                로그인
              </button>
            </form>
            <p>
              계정이 없으신가요?{" "}
              <span className="link" onClick={toggleRegisterModal}>
                회원가입
              </span>
            </p>
          </div>
        </div>
      )}
      {showRegisterModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleRegisterModal}>
              &times;
            </span>
            <h2>회원가입</h2>
            <form>
              {/* 공통 입력 항목 */}
              <div className="form-group">
                <label htmlFor="reg-id">아이디</label>
                <input type="text" id="reg-id" required />
              </div>
              <div className="form-group">
                <label htmlFor="reg-password">비밀번호</label>
                <input type="password" id="reg-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="reg-confirm-password">비밀번호 확인</label>
                <input type="password" id="reg-confirm-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="reg-name">이름</label>
                <input type="text" id="reg-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="reg-region">지역</label>
                <input
                  type="text"
                  id="reg-region"
                  required
                  placeholder="예: 서울"
                />
              </div>
              <div className="form-group">
                <label htmlFor="reg-gender">성별</label>
                <select id="reg-gender" required>
                  <option value="">선택</option>
                  <option value="male">남자</option>
                  <option value="female">여자</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="reg-email">이메일</label>
                <input type="email" id="reg-email" required />
              </div>
              <div className="form-group">
                <label htmlFor="reg-phone">전화번호</label>
                <input
                  type="tel"
                  id="reg-phone"
                  required
                  placeholder="예: 010-1234-5678"
                />
              </div>

              {/* 회원 유형 선택 */}
              <div className="form-group">
                <label>회원 유형</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="mentee"
                      checked={userType === "mentee"}
                      onChange={() => setUserType("mentee")}
                    />
                    멘티
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="mentor"
                      checked={userType === "mentor"}
                      onChange={() => setUserType("mentor")}
                    />
                    멘토
                  </label>
                </div>
              </div>

              {/* 멘토만 입력하는 추가 항목 */}
              {userType === "mentor" && (
                <>
                  <div className="form-group">
                    <label htmlFor="reg-keywords">키워드 List</label>
                    <input
                      type="text"
                      id="reg-keywords"
                      placeholder="예: 진로, 대외활동"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-description">소개글</label>
                    <textarea
                      id="reg-description"
                      rows="3"
                      placeholder="자기소개를 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-profile-pic">프로필 사진</label>
                    <input type="file" id="reg-profile-pic" accept="image/*" />
                  </div>
                </>
              )}

              <button type="submit" className="btn submit-btn">
                회원가입
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

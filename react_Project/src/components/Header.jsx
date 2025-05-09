import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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
    <header>
      <div>
        <div>
          <h1>멘토코리아</h1>
        </div>
        <ul>
          <li>홈</li>
          <li>멘토</li>
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
              <div className="form-group">
                <label htmlFor="reg-email">이메일</label>
                <input type="email" id="reg-email" required />
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
                <label>회원 유형</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="mentee"
                      defaultChecked
                    />{" "}
                    멘티
                  </label>
                  <label>
                    <input type="radio" name="userType" value="mentor" /> 멘토
                  </label>
                </div>
              </div>
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

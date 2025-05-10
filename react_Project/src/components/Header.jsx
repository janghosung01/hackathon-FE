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

  const onClickLogout = () => {
    setIsLogin(false);
  };
  ///회원가입
  const handleRegister = async (e) => {
    e.preventDefault(); // 기본 새로고침 막기

    const commonData = {
      loginId: formData.id,
      password: formData.password,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      city: formData.region,
    };

    let requestData;
    let url;

    if (userType === "mentor") {
      url = "http://localhost:8080/auth/signup/mentor";
      requestData = {
        ...commonData,
        keywords: formData.keywords,
        languages: formData.languages,
        description: formData.description,
        profileImage: formData.profileimage, // Base64
      };
    } else {
      url = "http://localhost:8080/auth/signup/mentee";
      requestData = commonData;
    }
    console.log("✅ 최종 전송 데이터:", requestData); // 객체 그대로 출력
    console.log("✅ 전송되는 ID:", requestData.id); // ID만 따로 출력
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("회원가입 성공!");
        console.log("✅ 회원가입 성공:", result);
        setFormData({
          id: "",
          password: "",
          confirmPassword: "",
          name: "",
          email: "",
          phone: "",
          gender: "",
          region: "",
          languages: "",
          subjects: "",
          profileimage: "",
          description: "",
        });

        // 🔽 모달 닫기
        setShowRegisterModal(false);

        console.log(result.success);
      } else {
        // 실패 응답 처리 (e.g. 400, 401, 500 등)
        console.error("❌ 회원가입 실패:", result);
        alert(`회원가입 실패: ${result.message || "서버 오류"}`);
      }
    } catch (err) {
      console.error("❌ 서버 통신 오류:", err);
      alert("서버와 연결할 수 없습니다.");
    }
  };
  ////로그인 전송 포스트
  const handleLogin = async (e) => {
    e.preventDefault();

    const requestData = {
      loginId: loginInfo.id,
      password: loginInfo.password,
    };

    console.log("🔐 로그인 요청:", requestData);
    console.log("👉 ID:", loginInfo.id);
    console.log("👉 Password:", loginInfo.password);
    console.log("👉 Password:", loginInfo);

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("✅ 로그인 성공:", result);
        console.log(result);
        if (result.data.accessToken) {
          localStorage.setItem("Authorization", "Bearer " + result.data.accessToken);
          console.log("🗝️ 토큰 저장 완료:", result.data.accessToken);
        }
        ///////
        alert("로그인 성공!");
        setIsLogin(true);
        setShowLoginModal(false);
      }
      else{
        // 실패 응답 처리 (e.g. 400, 401, 500 등)
        console.error("❌ 로그인 실패:", result);
        alert(`로그인 실패: ${result.message || "서버 오류"}`);
      }
    } catch (err) {
      console.error("❌ 네트워크 오류:", err);
      alert("서버와 연결할 수 없습니다.");
    }
  };

  //로그인 객체
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });
  //////
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //객체 멘티 상태 선언
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    region: "",
    languages: "",
    subjects: "",
    profileimage: "",
    description: "",
  });
  ///////
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace("reg-", "")]: value, // 예: reg-name → name
    }));
  };
  /////////
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
            <li onClick={() => nav("/mypage")} style={{ cursor: "pointer" }}>
              마이페이지
            </li>
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
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="id">아이디</label>
                <input
                  type="text"
                  name="id"
                  id="login-id"
                  value={loginInfo.id}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="text"
                  name="password"
                  id="login-password"
                  value={loginInfo.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <button type="submit" className="btn submit-btn">
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
            <form onSubmit={handleRegister}>
              {/* 공통 입력 항목 */}
              <div className="form-group">
                <label htmlFor="reg-id">아이디</label>
                <input
                  type="text"
                  id="reg-id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reg-password">비밀번호</label>
                <input
                  type="password"
                  id="reg-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-name">이름</label>
                <input
                  type="text"
                  id="reg-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reg-region">지역</label>
                <select
                  id="reg-region"
                  value={formData.region}
                  onChange={handleChange}
                  required
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
              </div>
              <div className="form-group">
                <label htmlFor="reg-gender">성별</label>
                <select
                  id="reg-gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">선택</option>
                  <option value="MALE">남자</option>
                  <option value="FEMALE">여자</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="reg-email">이메일</label>
                <input
                  type="email"
                  id="reg-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reg-phone">전화번호</label>
                <input
                  type="tel"
                  id="reg-phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                      onChange={(e) => {
                        setUserType("mentee");
                        setFormData((prev) => ({
                          ...prev,
                          userType: e.target.value,
                        }));
                      }}
                    />
                    멘티
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="mentor"
                      checked={userType === "mentor"}
                      onChange={(e) => {
                        setUserType("mentor");
                        setFormData((prev) => ({
                          ...prev,
                          userType: e.target.value,
                        }));
                      }}
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
                      placeholder="LIVING_SUPPORT"
                      value={formData.keywords}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-languages">사용 언어</label>
                    <input
                      type="text"
                      id="reg-languages"
                      placeholder="KOREAN"
                      value={formData.languages}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-description">소개글</label>
                    <textarea
                      id="reg-description"
                      rows="3"
                      placeholder="자기소개를 입력하세요"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-profile-pic">프로필 사진</label>
                    <input
                      type="file"
                      id="reg-profile-pic"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData((prev) => ({
                              ...prev,
                              profilePic: file,
                              profileImage: reader.result, // Base64 저장
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
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

import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">멘토코리아</h3>
            <p>
              멘토코리아는 한국에 거주하는 이민자들의 성공적인 정착과 적응을
              돕기 위한 멘토-멘티 매칭 플랫폼입니다.
            </p>
            <div className="contact">
              <p>
                <i className="icon">✉</i> contact@mentorkorea.com
              </p>
              <p>
                <i className="icon">☎</i> 02-123-4567
              </p>
            </div>
            <div className="socials">
              <a href="#" className="social-icon">
                페이스북
              </a>
              <a href="#" className="social-icon">
                인스타그램
              </a>
              <a href="#" className="social-icon">
                유튜브
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">빠른 링크</h3>
            <ul>
              <li>
                <a onClick={() => nav("/")}>홈</a>
              </li>
              <li>
                <a onClick={() => nav("/mypage")}>마이페이지</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 인생디버깅. 모든 권리 보유.</p>
          <div className="footer-bottom-links">
            <a>이용약관</a>
            <a>개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import TitleNav from "../components/TitleNav";

// const MentorBoard = () => {
//   return (
//     <>
//       <Header />
//       <TitleNav />
//       <main>MentorBoard</main>
//       <Footer />
//     </>
//   );
// };

// export default MentorBoard;

"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleNav from "../components/TitleNav";
import "../styles/MentorBoard.css";

const MentorBoard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, public, private
  const [currentPage, setCurrentPage] = useState(1);
  const [isMatched, setIsMatched] = useState(true); // 임시로 매칭된 상태로 설정
  const [isMentor, setIsMentor] = useState(false); // 임시로 멘티 상태로 설정
  const postsPerPage = 10;
  const nav = useNavigate();

  // 게시글 데이터 로드 (실제 구현에서는 API 호출)
  useEffect(() => {
    // 임시 데이터
    const tempPosts = [
      {
        id: 1,
        title: "한국어 학습 자료",
        content: "초급 한국어 학습에 도움이 되는 자료들을 공유합니다.",
        author: "김민수 멘토",
        authorId: "mentor1",
        isPublic: true,
        createdAt: "2023-05-01T10:30:00",
        comments: [
          {
            id: 101,
            content: "자료 감사합니다! 많은 도움이 되었어요.",
            author: "이지원",
            authorId: "user1",
            createdAt: "2023-05-01T14:20:00",
          },
          {
            id: 102,
            content: "추가 자료도 있으면 공유해주세요.",
            author: "박준호",
            authorId: "user2",
            createdAt: "2023-05-02T09:15:00",
          },
        ],
      },
      {
        id: 2,
        title: "비자 신청 관련 질문이 있습니다",
        content: "F-2 비자 신청 과정에서 필요한 서류에 대해 질문드립니다.",
        author: "왕리",
        authorId: "user3",
        isPublic: false,
        createdAt: "2023-05-03T16:45:00",
        comments: [
          {
            id: 103,
            content:
              "비자 신청 시 필요한 서류 목록을 이메일로 보내드렸습니다. 확인해보세요.",
            author: "김민수 멘토",
            authorId: "mentor1",
            createdAt: "2023-05-03T18:30:00",
          },
        ],
      },
      {
        id: 3,
        title: "한국 직장 문화 적응하기",
        content:
          "한국 회사에 취업했는데, 직장 문화에 적응하기 어렵습니다. 조언 부탁드립니다.",
        author: "존 스미스",
        authorId: "user4",
        isPublic: true,
        createdAt: "2023-05-05T11:20:00",
        comments: [
          {
            id: 104,
            content: "한국 직장 문화에 대한 기본 에티켓을 정리해드리겠습니다.",
            author: "김민수 멘토",
            authorId: "mentor1",
            createdAt: "2023-05-05T13:10:00",
          },
          {
            id: 105,
            content: "저도 비슷한 경험이 있어요. 함께 이야기 나눠요.",
            author: "마리아",
            authorId: "user5",
            createdAt: "2023-05-05T15:45:00",
          },
        ],
      },
      {
        id: 4,
        title: "다음 멘토링 일정 조율",
        content: "다음 주 멘토링 일정을 조율하고 싶습니다.",
        author: "장미영",
        authorId: "user6",
        isPublic: false,
        createdAt: "2023-05-07T09:00:00",
        comments: [],
      },
      {
        id: 5,
        title: "한국 음식 추천해주세요",
        content:
          "한국에 온 지 얼마 안 됐는데, 꼭 먹어봐야 할 한국 음식이 있을까요?",
        author: "에밀리",
        authorId: "user7",
        isPublic: true,
        createdAt: "2023-05-08T14:20:00",
        comments: [
          {
            id: 106,
            content: "한국의 대표적인 음식들을 추천해드릴게요.",
            author: "김민수 멘토",
            authorId: "mentor1",
            createdAt: "2023-05-08T15:30:00",
          },
        ],
      },
      {
        id: 6,
        title: "한국어 발음 연습 방법",
        content: "한국어 발음이 어려운데, 효과적인 연습 방법이 있을까요?",
        author: "토마스",
        authorId: "user8",
        isPublic: true,
        createdAt: "2023-05-10T11:15:00",
        comments: [],
      },
      {
        id: 7,
        title: "멘토링 피드백",
        content: "지난 멘토링 세션에 대한 피드백입니다.",
        author: "장미영",
        authorId: "user6",
        isPublic: false,
        createdAt: "2023-05-12T16:30:00",
        comments: [],
      },
      {
        id: 8,
        title: "한국 대중교통 이용 팁",
        content: "한국의 대중교통 시스템이 복잡한데, 이용 팁을 알려주세요.",
        author: "알렉스",
        authorId: "user9",
        isPublic: true,
        createdAt: "2023-05-15T10:45:00",
        comments: [
          {
            id: 107,
            content: "서울 지하철과 버스 이용 방법을 정리해드릴게요.",
            author: "김민수 멘토",
            authorId: "mentor1",
            createdAt: "2023-05-15T13:20:00",
          },
        ],
      },
      {
        id: 9,
        title: "한국 명절 문화",
        content: "한국의 명절 문화에 대해 알고 싶습니다.",
        author: "소피아",
        authorId: "user10",
        isPublic: true,
        createdAt: "2023-05-18T09:30:00",
        comments: [],
      },
      {
        id: 10,
        title: "개인 상담 요청",
        content: "개인적인 문제로 상담을 요청드립니다.",
        author: "장미영",
        authorId: "user6",
        isPublic: false,
        createdAt: "2023-05-20T14:10:00",
        comments: [],
      },
      {
        id: 11,
        title: "한국 날씨와 계절별 준비물",
        content: "한국의 계절별 날씨와 준비해야 할 것들이 궁금합니다.",
        author: "마이클",
        authorId: "user11",
        isPublic: true,
        createdAt: "2023-05-22T11:25:00",
        comments: [],
      },
      {
        id: 12,
        title: "한국어 학습 앱 추천",
        content: "한국어 학습에 도움이 되는 앱을 추천해주세요.",
        author: "엠마",
        authorId: "user12",
        isPublic: true,
        createdAt: "2023-05-25T16:40:00",
        comments: [],
      },
    ];

    setTimeout(() => {
      setPosts(tempPosts);
      setLoading(false);
    }, 500); // 로딩 시뮬레이션
  }, []);

  // 게시글 필터링
  const filteredPosts = posts.filter((post) => {
    if (!isMatched && !post.isPublic) {
      return false; // 매칭되지 않은 사용자는 비공개 게시글 볼 수 없음
    }

    if (filter === "public") {
      return post.isPublic;
    } else if (filter === "private") {
      return !post.isPublic;
    }

    return true;
  });

  // 페이지네이션
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <>
        <Header />
        <TitleNav />
        <main>
          <div className="loading">게시글을 불러오는 중...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!isMatched && !isMentor) {
    return (
      <>
        <Header />
        <TitleNav />
        <main>
          <div className="mentor-board not-matched">
            <div className="board-header">
              <h2>멘토 게시판</h2>
            </div>
            <div className="not-matched-message">
              <p>멘토와 매칭된 후에 게시판을 이용할 수 있습니다.</p>
              <button className="btn">멘토링 신청하기</button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <TitleNav />
      <main>
        <div className="mentor-board">
          <div className="board-header">
            <h2>멘토 게시판</h2>
            <div className="board-controls">
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${filter === "all" ? "active" : ""}`}
                  onClick={() => setFilter("all")}
                >
                  전체
                </button>
                <button
                  className={`filter-btn ${
                    filter === "public" ? "active" : ""
                  }`}
                  onClick={() => setFilter("public")}
                >
                  공개
                </button>
                {(isMatched || isMentor) && (
                  <button
                    className={`filter-btn ${
                      filter === "private" ? "active" : ""
                    }`}
                    onClick={() => setFilter("private")}
                  >
                    비공개
                  </button>
                )}
              </div>
              <button
                className="btn write-btn"
                onClick={() => nav("/board/new")}
              >
                글쓰기
              </button>
            </div>
          </div>

          <div className="board-list">
            <div className="board-list-header">
              <div className="col-visibility">공개</div>
              <div className="col-title">제목</div>
              <div className="col-author">작성자</div>
              <div className="col-date">작성일</div>
              <div className="col-comments">댓글</div>
            </div>

            {currentPosts.length === 0 ? (
              <div className="no-posts">게시글이 없습니다.</div>
            ) : (
              currentPosts.map((post) => (
                <div key={post.id} className="board-list-item">
                  <div className="col-visibility">
                    {post.isPublic ? (
                      <span className="visibility-public">공개</span>
                    ) : (
                      <span className="visibility-private">비공개</span>
                    )}
                  </div>
                  <div className="col-title">
                    <Link to={`/board/page/${post.id}`}>{post.title}</Link>
                  </div>
                  <div className="col-author">{post.author}</div>
                  <div className="col-date">{formatDate(post.createdAt)}</div>
                  <div className="col-comments">{post.comments.length}</div>
                </div>
              ))
            )}
          </div>

          {/* 페이지네이션 */}
          {filteredPosts.length > 0 && (
            <div className="board-pagination">
              <button
                className="pagination-btn"
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    className={`pagination-btn ${
                      currentPage === number ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                className="pagination-btn"
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentorBoard;

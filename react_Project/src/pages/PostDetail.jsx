"use client";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleNav from "../components/TitleNav";
import "../styles/PostDetail.css";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  // 게시글 데이터 로드 (실제 구현에서는 API 호출)
  useEffect(() => {
    // 임시 데이터
    const tempPost = {
      id: 1,
      title: "한국어 학습 자료",
      content: `안녕하세요, 멘티 여러분!

초급 한국어 학습에 도움이 되는 자료들을 공유합니다.

1. 한국어 기초 문법 정리
2. 일상 생활에서 자주 사용하는 표현 100가지
3. 한국어 발음 연습 가이드
4. 초보자를 위한 한국어 학습 앱 추천

자료는 첨부파일을 확인해주세요. 질문이 있으시면 댓글로 남겨주세요.

감사합니다.`,
      author: "김민수 멘토",
      authorId: "mentor1",
      isPublic: true,
      createdAt: "2023-05-01T10:30:00",
      updatedAt: "2023-05-01T10:30:00",
      attachments: [
        {
          id: 1,
          name: "한국어_기초_문법.pdf",
          url: "#",
        },
        {
          id: 2,
          name: "일상_표현_100.docx",
          url: "#",
        },
      ],
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
    };

    setTimeout(() => {
      setPost(tempPost);
      setLoading(false);
    }, 500); // 로딩 시뮬레이션
  }, [postId]);

  // 댓글 추가
  const handleAddComment = (e) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      content: newComment,
      author: "현재 사용자", // 실제 구현에서는 로그인한 사용자 정보 사용
      authorId: "currentUser",
      createdAt: new Date().toISOString(),
    };

    setPost({
      ...post,
      comments: [...post.comments, newCommentObj],
    });

    setNewComment("");
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")} ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
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

  if (!post) {
    return (
      <>
        <Header />
        <TitleNav title="게시글 상세" />
        <main>
          <div className="not-found">게시글을 찾을 수 없습니다.</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <TitleNav title="게시글 상세" />
      <main>
        <div className="post-detail">
          <div className="post-header">
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{formatDate(post.createdAt)}</span>
              <span
                className={`post-visibility ${
                  post.isPublic ? "public" : "private"
                }`}
              >
                {post.isPublic ? "공개" : "비공개"}
              </span>
            </div>
          </div>

          <div className="post-content">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {post.attachments && post.attachments.length > 0 && (
            <div className="post-attachments">
              <h3>첨부파일</h3>
              <ul>
                {post.attachments.map((file) => (
                  <li key={file.id}>
                    <a href={file.url} download>
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="post-actions">
            <Link to="/board/page" className="btn back-btn">
              목록으로
            </Link>
            <div>
              <button className="btn edit-btn">수정</button>
              <button className="btn delete-btn">삭제</button>
            </div>
          </div>

          <div className="post-comments">
            <h3>댓글 ({post.comments.length})</h3>

            {post.comments.length === 0 ? (
              <div className="no-comments">아직 댓글이 없습니다.</div>
            ) : (
              <div className="comments-list">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-date">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <div className="comment-content">{comment.content}</div>
                  </div>
                ))}
              </div>
            )}

            <form className="comment-form" onSubmit={handleAddComment}>
              <textarea
                placeholder="댓글을 작성하세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="btn comment-btn">
                댓글 작성
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostDetail;

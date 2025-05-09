"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleNav from "../components/TitleNav";
import "../styles/WritePost.css";

const WritePost = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    isPublic: true,
    attachments: [],
  });

  // 입력 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPostData({
      ...postData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 파일 첨부 핸들러
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      file: file,
      url: URL.createObjectURL(file),
    }));

    setPostData({
      ...postData,
      attachments: [...postData.attachments, ...newAttachments],
    });
  };

  // 첨부파일 삭제 핸들러
  const handleRemoveAttachment = (id) => {
    setPostData({
      ...postData,
      attachments: postData.attachments.filter(
        (attachment) => attachment.id !== id
      ),
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    // 실제 구현에서는 API 호출로 게시글 저장
    console.log("게시글 작성:", postData);

    // 게시글 목록으로 이동
    navigate("/board/page");
  };

  // 취소 핸들러
  const handleCancel = () => {
    if (
      window.confirm("작성 중인 내용이 저장되지 않습니다. 취소하시겠습니까?")
    ) {
      navigate("/board/page");
    }
  };

  return (
    <>
      <Header />
      <TitleNav />
      <main>
        <div className="write-post">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">제목</label>
              <input
                type="text"
                id="title"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                placeholder="제목을 입력하세요"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">내용</label>
              <textarea
                id="content"
                name="content"
                value={postData.content}
                onChange={handleInputChange}
                placeholder="내용을 입력하세요"
                rows="12"
                required
              ></textarea>
            </div>

            <div className="form-group attachment-group">
              <label>첨부파일</label>
              <div className="file-input-container">
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  multiple
                  className="file-input"
                />
                <label htmlFor="file-input" className="file-input-label">
                  파일 선택
                </label>
                <span className="file-input-text">
                  {postData.attachments.length > 0
                    ? `${postData.attachments.length}개의 파일이 첨부됨`
                    : "첨부된 파일 없음"}
                </span>
              </div>

              {postData.attachments.length > 0 && (
                <ul className="attachment-list">
                  {postData.attachments.map((file) => (
                    <li key={file.id} className="attachment-item">
                      <span className="attachment-name">{file.name}</span>
                      <button
                        type="button"
                        className="attachment-remove"
                        onClick={() => handleRemoveAttachment(file.id)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-group visibility-group">
              <label className="visibility-label">
                <input
                  type="checkbox"
                  name="isPublic"
                  checked={postData.isPublic}
                  onChange={handleInputChange}
                />
                <span>공개 게시글</span>
              </label>
              <p className="visibility-description">
                {postData.isPublic
                  ? "모든 사용자가 게시글을 볼 수 있습니다."
                  : "멘토와 매칭된 멘티만 게시글을 볼 수 있습니다."}
              </p>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn cancel-btn"
                onClick={handleCancel}
              >
                취소
              </button>
              <button type="submit" className="btn submit-btn">
                게시하기
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WritePost;

import "./MentorCard.css";

const MentorCard = ({ mentor }) => {



  return (
    <div className="CardContainer">
      <div key={mentor.id} className="mentor-card">
        <img src={mentor.profileImage} alt="프로필" className="profile-img" />
        <h3>
          {mentor.name} (Lv. {mentor.level})
        </h3>
        <p>도시: {mentor.city.name}</p>
        <p>성별: {mentor.gender}</p>
        <p>
          평점: {mentor.rating} ⭐ ({mentor.reviewCnt}개 리뷰)
        </p>
        <p>설명: {mentor.description}</p>
        <p>과목: {mentor.subjects.map((s) => s.name).join(", ")}</p>
        <p>언어: {mentor.languages.map((l) => l.name).join(", ")}</p>
        <button >신청하기</button>
      </div>
    </div>
  );
};

export default MentorCard;

import "./MentorList.css";

const MentorList = () => {
  const Data = [
    {
      id: 1,
      name: "홍길동",
      city: { name: "서울" },
      subjects: [{ name: "한국어" }, { name: "문화" }],
      rating: 4.5,
      reviewCnt: 12,
      gender: "MALE",
      profileImage: "https://example.com/image.jpg",
      description: "한국 생활을 도와드릴 멘토입니다.",
      level: 3,
      languages: [{ name: "Korean" }, { name: "English" }],
    },
    {
      id: 2,
      name: "홍",
      city: { name: "인천" },
      subjects: [{ name: "한국어" }, { name: "문화" }],
      rating: 3.5,
      reviewCnt: 22,
      gender: "MALE",
      profileImage: "https://example.com/image.jpg",
      description: "hi everyone",
      level: 3,
      languages: [{ name: "Korean" }, { name: "English" }],
    },
    {
      id: 2,
      name: "홍",
      city: { name: "인천" },
      subjects: [{ name: "한국어" }, { name: "문화" }],
      rating: 3.5,
      reviewCnt: 22,
      gender: "MALE",
      profileImage: "https://example.com/image.jpg",
      description: "hi everyone",
      level: 3,
      languages: [{ name: "Korean" }, { name: "English" }],
    },
    {
      id: 2,
      name: "홍",
      city: { name: "인천" },
      subjects: [{ name: "한국어" }, { name: "문화" }],
      rating: 3.5,
      reviewCnt: 22,
      gender: "MALE",
      profileImage: "https://example.com/image.jpg",
      description: "hi everyone",
      level: 3,
      languages: [{ name: "Korean" }, { name: "English" }],
    },
    {
      id: 2,
      name: "홍",
      city: { name: "인천" },
      subjects: [{ name: "한국어" }, { name: "문화" }],
      rating: 3.5,
      reviewCnt: 22,
      gender: "MALE",
      profileImage: "https://example.com/image.jpg",
      description: "hi everyone",
      level: 3,
      languages: [{ name: "Korean" }, { name: "English" }],
    },
    {
      id: 2,
      name: "홍",
      city: { name: "인천" },
      subjects: [{ name: "한국어" }, { name: "문화" }],
      rating: 3.5,
      reviewCnt: 22,
      gender: "MALE",
      profileImage: "https://example.com/image.jpg",
      description: "hi everyone",
      level: 3,
      languages: [{ name: "Korean" }, { name: "English" }],
    },
  ];

  return (
    <div className="CardContainer">
      {Data.map((mentor) => (
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
        </div>
      ))}
    </div>
  );
};

export default MentorList;

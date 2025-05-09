import "./MentorList.css";
import MentorCard from "./MentorCard";
import { MentorInfoContext } from "../App";
import { useContext } from "react";

const MentorList = ({ filters }) => {
  const Data = useContext(MentorInfoContext);
  let filtered = [...Data];
  const { searchTerm, area, keyword } = filters;

  if (searchTerm) {
    filtered = filtered.filter((m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (area) {
    filtered = filtered.filter((m) => m.city.name === area);
  }

  if (keyword) {
    filtered = filtered.filter((m) =>
      m.subjects.some((s) => s.name.includes(keyword))
    );
  }

  return (
    <div className="mentor-list">
      <h2>멘토 목록 ({filtered.length}명)</h2>
      <div className="mentor-grid">
        {filtered.map((mentor) => (
          <MentorCard key={mentor.id + Math.random()} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorList;

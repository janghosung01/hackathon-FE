import "./MentorList.css";
import MentorCard from "./MentorCard";
import { MentorInfoContext } from "../App";
import { useContext } from "react";

const MentorList = () => {
  const Data = useContext(MentorInfoContext);

  return (
    <div className="mentor-list">
      <h2>멘토 목록 ({Data.length}명)</h2>
      <div className="mentor-grid">
        {Data.map((mentor) => (
          <MentorCard key={mentor.id + Math.random()} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorList;

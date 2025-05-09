import {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("")
  const [mentees, setMentees] = useState([]);;
  const [formData, setFormData] = useState({
    menteeId: "",
    title: "",
    startAt: ""
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/mentors/mentees")
        .then((res) => res.json())
        .then((data) => {
          setMentees(data);
        })
        .catch((error) => {
          console.error("멘티 목록 조회 실패:", error);
        });
  }, []);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  return (
    <div className="calendar">
      <h2>멘토링 일정 캘린더</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="ko" // 한국어로 설정
        events={events}
        dateClick={handleDateClick}
        height="auto"
        aspectRatio={1.0}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>일정 추가</h2>
            <form className="form-group">
              <label>제목</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <label>멘티 선택</label>
              <select
                  value={formData.menteeId}
                  onChange={(e) =>
                      setFormData({ ...formData, menteeId: e.target.value })
                  }
              >
                <option value="">-- 멘티 선택 --</option>
                {mentees.map((mentee) => (
                    <option key={mentee.id} value={mentee.id}>
                      {mentee.name}
                    </option>
                ))}
              </select>

              <label>시작 시간</label>
              <input
                type="time"
                value={formData.startAt}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: e.target.value })
                }
              />

              <label>날짜</label>
              <input type="text" value={selectedDate} disabled />

              <div className="modal-buttons">
                <button
                  className="submit-btn"
                  onClick={() => setShowModal(false)}
                >
                  취소
                </button>
                <button
                  className="submit-btn"
                  onClick={() => {
                    setEvents((prev) => [
                      ...prev,
                      {
                        title: `${formData.title}`,
                        start: `${selectedDate}T${formData.startAt}`,
                      },
                    ]);
                    // 초기화
                    setShowModal(false);
                    setFormData({
                      title: "",
                      menteeId: "",
                      startAt: "",
                      date: "",
                    });
                  }}
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

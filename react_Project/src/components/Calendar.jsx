import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    menteeName: "",
    startTime: "",
    date: "",
  });

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

              <label>멘티 이름</label>
              <input
                type="text"
                value={formData.menteeName}
                onChange={(e) =>
                  setFormData({ ...formData, menteeName: e.target.value })
                }
              />

              <label>시작 시간</label>
              <input
                type="time"
                value={formData.startTime}
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
                        start: `${selectedDate}T${formData.startTime}`,
                      },
                    ]);
                    // 초기화
                    setShowModal(false);
                    setFormData({
                      title: "",
                      menteeName: "",
                      startTime: "",
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

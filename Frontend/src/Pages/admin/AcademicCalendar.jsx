import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function AcademicCalendar() {
  return (
    <>
      <Navbar />

      <div className="calendar-dashboard">
        {/* HEADER */}
        <div className="calendar-header">
          <h2>Academic Calendar 📅</h2>
          <p>Quick overview of important academic events and schedules</p>
        </div>

        {/* TOP STATS */}
        <div className="calendar-stats">
          <div className="stat-card blue">
            <h4>Semester Duration</h4>
            <h1>90 Days</h1>
            <p>June – November</p>
          </div>

          <div className="stat-card pink">
            <h4>Upcoming Exams</h4>
            <h1>3</h1>
            <p>Mid & Final Exams</p>
          </div>

          <div className="stat-card green">
            <h4>Total Holidays</h4>
            <h1>12</h1>
            <p>Govt & Festival</p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="calendar-content">
          {/* TODAY'S FOCUS */}
          <div className="calendar-card">
            <h3>🎯 Academic Focus</h3>
            <ul>
              <li>📌 Semester Commencement – June 10</li>
              <li>📝 Mid Exams – August 20</li>
              <li>🎓 Final Exams – November 5</li>
            </ul>
          </div>

          {/* UPCOMING DEADLINES */}
          <div className="calendar-card">
            <h3>⏰ Upcoming Academic Events</h3>
            <ul>
              <li>
                <strong>DBMS Lab Exam</strong>
                <span>Aug 18</span>
              </li>
              <li>
                <strong>Project Review</strong>
                <span>Sep 10</span>
              </li>
              <li>
                <strong>End Semester Exams</strong>
                <span>Nov 5</span>
              </li>
            </ul>
          </div>

          {/* PROGRESS */}
          <div className="calendar-card">
            <h3>📊 Semester Progress</h3>

            <div className="progress-block">
              <label>Instruction Completion</label>
              <div className="progress-bar">
                <span style={{ width: "75%" }}></span>
              </div>
              <small>Good progress</small>
            </div>

            <div className="progress-block">
              <label>Exam Readiness</label>
              <div className="progress-bar">
                <span style={{ width: "60%" }}></span>
              </div>
              <small>Needs revision</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

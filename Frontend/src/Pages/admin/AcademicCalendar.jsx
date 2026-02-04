import Navbar from "../../components/common/Navbar";
import "./adminPage.css";

export default function AcademicCalendar() {
  return (
    <>
      <Navbar />

      <div className="admin-page">
        <h2 className="admin-header">Academic Calendar</h2>

        {/* Calendar Cards */}
        <div className="calendar-grid">
          <div className="calendar-card">
            <div className="calendar-date">June 10, 2026</div>
            <div className="calendar-title">Semester Begins</div>
            <span className="calendar-status status-upcoming">Upcoming</span>
          </div>

          <div className="calendar-card">
            <div className="calendar-date">August 20, 2026</div>
            <div className="calendar-title">Mid Semester Exams</div>
            <span className="calendar-status status-active">Scheduled</span>
          </div>

          <div className="calendar-card">
            <div className="calendar-date">November 5, 2026</div>
            <div className="calendar-title">Final Exams</div>
            <span className="calendar-status status-complete">Planned</span>
          </div>
        </div>

        {/* Actions */}
        <div className="calendar-actions">
          <button className="admin-btn primary">➕ Add Event</button>
          <button className="admin-btn secondary">📅 View Full Calendar</button>
        </div>

        {/* Timeline */}
        <div className="calendar-timeline">
          <div className="timeline-item">
            <h4>Orientation Program</h4>
            <span>June 5, 2026</span>
          </div>

          <div className="timeline-item">
            <h4>Semester Start</h4>
            <span>June 10, 2026</span>
          </div>

          <div className="timeline-item">
            <h4>Mid Exams</h4>
            <span>August 20, 2026</span>
          </div>

          <div className="timeline-item">
            <h4>Final Exams</h4>
            <span>November 5, 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}

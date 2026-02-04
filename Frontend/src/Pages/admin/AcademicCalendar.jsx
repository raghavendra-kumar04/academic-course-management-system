import Navbar from "../../components/common/Navbar";
import "./academicCalendar.css";

export default function AcademicCalendar() {
  return (
    <>
      <Navbar />
      <div className="academic-page">
        <h2 className="academic-header">📅 Academic Calendar</h2>
        <p className="academic-subtitle">
          Stay updated with important academic events, exam schedules, and semester milestones.
        </p>

        <div className="calendar-grid">
          <div className="calendar-card">
            <h3>🎒 Semester Timeline</h3>
            <ul>
              <li>
                <span>Semester Start</span>
                <strong>June 10</strong>
              </li>
              <li>
                <span>Mid Exams</span>
                <strong>August 20</strong>
              </li>
              <li>
                <span>Final Exams</span>
                <strong>November 5</strong>
              </li>
            </ul>
          </div>

          <div className="calendar-card highlight">
            <h3>📢 Important Notices</h3>
            <p>
              • Exam forms must be submitted at least <b>10 days before exams</b>.
            </p>
            <p>
              • Late submissions may lead to <b>penalties or disqualification</b>.
            </p>
            <p>
              • Always check your department notice board for updates.
            </p>
          </div>

          <div className="calendar-card">
            <h3>⏰ Upcoming Deadlines</h3>
            <div className="deadline">
              <span>Course Registration</span>
              <strong>May 30</strong>
            </div>
            <div className="deadline">
              <span>Project Submission</span>
              <strong>October 10</strong>
            </div>
          </div>

          <div className="calendar-card tips">
            <h3>💡 Student Tips</h3>
            <ul>
              <li>Plan your study schedule early</li>
              <li>Keep reminders for exam forms</li>
              <li>Don’t wait till the last week to revise</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

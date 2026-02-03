import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function AcademicCalendar() {
  return (
    <>
      <Navbar />
      <div className="admin-page">
        <h2 className="admin-header">Academic Calendar</h2>

        <div className="admin-card">
          <ul>
            <li>📌 Semester Start – June 10</li>
            <li>📝 Mid Exams – August 20</li>
            <li>🎓 Final Exams – November 5</li>
          </ul>
        </div>
      </div>
    </>
  );
}
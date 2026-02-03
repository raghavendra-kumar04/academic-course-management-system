import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import "./teacher.css";

export default function TeacherDashboard() {
  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Teacher Dashboard</h2>

        {/* Top Stats */}
        <div className="dashboard-stats">
          <div className="mini-card">📚 Courses: 3</div>
          <div className="mini-card">👨‍🎓 Students: 165</div>
          <div className="mini-card">📝 Pending Reviews: 4</div>
          <div className="mini-card">✅ Graded: 28</div>
        </div>

        {/* Analytics Section */}
        <div className="analytics-grid">

          {/* Student Status */}
          <div className="card">
            <h3>Student Submission Status</h3>

            <div className="pie-row">
              <div className="pie pending"></div>
              <div className="legend">
                <p><span className="dot purple" /> Graded – 70%</p>
                <p><span className="dot orange" /> Pending – 30%</p>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="card">
            <h3>Student Performance</h3>

            <div className="pie-row">
              <div className="pie performance"></div>
              <div className="legend">
                <p><span className="dot green" /> High – 45%</p>
                <p><span className="dot blue" /> Average – 35%</p>
                <p><span className="dot red" /> Low – 20%</p>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="card-grid">

          <div className="card">
            <h3>📘 My Courses</h3>
            <p>Manage your subjects</p>
            <Link to="/teacher/courses">
              <button className="btn btn-primary">Courses</button>
            </Link>
          </div>

          <div className="card">
            <h3>📝 Create Assignment</h3>
            <p>Assign new work</p>
            <Link to="/teacher/create-assignment">
              <button className="btn btn-primary">Create</button>
            </Link>
          </div>

          <div className="card">
            <h3>📥 Submissions</h3>
            <p>Review student work</p>
            <Link to="/teacher/submissions">
              <button className="btn btn-primary">Submissions</button>
            </Link>
          </div>

          <div className="card">
            <h3>🧮 Grade Entry</h3>
            <p>Evaluate students</p>
            <Link to="/teacher/grade-entry">
              <button className="btn btn-primary">Grades</button>
            </Link>
          </div>

        </div>

      </div>
    </>
  );
}

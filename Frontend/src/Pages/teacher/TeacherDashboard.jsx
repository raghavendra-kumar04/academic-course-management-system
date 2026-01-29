import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import "./teacher.css";

export default function TeacherDashboard() {
  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Teacher Dashboard</h2>

        {/* Overview Cards */}
        <div className="card-grid">
          <div className="card">
            <h3>📘 My Courses</h3>
            <p>View and manage courses you teach</p>
            <Link to="/teacher/courses">
              <button className="btn btn-primary">Manage Courses</button>
            </Link>
          </div>

          <div className="card">
            <h3>📝 Create Assignment</h3>
            <p>Create and assign work to students</p>
            <Link to="/teacher/create-assignment">
              <button className="btn btn-primary">Create</button>
            </Link>
          </div>

          <div className="card">
            <h3>📥 Submissions</h3>
            <p>Review and evaluate student submissions</p>
            <Link to="/teacher/submissions">
              <button className="btn btn-primary">View Submissions</button>
            </Link>
          </div>

          <div className="card">
            <h3>🧮 Grade Entry</h3>
            <p>Assign grades and feedback</p>
            <Link to="/teacher/grade-entry">
              <button className="btn btn-primary">Enter Grades</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

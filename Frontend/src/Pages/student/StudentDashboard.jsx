import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />
      <div className="student-page">
        <h2 className="student-header">Student Dashboard</h2>

        <div className="card-grid">
          <div className="card">
            <h3>📚 Enrolled Courses</h3>
            <p>6 Active Courses</p>
          </div>
          <div className="card">
            <h3>📝 Assignments</h3>
            <p>3 Pending</p>
          </div>
          <div className="card">
            <h3>📊 Average Grade</h3>
            <p>82%</p>
          </div>
        </div>
      </div>
    </>
  );
}
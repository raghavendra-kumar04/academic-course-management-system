import Navbar from "../../components/common/Navbar";
import "./studentDashboard.css";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />

      <div className="student-page">
        <h2 className="student-header">Student Dashboard</h2>

        {/* Stats */}
        <div className="card-grid">
          <div className="card stat-card">
            <h3>Enrolled Courses</h3>
            <p className="stat">6</p>
          </div>

          <div className="card stat-card">
            <h3>Pending Assignments</h3>
            <p className="stat">3</p>
          </div>

          <div className="card stat-card">
            <h3>Average Grade</h3>
            <p className="stat">82%</p>
          </div>
        </div>

        {/* Dashboard Main Grid */}
        <div className="dashboard-grid">

          {/* Recent Assignments */}
          <div className="card">
            <h3>Recent Assignments</h3>

            <ul className="list">
              <li>DBMS Lab Report – Due Tomorrow</li>
              <li>OS Mini Project – Feb 5</li>
              <li>React Quiz – Feb 8</li>
            </ul>
          </div>

          {/* Course Progress */}
          <div className="card">
            <h3>Course Progress</h3>

            <div className="progress-item">
              <span>Web Development</span>
              <div className="progress-bar"><div style={{width:"70%"}} /></div>
            </div>

            <div className="progress-item">
              <span>DBMS</span>
              <div className="progress-bar"><div style={{width:"55%"}} /></div>
            </div>

            <div className="progress-item">
              <span>Operating Systems</span>
              <div className="progress-bar"><div style={{width:"62%"}} /></div>
            </div>
          </div>

          {/* Announcements */}
          <div className="card">
            <h3>Announcements</h3>

            <p>📢 Internal exams start Feb 12</p>
            <p>📢 Project submission Feb 10</p>
          </div>

        </div>
      </div>
    </>
  );
}

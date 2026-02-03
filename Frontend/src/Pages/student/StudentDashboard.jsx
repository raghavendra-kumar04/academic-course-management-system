import Navbar from "../../components/common/Navbar";
import "./studentDashboard.css";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />

      <div className="student-page">
        {/* Header */}
        <h2 className="student-header">Welcome back, Student 👋</h2>
        <p className="page-subtitle">
          Here’s a quick overview of your academic progress and upcoming tasks.
        </p>

        {/* Stats */}
        <div className="card-grid">
          <div className="card stat-card">
            <h3>📚 Enrolled Courses</h3>
            <p className="stat">6</p>
            <span className="stat-desc">Core & elective subjects</span>
          </div>

          <div className="card stat-card">
            <h3>📝 Pending Assignments</h3>
            <p className="stat">3</p>
            <span className="stat-desc">2 due this week</span>
          </div>

          <div className="card stat-card">
            <h3>📊 Average Grade</h3>
            <p className="stat">82%</p>
            <span className="stat-desc">Above class average</span>
          </div>
        </div>

        {/* Dashboard Main Grid */}
        <div className="dashboard-grid">

          {/* Today's Focus */}
          <div className="card">
            <h3>🎯 Today’s Focus</h3>
            <ul className="list">
              <li>📌 Complete DBMS Lab Report</li>
              <li>📖 Revise OS Scheduling Algorithms</li>
              <li>🧪 Prepare for Web Dev Viva</li>
            </ul>
          </div>

          {/* Recent Assignments */}
          <div className="card">
            <h3>🕒 Upcoming Deadlines</h3>
            <ul className="list">
              <li>
                <b>DBMS Lab Report</b>
                <br />
                <span className="danger-text">Due Tomorrow</span>
              </li>
              <li>
                <b>OS Mini Project</b>
                <br />
                <span className="warning-text">Due Feb 5</span>
              </li>
              <li>
                <b>React Quiz</b>
                <br />
                <span className="muted">Due Feb 8</span>
              </li>
            </ul>
          </div>

          {/* Course Progress */}
          <div className="card">
            <h3>📈 Course Progress</h3>

            <div className="progress-item">
              <span>Web Development</span>
              <div className="progress-bar">
                <div style={{ width: "70%" }} />
              </div>
              <small className="muted">Good consistency</small>
            </div>

            <div className="progress-item">
              <span>DBMS</span>
              <div className="progress-bar">
                <div style={{ width: "55%" }} />
              </div>
              <small className="warning-text">Needs more practice</small>
            </div>

            <div className="progress-item">
              <span>Operating Systems</span>
              <div className="progress-bar">
                <div style={{ width: "62%" }} />
              </div>
              <small className="muted">Steady progress</small>
            </div>
          </div>

          {/* Announcements */}
          <div className="card">
            <h3>📢 Announcements</h3>
            <p>🗓 Internal exams start from <b>Feb 12</b></p>
            <p>📂 Project submission deadline <b>Feb 10</b></p>
            <p>🔔 Attendance shortage list will be released soon</p>
          </div>

        </div>
      </div>
    </>
  );
}

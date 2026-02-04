import Navbar from "../../components/common/Navbar";
import "./adminDashboard.css";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <h2 className="dashboard-header">📊 Admin Dashboard</h2>
        <p className="dashboard-subtitle">
          Quick overview of platform activity, system health, and recent updates.
        </p>

        {/* Stats */}
        <div className="dashboard-grid">
          <div className="dashboard-card stat">
            <h3>👥 Total Users</h3>
            <p className="stat-number">1,240</p>
            <span className="stat-label">+24 this week</span>
          </div>

          <div className="dashboard-card stat">
            <h3>📚 Active Courses</h3>
            <p className="stat-number">82</p>
            <span className="stat-label">5 newly added</span>
          </div>

          <div className="dashboard-card stat">
            <h3>👩‍🏫 Teachers</h3>
            <p className="stat-number">48</p>
            <span className="stat-label">2 pending approvals</span>
          </div>

          <div className="dashboard-card stat">
            <h3>🎓 Students</h3>
            <p className="stat-number">1,110</p>
            <span className="stat-label">87 enrolled today</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="dashboard-grid two-col">
          <div className="dashboard-card activity">
            <h3>🕒 Recent Activity</h3>
            <ul>
              <li>✅ New course <b>"AI Basics"</b> added</li>
              <li>👩‍🎓 12 students enrolled in <b>Web Development</b></li>
              <li>👨‍🏫 Teacher <b>Rahul</b> updated syllabus</li>
              <li>⚠️ Server maintenance scheduled for tonight</li>
            </ul>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="dashboard-actions">
          <button className="dash-btn primary">➕ Add New Course</button>
          <button className="dash-btn">👤 Add User</button>
          <button className="dash-btn">📢 Send Announcement</button>
        </div>
      </div>
    </>
  );
}

import Navbar from "../../components/common/Navbar";
import "./adminPage.css";
import { useState } from "react";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <div className="admin-page">
        <h2 className="admin-header">Admin Dashboard</h2>

        {/* Toolbar */}
        <div className="admin-toolbar">
          <input
            className="admin-search"
            placeholder="Search users / courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="admin-actions">
            <button className="admin-btn primary">➕ Add User</button>
            <button className="admin-btn secondary">📚 Add Course</button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="admin-grid">
          <div className="admin-card">
            <h3>👥 Total Users</h3>
            <p>1,240</p>
          </div>

          <div className="admin-card">
            <h3>📚 Courses</h3>
            <p>82</p>
          </div>

          <div className="admin-card">
            <h3>👩‍🏫 Teachers</h3>
            <p>48</p>
          </div>

          <div className="admin-card">
            <h3>🎓 Students</h3>
            <p>1,110</p>
          </div>
        </div>

        {/* Recent Users Table */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ravi Kumar</td>
              <td>Student</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>Priya Sharma</td>
              <td>Teacher</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>Arjun Reddy</td>
              <td>Student</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>

        {/* Activity Section */}
        <div className="admin-activity">
          <h4>📌 Recent Activity</h4>

          <div className="activity-item">✅ New student registered</div>
          <div className="activity-item">📚 Course "React Basics" added</div>
          <div className="activity-item">👩‍🏫 Teacher account approved</div>
        </div>
      </div>
    </>
  );
}

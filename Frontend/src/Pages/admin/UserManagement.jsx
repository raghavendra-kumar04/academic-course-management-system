import Navbar from "../../components/common/Navbar";
import "./adminPage.css";
import { useState } from "react";

export default function UserManagement() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <div className="admin-page">
        <h2 className="admin-header">User Management</h2>

        {/* Toolbar */}
        <div className="admin-toolbar">
          <input
            className="admin-search"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="admin-actions">
            <button className="admin-btn primary">➕ Add User</button>
          </div>
        </div>

        {/* Users Table */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ravi Kumar</td>
              <td>Student</td>
              <td>
                <span className="user-status status-active">Active</span>
              </td>
              <td className="user-actions">
                <button className="admin-btn secondary">View</button>
                <button className="admin-btn primary">Disable</button>
                <button className="admin-btn secondary">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Anita Sharma</td>
              <td>Teacher</td>
              <td>
                <span className="user-status status-disabled">Disabled</span>
              </td>
              <td className="user-actions">
                <button className="admin-btn secondary">View</button>
                <button className="admin-btn primary">Enable</button>
                <button className="admin-btn secondary">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Arjun Reddy</td>
              <td>Student</td>
              <td>
                <span className="user-status status-active">Active</span>
              </td>
              <td className="user-actions">
                <button className="admin-btn secondary">View</button>
                <button className="admin-btn primary">Disable</button>
                <button className="admin-btn secondary">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Activity */}
        <div className="admin-activity">
          <h4>📌 User Activity</h4>

          <div className="activity-item">👤 New student added</div>
          <div className="activity-item">🚫 Teacher account disabled</div>
          <div className="activity-item">🗑 User removed</div>
        </div>
      </div>
    </>
  );
}

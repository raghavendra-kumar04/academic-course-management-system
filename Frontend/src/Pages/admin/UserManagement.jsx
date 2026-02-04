import Navbar from "../../components/common/Navbar";
import "./userManagement.css";

export default function UserManagement() {
  return (
    <>
      <Navbar />
      <div className="users-page">
        <h2 className="users-header">👥 User Management</h2>
        <p className="users-subtitle">
          Manage platform users, roles, access status, and permissions.
        </p>

        <div className="users-toolbar">
          <input
            type="text"
            placeholder="🔍 Search users by name or role..."
            className="users-search"
          />
          <div className="users-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Students</button>
            <button className="filter-btn">Teachers</button>
            <button className="filter-btn">Admins</button>
          </div>
        </div>

        <div className="users-card">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="user-cell">
                    <div className="avatar">R</div>
                    Ravi Kumar
                  </div>
                </td>
                <td>Student</td>
                <td>
                  <span className="status-badge active">Active</span>
                </td>
                <td>2 hours ago</td>
                <td>
                  <div className="user-actions">
                    <button className="user-btn warn">Disable</button>
                    <button className="user-btn">View</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="user-cell">
                    <div className="avatar">A</div>
                    Anita Sharma
                  </div>
                </td>
                <td>Teacher</td>
                <td>
                  <span className="status-badge active">Active</span>
                </td>
                <td>Yesterday</td>
                <td>
                  <div className="user-actions">
                    <button className="user-btn warn">Disable</button>
                    <button className="user-btn">View</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="user-cell">
                    <div className="avatar">S</div>
                    Sunil Verma
                  </div>
                </td>
                <td>Student</td>
                <td>
                  <span className="status-badge blocked">Blocked</span>
                </td>
                <td>5 days ago</td>
                <td>
                  <div className="user-actions">
                    <button className="user-btn primary">Enable</button>
                    <button className="user-btn">View</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

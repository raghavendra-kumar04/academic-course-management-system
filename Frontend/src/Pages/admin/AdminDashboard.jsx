import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="admin-page">
        <h2 className="admin-header">Admin Dashboard</h2>

        <div className="admin-grid">
          <div className="admin-card">
            <h3>👥 Total Users</h3>
            <p>1,240</p>
          </div>
          <div className="admin-card">
            <h3>📚 Courses</h3>
            <p>82 Active</p>
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
      </div>
    </>
  );
}
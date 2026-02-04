import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function Reports() {
  return (
    <>
      <Navbar />
      <div className="admin-page">
        <h2 className="admin-header">Reports & Analytics</h2>

        <div className="admin-grid">
          <div className="admin-card">
            <h3>📊 Student Performance</h3>
            <button className="admin-btn primary">Download PDF</button>
          </div>
          <div className="admin-card">
            <h3>📈 Course Completion</h3>
            <button className="admin-btn primary">Download Excel</button>
          </div>
        </div>
      </div>
    </>
  );
}
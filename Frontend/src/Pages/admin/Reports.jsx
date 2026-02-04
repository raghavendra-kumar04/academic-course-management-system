import Navbar from "../../components/common/Navbar";
import "./adminPage.css";
import { useState } from "react";

export default function Reports() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <div className="admin-page">
        <h2 className="admin-header">Reports & Analytics</h2>

        {/* Toolbar */}
        <div className="admin-toolbar">
          <input
            className="admin-search"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="admin-actions">
            <button className="admin-btn primary">Generate Report</button>
          </div>
        </div>

        {/* Stats */}
        <div className="admin-grid">
          <div className="admin-card">
            <h3>👨‍🎓 Total Students</h3>
            <p>1,110</p>
          </div>

          <div className="admin-card">
            <h3>📚 Active Courses</h3>
            <p>82</p>
          </div>

          <div className="admin-card">
            <h3>✅ Completion Rate</h3>
            <p>78%</p>
          </div>

          <div className="admin-card">
            <h3>⭐ Avg Rating</h3>
            <p>4.5</p>
          </div>
        </div>

        {/* Reports */}
        <div className="report-grid">
          <div className="report-card">
            <h4>📊 Student Performance</h4>

            <div className="progress-bar">
              <span style={{ width: "75%" }}></span>
            </div>

            <div className="course-actions">
              <button className="admin-btn secondary">PDF</button>
              <button className="admin-btn primary">Excel</button>
            </div>
          </div>

          <div className="report-card">
            <h4>📈 Course Completion</h4>

            <div className="progress-bar">
              <span style={{ width: "65%" }}></span>
            </div>

            <div className="course-actions">
              <button className="admin-btn secondary">PDF</button>
              <button className="admin-btn primary">Excel</button>
            </div>
          </div>

          <div className="report-card">
            <h4>👩‍🏫 Teacher Activity</h4>

            <div className="progress-bar">
              <span style={{ width: "82%" }}></span>
            </div>

            <div className="course-actions">
              <button className="admin-btn secondary">CSV</button>
              <button className="admin-btn primary">Excel</button>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="admin-activity">
          <h4>📌 Report History</h4>

          <div className="activity-item">📄 Student Report generated</div>
          <div className="activity-item">📈 Completion analytics exported</div>
          <div className="activity-item">👩‍🏫 Teacher report downloaded</div>
        </div>
      </div>
    </>
  );
}

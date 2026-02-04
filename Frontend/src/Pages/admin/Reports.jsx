import Navbar from "../../components/common/Navbar";
import "./reports.css";

export default function Reports() {
  return (
    <>
      <Navbar />
      <div className="reports-page">
        <h2 className="reports-header">📊 Reports & Analytics</h2>
        <p className="reports-subtitle">
          Download performance reports, track course engagement, and monitor platform growth.
        </p>

        <div className="reports-filters">
          <button className="report-filter active">This Month</button>
          <button className="report-filter">Last 3 Months</button>
          <button className="report-filter">This Year</button>
        </div>

        <div className="reports-grid">
          <div className="report-card">
            <div className="report-top">
              <h3>🎓 Student Performance</h3>
              <span className="tag success">High Impact</span>
            </div>
            <p className="report-desc">
              Includes grades distribution, attendance trends, and top-performing students.
            </p>

            <div className="report-actions">
              <button className="report-btn primary">⬇ Download PDF</button>
              <button className="report-btn">📄 Preview</button>
            </div>
          </div>

          <div className="report-card">
            <div className="report-top">
              <h3>📈 Course Completion</h3>
              <span className="tag warning">Needs Review</span>
            </div>
            <p className="report-desc">
              Analyze course-wise completion rates, drop-offs, and engagement time.
            </p>

            <div className="report-actions">
              <button className="report-btn primary">⬇ Download Excel</button>
              <button className="report-btn">📄 Preview</button>
            </div>
          </div>

          <div className="report-card">
            <div className="report-top">
              <h3>👥 User Growth</h3>
              <span className="tag info">Trending</span>
            </div>
            <p className="report-desc">
              Track new registrations, active users, and churn rate over time.
            </p>

            <div className="report-actions">
              <button className="report-btn primary">⬇ Download CSV</button>
              <button className="report-btn">📄 Preview</button>
            </div>
          </div>

          <div className="report-card highlight">
            <h3>🚀 Quick Insights</h3>
            <ul>
              <li>✔ 18% increase in course enrollments</li>
              <li>✔ Average completion rate: 72%</li>
              <li>⚠ 3 courses below 40% completion</li>
              <li>✔ Peak activity: 7–9 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

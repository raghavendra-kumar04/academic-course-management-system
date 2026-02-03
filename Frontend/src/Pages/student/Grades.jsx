import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function Grades() {
  return (
    <>
      <Navbar />

      <div className="student-page">
        {/* Header */}
        <h2 className="student-header">Academic Performance</h2>
        <p className="page-subtitle">
          Review your grades, progress trends, and subject-wise performance.
        </p>

        {/* Performance Summary */}
        <div className="card-grid">
          <div className="card stat-card">
            <h3>📊 Overall GPA</h3>
            <p className="stat">8.4</p>
            <span className="stat-desc">Consistent performance</span>
          </div>

          <div className="card stat-card">
            <h3>🏆 Best Subject</h3>
            <p className="stat">DBMS</p>
            <span className="stat-desc">Strong fundamentals</span>
          </div>

          <div className="card stat-card">
            <h3>📉 Needs Improvement</h3>
            <p className="stat">ML</p>
            <span className="stat-desc">Focus on practice</span>
          </div>
        </div>

        {/* Grades Table */}
        <div className="card">
          <h3>📚 Course-wise Grades</h3>

          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
                <th>Remarks</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Database Management Systems</td>
                <td>
                  <span className="badge badge-success">A</span>
                </td>
                <td>Excellent conceptual clarity</td>
              </tr>

              <tr>
                <td>Machine Learning</td>
                <td>
                  <span className="badge badge-warning">B+</span>
                </td>
                <td>Needs improvement in algorithms</td>
              </tr>

              <tr>
                <td>Operating Systems</td>
                <td>
                  <span className="badge badge-success">A-</span>
                </td>
                <td>Good understanding of processes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Performance Trend Visualization */}
        <div className="card">
          <h3>📈 Performance Trend</h3>

          <div className="progress-item">
            <span>DBMS</span>
            <div className="progress-bar">
              <div style={{ width: "88%" }} />
            </div>
            <small className="muted">Consistently high scores</small>
          </div>

          <div className="progress-item">
            <span>Operating Systems</span>
            <div className="progress-bar">
              <div style={{ width: "80%" }} />
            </div>
            <small className="muted">Stable improvement</small>
          </div>

          <div className="progress-item">
            <span>Machine Learning</span>
            <div className="progress-bar">
              <div style={{ width: "72%" }} />
            </div>
            <small className="warning-text">Practice recommended</small>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="card info-card">
          <h3>🧠 Performance Insights</h3>
          <ul className="list">
            <li>✔ Strong theoretical understanding in core subjects</li>
            <li>✔ Practical implementation skills are improving</li>
            <li>⚠ Focus more on problem-solving in ML</li>
            <li>📌 Consistency is the key to scoring higher GPA</li>
          </ul>
        </div>
      </div>
    </>
  );
}

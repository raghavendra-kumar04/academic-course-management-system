import Navbar from "../../components/common/Navbar";
import { Link } from "react-router-dom";
import "./student.css";

export default function Assignments() {
  return (
    <>
      <Navbar />

      <div className="student-page">
        {/* Header */}
        <h2 className="student-header">Assignments</h2>
        <p className="page-subtitle">
          Track all your academic assignments, deadlines, and submission status.
        </p>

        {/* Assignment Summary */}
        <div className="card-grid">
          <div className="card stat-card">
            <h3>📝 Total Assignments</h3>
            <p className="stat">8</p>
            <span className="stat-desc">This semester</span>
          </div>

          <div className="card stat-card">
            <h3>⏳ Pending</h3>
            <p className="stat">3</p>
            <span className="stat-desc">Require submission</span>
          </div>

          <div className="card stat-card">
            <h3>✅ Submitted</h3>
            <p className="stat">5</p>
            <span className="stat-desc">Awaiting evaluation</span>
          </div>
        </div>

        {/* Assignments Table */}
        <div className="card">
          <h3>📚 Assignment List</h3>

          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>DBMS</td>
                <td>
                  Normalization & Indexing
                  <br />
                  <small className="muted">Lab Assignment – 2</small>
                </td>
                <td>
                  <span className="danger-text">20 Feb</span>
                </td>
                <td>
                  <span className="badge badge-warning">Pending</span>
                </td>
                <td>
                  <Link to="/student/submit">
                    <button className="btn btn-primary">Submit</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>Operating Systems</td>
                <td>
                  Process Scheduling
                  <br />
                  <small className="muted">Mini Project</small>
                </td>
                <td>18 Feb</td>
                <td>
                  <span className="badge badge-success">Submitted</span>
                </td>
                <td>
                  <button className="btn btn-disabled" disabled>
                    Submitted
                  </button>
                </td>
              </tr>

              <tr>
                <td>Web Development</td>
                <td>
                  React State & Props
                  <br />
                  <small className="muted">Quiz Assignment</small>
                </td>
                <td>25 Feb</td>
                <td>
                  <span className="badge badge-info">Upcoming</span>
                </td>
                <td>
                  <Link to="/student/submit">
                    <button className="btn">View</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info Section */}
        <div className="card info-card">
          <h3>ℹ️ Submission Guidelines</h3>
          <ul className="list">
            <li>✔ Upload assignments in PDF or DOC format only</li>
            <li>✔ Late submissions may attract grade penalties</li>
            <li>✔ Only the latest submission will be evaluated</li>
            <li>✔ Ensure file name includes your Roll Number</li>
          </ul>
        </div>
      </div>
    </>
  );
}

import Navbar from "../../components/common/Navbar";
import "./teacher.css";

export default function Submissions() {
  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Student Submissions</h2>

        {/* Toolbar */}
        <div className="submission-toolbar">
          <input
            className="input"
            placeholder="Search student..."
          />

          <select className="input" style={{ maxWidth: "180px" }}>
            <option>All</option>
            <option>Pending</option>
            <option>Graded</option>
          </select>
        </div>

        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Assignment</th>
                <th>Submitted On</th>
                <th>File</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>DBMS</td>
                <td>Normalization Assignment</td>
                <td>18 Feb 2026</td>
                <td>
                  <a href="#" className="file-link">
                    download.pdf
                  </a>
                </td>
                <td>
                  <span className="status-pending">Pending</span>
                </td>
                <td>
                  <button className="btn btn-primary">
                    Evaluate
                  </button>
                </td>
              </tr>

              <tr>
                <td>Anita Verma</td>
                <td>Machine Learning</td>
                <td>Linear Regression</td>
                <td>17 Feb 2026</td>
                <td>
                  <a href="#" className="file-link">
                    assignment.docx
                  </a>
                </td>
                <td>
                  <span className="status-graded">Graded</span>
                </td>
                <td>
                  <button className="btn btn-outline">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

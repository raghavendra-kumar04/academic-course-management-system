import Navbar from "../../components/common/Navbar";
import { useState } from "react";
import "./teacher.css";

export default function GradeEntry() {
  const [grade, setGrade] = useState("");
  const [marks, setMarks] = useState("");
  const [remarks, setRemarks] = useState("");

  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Grade Evaluation</h2>

        <div className="grade-layout">

          {/* Left Panel */}
          <div className="card">

            <h3>Submission Overview</h3>

            <div className="student-meta">
              <p><strong>Student:</strong> Rahul Sharma</p>
              <p><strong>Course:</strong> DBMS</p>
              <p><strong>Assignment:</strong> Normalization Assignment</p>

              <span className="status">Submitted</span>
            </div>

            <a href="#" className="download-link">📄 Download Submission</a>

            <hr />

            <h4>Evaluation Rubric</h4>

            <ul className="rubric">
              <li><input type="checkbox" /> Correct normalization</li>
              <li><input type="checkbox" /> Proper ER diagrams</li>
              <li><input type="checkbox" /> SQL queries included</li>
              <li><input type="checkbox" /> Explanation clarity</li>
            </ul>

          </div>

          {/* Right Panel */}
          <div className="card">

            <h3>Grade Entry</h3>

            <label>Marks (out of 100)</label>
            <input
              type="number"
              className="input"
              placeholder="85"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />

            <div className="grade-bar">
              <div style={{ width: `${marks || 0}%` }} />
            </div>

            <label>Grade</label>
            <select
              className="input"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="">Select Grade</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option>
            </select>

            <label>Remarks</label>
            <textarea
              rows="3"
              className="input"
              placeholder="Feedback for student"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />

            <div className="grade-preview">
              Final Grade: <strong>{grade || "—"}</strong>
            </div>

            <button className="btn btn-primary full">
              Save Evaluation
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

import Navbar from "../../components/common/Navbar";
import { useState } from "react";
import "./teacher.css";

export default function GradeEntry() {
  const [grade, setGrade] = useState("");
  const [marks, setMarks] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect to gradeService.js
    console.log({ grade, marks, remarks });
  };

  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Grade Entry</h2>

        {/* Submission Details */}
        <div className="card">
          <h3>Submission Details</h3>
          <p><strong>Student:</strong> Rahul Sharma</p>
          <p><strong>Course:</strong> DBMS</p>
          <p><strong>Assignment:</strong> Normalization Assignment</p>
          <p>
            <strong>Submitted File:</strong>{" "}
            <a href="#" style={{ color: "#7c3aed" }}>
              download.pdf
            </a>
          </p>
        </div>

        <br />

        {/* Grade Form */}
        <div className="card">
          <form onSubmit={handleSubmit}>
            {/* Marks */}
            <label>Marks Obtained</label>
            <input
              type="number"
              className="input"
              placeholder="e.g. 85"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />

            <br /><br />

            {/* Grade */}
            <label>Grade</label>
            <select
              className="input"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Select Grade</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option>
            </select>

            <br /><br />

            {/* Remarks */}
            <label>Remarks</label>
            <textarea
              rows="3"
              className="input"
              placeholder="Optional feedback for student"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />

            <br /><br />

            <button type="submit" className="btn btn-primary">
              Save Grade
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

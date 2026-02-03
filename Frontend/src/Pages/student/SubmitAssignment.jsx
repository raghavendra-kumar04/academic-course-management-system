import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function SubmitAssignment() {
  const [fileName, setFileName] = useState("No file chosen");
  const [remarks, setRemarks] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setSubmitted(false);
    }
  };

  const handleSubmit = () => {
    if (fileName === "No file chosen") {
      alert("Please choose a file before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="student-page">
        {/* Header */}
        <h2 className="student-header">Submit Assignment</h2>
        <p className="page-subtitle">
          Upload your assignment before the deadline to avoid penalties.
        </p>

        {/* Assignment Details */}
        <div className="card">
          <h3>📘 Assignment Details</h3>
          <p><b>Course:</b> Database Management Systems</p>
          <p><b>Title:</b> Normalization & Indexing</p>
          <p><b>Deadline:</b> <span className="danger-text">20 Feb, 11:59 PM</span></p>
          <p><b>Allowed Format:</b> PDF / DOC</p>
        </div>

        {/* Upload Section */}
        <div className="card">
          <h3>📤 Upload File</h3>

          <input type="file" id="file" onChange={handleFile} hidden />
          <label htmlFor="file" className="file-upload">
            Choose File
          </label>

          <p className="file-name">{fileName}</p>

          <textarea
            className="textarea"
            placeholder="Add remarks for your instructor (optional)"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <br />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit Assignment
          </button>

          {submitted && (
            <p className="success-text">
              ✅ Assignment submitted successfully. Awaiting evaluation.
            </p>
          )}
        </div>

        {/* Submission Guidelines */}
        <div className="card info-card">
          <h3>ℹ️ Submission Guidelines</h3>
          <ul className="list">
            <li>✔ Ensure your file is readable and properly named</li>
            <li>✔ Only the latest submission before deadline is evaluated</li>
            <li>✔ Late submissions may attract grade penalties</li>
            <li>✔ Do not upload zip or image files</li>
          </ul>
        </div>

        {/* Submission Status */}
        <div className="card">
          <h3>📊 Submission Status</h3>
          <p>Status: 
            <span className={submitted ? "badge badge-success" : "badge badge-warning"}>
              {submitted ? " Submitted" : " Pending"}
            </span>
          </p>
          <p>Evaluation: Not graded yet</p>
        </div>
      </div>
    </>
  );
}

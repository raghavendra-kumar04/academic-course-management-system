import Navbar from "../../components/common/Navbar";
import { useState } from "react";
import "./teacher.css";
import "./assignmentCreation.css";

export default function AssignmentCreation() {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, course, deadline, description, marks });
  };

  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Create Assignment</h2>

        {/* Top Stats */}
        <div className="assignment-stats">
          <div className="mini-card">📚 Total Courses: 3</div>
          <div className="mini-card">📝 Active Assignments: 7</div>
          <div className="mini-card">⏳ Pending Reviews: 4</div>
        </div>

        <div className="assignment-layout">

          {/* Form */}
          <div className="card">
            <form onSubmit={handleSubmit}>

              <label>Assignment Title</label>
              <input
                className="input"
                placeholder="Enter assignment title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label>Course</label>
              <select
                className="input"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select Course</option>
                <option>DBMS</option>
                <option>Operating Systems</option>
                <option>Machine Learning</option>
              </select>

              <label>Submission Deadline</label>
              <input
                type="date"
                className="input"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />

              <label>Total Marks</label>
              <input
                type="number"
                className="input"
                placeholder="100"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />

              <label>Description</label>
              <textarea
                rows="4"
                className="input"
                placeholder="Assignment instructions..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              {/* File Upload */}
              <label className="file-upload">
                Upload Reference File
                <input type="file" />
              </label>

              <button type="submit" className="btn btn-primary full">
                Create Assignment
              </button>

            </form>
          </div>

          {/* Preview Panel */}
          <div className="card preview-card">
            <h3>Assignment Preview</h3>

            <p><strong>Title:</strong> {title || "—"}</p>
            <p><strong>Course:</strong> {course || "—"}</p>
            <p><strong>Deadline:</strong> {deadline || "—"}</p>
            <p><strong>Marks:</strong> {marks || "—"}</p>

            <span className="status">Status: Draft</span>

            <hr />

            <h4>Guidelines</h4>
            <ul>
              <li>Clear problem statement</li>
              <li>Attach reference material</li>
              <li>Set realistic deadlines</li>
              <li>Mention evaluation criteria</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

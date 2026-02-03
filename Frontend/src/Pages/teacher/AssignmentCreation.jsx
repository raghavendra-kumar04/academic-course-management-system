import Navbar from "../../components/common/Navbar";
import { useState } from "react";
import "./teacher.css";

export default function AssignmentCreation() {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect to assignmentService.js
    console.log({ title, course, deadline, description });
  };

  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">Create Assignment</h2>

        <div className="card">
          <form onSubmit={handleSubmit}>
            {/* Assignment Title */}
            <label>Assignment Title</label>
            <input
              type="text"
              className="input"
              placeholder="Enter assignment title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <br /><br />

            {/* Course Selection */}
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

            <br /><br />

            {/* Deadline */}
            <label>Submission Deadline</label>
            <input
              type="date"
              className="input"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />

            <br /><br />

            {/* Description */}
            <label>Description</label>
            <textarea
              rows="4"
              className="input"
              placeholder="Assignment instructions..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <br /><br />

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Create Assignment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

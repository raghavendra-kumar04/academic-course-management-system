import Navbar from "../../components/common/Navbar";
import "./courseSetup.css";

export default function CourseSetup() {
  return (
    <>
      <Navbar />
      <div className="course-page">
        <h2 className="course-header">📚 Course Setup</h2>
        <p className="course-subtitle">
          Manage courses, assign instructors, and control course availability.
        </p>

        <div className="course-actions">
          <button className="course-btn primary">➕ Create New Course</button>
          <button className="course-btn">📂 Manage Categories</button>
        </div>

        <div className="course-grid">
          <div className="course-card">
            <div className="course-top">
              <h3>Web Development</h3>
              <span className="status active">Active</span>
            </div>
            <p className="course-meta">Instructor: John Doe</p>
            <p className="course-meta">Students Enrolled: 320</p>

            <div className="course-controls">
              <button className="course-btn small primary">✏️ Edit</button>
              <button className="course-btn small">👁 View</button>
              <button className="course-btn small danger">⛔ Disable</button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-top">
              <h3>Machine Learning</h3>
              <span className="status draft">Draft</span>
            </div>
            <p className="course-meta">Instructor: Jane Smith</p>
            <p className="course-meta">Students Enrolled: 180</p>

            <div className="course-controls">
              <button className="course-btn small primary">✏️ Edit</button>
              <button className="course-btn small">👁 View</button>
              <button className="course-btn small danger">⛔ Disable</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function CourseSetup() {
  return (
    <>
      <Navbar />
      <div className="admin-page">
        <h2 className="admin-header">Course Setup</h2>

        <div className="admin-grid">
          <div className="admin-card">
            <h3>Web Development</h3>
            <p>Instructor: John Doe</p>
            <button className="admin-btn primary">Edit Course</button>
          </div>
          <div className="admin-card">
            <h3>Machine Learning</h3>
            <p>Instructor: Jane Smith</p>
            <button className="admin-btn primary">Edit Course</button>
          </div>
        </div>
      </div>
    </>
  );
}
import Navbar from "../../components/common/Navbar";
import "./adminPage.css";
import { useState } from "react";

export default function CourseSetup() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <div className="admin-page">
        <h2 className="admin-header">Course Setup</h2>

        {/* Toolbar */}
        <div className="admin-toolbar">
          <input
            className="admin-search"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="admin-actions">
            <button className="admin-btn primary">➕ Add Course</button>
          </div>
        </div>

        {/* Courses */}
        <div className="admin-grid">
          <div className="admin-card">
            <h3>🌐 Web Development</h3>
            <p>Instructor: John Doe</p>
            <p>Students: 180</p>
            <p>Status: Active</p>

            <div className="calendar-actions">
              <button className="admin-btn secondary">View</button>
              <button className="admin-btn primary">Edit</button>
              <button className="admin-btn secondary">Delete</button>
            </div>
          </div>

          <div className="admin-card">
            <h3>🤖 Machine Learning</h3>
            <p>Instructor: Jane Smith</p>
            <p>Students: 120</p>
            <p>Status: Active</p>

            <div className="calendar-actions">
              <button className="admin-btn secondary">View</button>
              <button className="admin-btn primary">Edit</button>
              <button className="admin-btn secondary">Delete</button>
            </div>
          </div>

          <div className="admin-card">
            <h3>📱 Mobile App Development</h3>
            <p>Instructor: Rahul Verma</p>
            <p>Students: 95</p>
            <p>Status: Draft</p>

            <div className="calendar-actions">
              <button className="admin-btn secondary">View</button>
              <button className="admin-btn primary">Edit</button>
              <button className="admin-btn secondary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

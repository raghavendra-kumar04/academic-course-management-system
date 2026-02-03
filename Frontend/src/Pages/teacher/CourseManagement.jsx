import Navbar from "../../components/common/Navbar";
import "./teacher.css";
// import "./courseManagement.css";

export default function CourseManagement() {
  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">My Courses</h2>

        {/* Top Stats */}
        <div className="course-stats">
          <div className="mini-card">📚 Total Courses: 3</div>
          <div className="mini-card">👨‍🎓 Total Students: 165</div>
          <div className="mini-card">📝 Active Assignments: 7</div>
        </div>

        {/* Search */}
        <input
          className="input search"
          placeholder="Search courses..."
        />

        {/* Course Grid */}
        <div className="course-grid">

          <div className="card course-card">
            <h3>Database Management Systems</h3>
            <p>Course Code: CS301</p>
            <p>Students: 62 / 80</p>

            <div className="capacity-bar">
              <div style={{width:"78%"}}></div>
            </div>

            <div className="actions">
              <button className="btn btn-primary">Assignments</button>
              <button className="btn btn-outline">Students</button>
            </div>
          </div>

          <div className="card course-card">
            <h3>Operating Systems</h3>
            <p>Course Code: CS302</p>
            <p>Students: 58 / 80</p>

            <div className="capacity-bar">
              <div style={{width:"72%"}}></div>
            </div>

            <div className="actions">
              <button className="btn btn-primary">Assignments</button>
              <button className="btn btn-outline">Students</button>
            </div>
          </div>

          <div className="card course-card">
            <h3>Machine Learning</h3>
            <p>Course Code: CS401</p>
            <p>Students: 45 / 60</p>

            <div className="capacity-bar">
              <div style={{width:"75%"}}></div>
            </div>

            <div className="actions">
              <button className="btn btn-primary">Assignments</button>
              <button className="btn btn-outline">Students</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

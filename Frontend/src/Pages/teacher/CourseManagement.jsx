import Navbar from "../../components/common/Navbar";
import "./teacher.css";

export default function CourseManagement() {
  return (
    <>
      <Navbar />

      <div className="teacher-page">
        <h2 className="teacher-header">My Courses</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Database Management Systems</h3>
            <p>Course Code: CS301</p>
            <p>Students Enrolled: 62</p>

            <button className="btn btn-primary">
              Manage Course
            </button>
          </div>

          <div className="card">
            <h3>Operating Systems</h3>
            <p>Course Code: CS302</p>
            <p>Students Enrolled: 58</p>

            <button className="btn btn-primary">
              Manage Course
            </button>
          </div>

          <div className="card">
            <h3>Machine Learning</h3>
            <p>Course Code: CS401</p>
            <p>Students Enrolled: 45</p>

            <button className="btn btn-primary">
              Manage Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

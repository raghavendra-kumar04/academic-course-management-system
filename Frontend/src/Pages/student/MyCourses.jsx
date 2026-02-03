import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function MyCourses() {
  return (
    <>
      <Navbar />
      <div className="student-page">
        <h2 className="student-header">My Courses</h2>

        <div className="card-grid">
          {["DBMS", "OS", "ML", "Web Dev"].map(course => (
            <div className="card" key={course}>
              <h3>{course}</h3>
              <p>Instructor: Faculty Name</p>
              <button className="btn btn-primary">View Course</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
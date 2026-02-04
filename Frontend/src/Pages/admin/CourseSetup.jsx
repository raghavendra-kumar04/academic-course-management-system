import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function CourseSetup() {
  const courses = [
    { name: "DBMS", teacher: "Prof. Kumar", duration: "6 months", color: "blue" },
    { name: "OS", teacher: "Prof. Sharma", duration: "5 months", color: "pink" },
    { name: "ML", teacher: "Prof. Reddy", duration: "4 months", color: "green" },
    { name: "Web Dev", teacher: "Prof. Rao", duration: "3 months", color: "blue" },
  ];

  return (
    <>
      <Navbar />
      <div className="calendar-dashboard">
        <div className="calendar-header">
          <h2>Course Setup 🎓</h2>
          <p>Manage all courses offered in your institution</p>
        </div>

        <div className="calendar-content">
          {courses.map((course) => (
            <div key={course.name} className={`stat-card ${course.color} course-card`}>
              <h3>{course.name}</h3>
              <p>Instructor: {course.teacher}</p>
              <p>Duration: {course.duration}</p>
              <button className="btn btn-primary">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function MyCourses() {
  const enrolledCourses = [
    {
      name: "Database Management Systems",
      instructor: "Dr. R. Kumar",
      progress: 68,
      credits: 4,
      tag: "Core Subject"
    },
    {
      name: "Operating Systems",
      instructor: "Prof. S. Mehta",
      progress: 62,
      credits: 4,
      tag: "Core Subject"
    },
    {
      name: "Machine Learning",
      instructor: "Dr. A. Sharma",
      progress: 55,
      credits: 3,
      tag: "Elective"
    },
    {
      name: "Web Development",
      instructor: "Ms. P. Rao",
      progress: 74,
      credits: 3,
      tag: "Skill Course"
    }
  ];

  const recommendedCourses = [
    {
      name: "Data Structures & Algorithms",
      level: "Intermediate",
      reason: "Highly recommended for placements"
    },
    {
      name: "Cloud Computing Basics",
      level: "Beginner",
      reason: "Industry-demanded skill"
    },
    {
      name: "Cyber Security Fundamentals",
      level: "Beginner",
      reason: "Growing tech domain"
    },
    {
      name: "Advanced React & UI Design",
      level: "Advanced",
      reason: "Boost frontend skills"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="student-page">
        {/* Header */}
        <h2 className="student-header">My Courses</h2>
        <p className="page-subtitle">
          Manage your enrolled subjects and explore new courses to enhance your skills.
        </p>

        {/* Enrolled Courses */}
        <div className="section-header">
          <h3>📘 Enrolled Courses</h3>
        </div>

        <div className="card-grid">
          {enrolledCourses.map((course) => (
            <div className="card" key={course.name}>
              <h3>{course.name}</h3>
              <p className="muted">Instructor: {course.instructor}</p>
              <p className="muted">Credits: {course.credits}</p>

              <span className="badge badge-info">{course.tag}</span>

              <div className="progress-item">
                <span>Progress</span>
                <div className="progress-bar">
                  <div style={{ width: `${course.progress}%` }} />
                </div>
                <small className="muted">{course.progress}% completed</small>
              </div>

              <button className="btn btn-primary">Go to Course</button>
            </div>
          ))}
        </div>

        {/* Recommended Courses */}
        <div className="section-header">
          <h3>✨ Recommended for You</h3>
          <p className="muted">
            These courses are suggested based on your current curriculum and career path.
          </p>
        </div>

        <div className="card-grid">
          {recommendedCourses.map((course) => (
            <div className="card" key={course.name}>
              <h3>{course.name}</h3>
              <p className="muted">Level: {course.level}</p>
              <p className="course-insight">💡 {course.reason}</p>

              <button className="btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

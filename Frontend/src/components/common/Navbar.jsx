import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotificationBell from "../notifications/NotificationBell";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    setUser(storedUser);
    setAdmin(storedAdmin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    setUser(null);
    setAdmin(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-overlay" />

      <div className="navbar-content">
        <div className="logo">
          <Link to="/">CourseMS</Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* ADMIN DROPDOWN */}
          {admin && (
            <li className="dropdown">
              <span className="dropbtn">Admin ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/users">User Management</Link></li>
                <li><Link to="/admin/courses">Course Setup</Link></li>
                <li><Link to="/admin/calendar">Academic Calendar</Link></li>
                <li><Link to="/admin/reports">Reports</Link></li>
              </ul>
            </li>
          )}

          {/* STUDENT DROPDOWN */}
          {!admin && user?.role === "student" && (
            <li className="dropdown">
              <span className="dropbtn">Student ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/student/dashboard">Dashboard</Link></li>
                <li><Link to="/student/courses">Courses</Link></li>
                <li><Link to="/student/assignments">Assignments</Link></li>
                <li><Link to="/student/submit">Submit</Link></li>
                <li><Link to="/student/grades">Grades</Link></li>
              </ul>
            </li>
          )}

          {/* TEACHER DROPDOWN */}
          {!admin && user?.role === "teacher" && (
            <li className="dropdown">
              <span className="dropbtn">Teacher ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/teacher/dashboard">Dashboard</Link></li>
                <li><Link to="/teacher/courses">Courses</Link></li>
                <li><Link to="/teacher/create-assignment">Create Assignment</Link></li>
                <li><Link to="/teacher/submissions">Submissions</Link></li>
                <li><Link to="/teacher/grade-entry">Grade Entry</Link></li>
              </ul>
            </li>
          )}

          <NotificationBell />

          {!user && !admin ? (
            <li><Link to="/login" className="nav-btn">Login</Link></li>
          ) : (
            <li>
              <button className="nav-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

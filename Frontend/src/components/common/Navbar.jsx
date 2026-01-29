import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-overlay" />

      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <Link to="/">CourseMS</Link>
        </div>

        {/* Navigation */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/links">Links</Link></li>

          {/* Student Dropdown */}
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

          <li><Link to="/login" className="nav-btn">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

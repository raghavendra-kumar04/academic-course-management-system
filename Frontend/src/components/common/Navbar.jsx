import "./navbar.css";
import { Link } from "react-router-dom";
import NotificationBell from "../notifications/NotificationBell";

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

          {/* Teacher Dropdown */}
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

                    {/* Admin Dropdown */}
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

          <NotificationBell />

          <li><Link to="/login" className="nav-btn">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

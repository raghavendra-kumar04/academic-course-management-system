import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import ForgotPassword from "./Pages/auth/ForgotPassword";
import StudentDashboard from "./Pages/student/StudentDashboard";
import MyCourses from "./Pages/student/MyCourses";
import Assignments from "./Pages/student/Assignments";
import SubmitAssignment from "./Pages/student/SubmitAssignment";
import Grades from "./Pages/student/Grades";
// Teacher Pages
import TeacherDashboard from "./Pages/teacher/TeacherDashboard";
import CourseManagement from "./Pages/teacher/CourseManagement";
import AssignmentCreation from "./Pages/teacher/AssignmentCreation";
import Submissions from "./Pages/teacher/Submissions";
import GradeEntry from "./Pages/teacher/GradeEntry";
// Admin Pages
import AdminDashboard from "./Pages/admin/AdminDashboard";
import UserManagement from "./Pages/admin/UserManagement";
import CourseSetup from "./Pages/admin/CourseSetup";
import AcademicCalendar from "./Pages/admin/AcademicCalendar";
import Reports from "./Pages/admin/Reports";

import Notifications from "./Pages/Notifications";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/courses" element={<MyCourses />} />
      <Route path="/student/assignments" element={<Assignments />} />
      <Route path="/student/submit" element={<SubmitAssignment />} />
      <Route path="/student/grades" element={<Grades />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher/courses" element={<CourseManagement />} />
      <Route path="/teacher/create-assignment" element={<AssignmentCreation />} />
      <Route path="/teacher/submissions" element={<Submissions />} />
      <Route path="/teacher/grade-entry" element={<GradeEntry />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/courses" element={<CourseSetup />} />
      <Route path="/admin/calendar" element={<AcademicCalendar />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
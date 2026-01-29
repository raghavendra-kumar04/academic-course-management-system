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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
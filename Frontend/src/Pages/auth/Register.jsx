import "./auth.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account 🚀</h2>

        <input type="text" placeholder="Full Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <select required>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
        </select>

        <button className="auth-btn">Register</button>

        <div className="auth-links">
          <Link to="/">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}
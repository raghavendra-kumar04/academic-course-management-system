import "./auth.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegister = () => {
    if (!name || !email || !password || !role) {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
      name,
      email,
      role
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);

    // Navigate by role
    if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/teacher/dashboard");
    }
  };

  // Handle LogOut
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setName("");
    setEmail("");
    setPassword("");
    setRole("");

    // ✅ Navigate to Home
    navigate("/");
  };


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLoggedIn ? "Account Created 🎉" : "Create Account 🚀"}</h2>

        {!isLoggedIn && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </>
        )}

        <button
          className="auth-btn"
          onClick={isLoggedIn ? handleLogout : handleRegister}
        >
          {isLoggedIn ? "Logout" : "Register"}
        </button>

        {!isLoggedIn && (
          <div className="auth-links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

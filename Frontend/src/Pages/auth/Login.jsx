import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on page load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (!email || !password || !role) {
      alert("Please fill in all fields");
      return;
    }

    const user = {
      email,
      role
    };

    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);

    // Navigate based on role
    if (role === "student") {
      navigate("/student/dashboard");
    } else if (role === "teacher") {
      navigate("/teacher/dashboard");
    }
  };
  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setRole("");

    // ✅ Navigate to Home
    navigate("/");
  };


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLoggedIn ? "Welcome 🎉" : "Welcome Back"}</h2>

        {!isLoggedIn && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Role Selection */}
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
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        {!isLoggedIn && (
          <div className="auth-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <br />
            <p>
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

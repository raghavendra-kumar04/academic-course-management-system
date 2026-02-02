import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on page load
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    const admin = {
      username,
      role: "admin",
    };

    localStorage.setItem("admin", JSON.stringify(admin));
    setIsLoggedIn(true);

    // Navigate to admin dashboard
    navigate("/admin/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");

    navigate("/");
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>{isLoggedIn ? "Welcome Admin 🎉" : "Admin Login"}</h2>

        {!isLoggedIn && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        <button
          className="admin-btn"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        {!isLoggedIn && (
          <div className="admin-links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        )}
      </div>
    </div>
  );
}

import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on load
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) setIsLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

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
      <form className="admin-card" onSubmit={handleLogin}>
        <h2>{isLoggedIn ? "Welcome Admin 🎉" : "Admin Login"}</h2>

        {!isLoggedIn && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {!isLoggedIn ? (
          <button type="submit" className="admin-btn">
            Login
          </button>
        ) : (
          <button type="button" className="admin-btn" onClick={handleLogout}>
            Logout
          </button>
        )}

        {!isLoggedIn && (
          <div className="admin-links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        )}
      </form>
    </div>
  );
}

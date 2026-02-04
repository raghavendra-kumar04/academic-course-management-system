import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) setIsLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem(
      "admin",
      JSON.stringify({
        username,
        role: "admin",
      })
    );

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
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        <button
          type="submit"
          className="admin-btn"
          onClick={isLoggedIn ? handleLogout : null}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        {!isLoggedIn && (
          <div className="admin-links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        )}
      </form>
    </div>
  );
}

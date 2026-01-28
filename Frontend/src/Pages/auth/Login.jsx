import "./auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>

        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>

        <button className="auth-btn">Login</button>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <br />
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
import "./auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>

        <button className="auth-btn">Login</button>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <br />
          <p>Don't have an account?
          <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
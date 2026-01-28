import "./auth.css";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password 🔐</h2>

        <input type="email" placeholder="Enter your email" required/>

        <button className="auth-btn">Send Reset Link</button>

        <div className="auth-links">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
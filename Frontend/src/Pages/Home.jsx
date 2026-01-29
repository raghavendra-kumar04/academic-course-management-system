// src/pages/Home.jsx
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="home">
        <div className="home-overlay"></div>

        <div className="home-content">
          <h1>School Course Management System</h1>
          <p>
            Manage courses, assignments, grades, and communication —
            all in one modern platform.
          </p>

          <div className="home-buttons">
            <Link to="/login" className="home-btn primary">
              Login
            </Link>
            <Link to="/register" className="home-btn secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
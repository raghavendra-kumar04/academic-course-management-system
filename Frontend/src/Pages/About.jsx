import React from 'react'
import './about.css'

export default function About()  {
    return (
        <section className="about">
            <h2 className="about-title">Why Choose Our Platform?</h2>
            <p className="about-subtitle">
            Everything schools need to manage learning efficiently — simple, secure, and powerful.
            </p>

            <div className="about-cards">
            <div className="about-card">
                <h3>Course Management</h3>
                <p>
                Create, organize, and manage courses with ease.
                Teachers and students stay perfectly aligned.
                </p>
            </div>

            <div className="about-card">
                <h3>Assignments & Grades</h3>
                <p>
                Assign homework, submit work online, and track grades
                in real time — no paperwork needed.
                </p>
            </div>

            <div className="about-card">
                <h3>Communication</h3>
                <p>
                Seamless communication between students and teachers
                through announcements and messages.
                </p>
            </div>

            <div className="about-card">
                <h3>Secure & Reliable</h3>
                <p>
                Your data is protected with modern security standards,
                ensuring privacy and reliability.
                </p>
            </div>
            </div>
        </section>
    )
}
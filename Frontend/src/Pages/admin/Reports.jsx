import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function Reports() {
  const reportsStats = [
    { title: "DBMS Courses", value: 120, color: "blue" },
    { title: "OS Courses", value: 80, color: "pink" },
    { title: "ML Courses", value: 65, color: "green" },
    { title: "Web Dev Courses", value: 40, color: "blue" },
  ];

  return (
    <>
      <Navbar />
      <div className="calendar-dashboard">
        <div className="calendar-header">
          <h2>Course Reports 📊</h2>
          <p>Summary of courses and enrollment data</p>
        </div>

        <div className="calendar-stats">
          {reportsStats.map((stat) => (
            <div key={stat.title} className={`stat-card ${stat.color}`}>
              <h4>{stat.title}</h4>
              <h1>{stat.value}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

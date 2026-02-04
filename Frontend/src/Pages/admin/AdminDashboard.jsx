import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function AdminDashboard() {
  const stats = [
    { title: "Students", value: 120, color: "blue" },
    { title: "Courses", value: 10, color: "pink" },
    { title: "Assignments", value: 25, color: "green" },
    { title: "Teachers", value: 8, color: "blue" },
  ];

  return (
    <>
      <Navbar />
      <div className="calendar-dashboard">
        <div className="calendar-header">
          <h2>Admin Dashboard 🏫</h2>
          <p>Quick overview of your school management system</p>
        </div>

        <div className="calendar-stats">
          {stats.map((stat) => (
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

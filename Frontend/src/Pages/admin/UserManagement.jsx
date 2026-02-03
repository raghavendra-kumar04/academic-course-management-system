import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function UserManagement() {
  const users = [
    { name: "John Doe", email: "john@example.com", role: "Student", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", role: "Teacher", status: "Active" },
    { name: "Mark Johnson", email: "mark@example.com", role: "Student", status: "Inactive" },
    { name: "Admin User", email: "admin@example.com", role: "Admin", status: "Active" },
  ];

  // Calculate counts for stats cards
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === "Active").length;
  const inactiveUsers = users.filter(u => u.status === "Inactive").length;
  const adminUsers = users.filter(u => u.role === "Admin").length;

  const userStats = [
    { title: "Total Users", value: totalUsers, color: "blue" },
    { title: "Active Users", value: activeUsers, color: "green" },
    { title: "Inactive Users", value: inactiveUsers, color: "pink" },
    { title: "Admin Users", value: adminUsers, color: "blue" },
  ];

  return (
    <>
      <Navbar />
      <div className="calendar-dashboard">
        <div className="calendar-header">
          <h2>User Management 👥</h2>
          <p>Manage all users, roles, and their status</p>
        </div>

        <div className="calendar-stats">
          {userStats.map((stat) => (
            <div key={stat.title} className={`stat-card ${stat.color}`}>
              <h4>{stat.title}</h4>
              <h1>{stat.value}</h1>
            </div>
          ))}
        </div>

        {/* Optional: Add a table or list below if you want to show users */}
      </div>
    </>
  );
}

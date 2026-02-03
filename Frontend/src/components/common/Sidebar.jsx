import "./sidebar.css";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>Dashboard</h3>
      <ul>
        <li>My Courses</li>
        <li>Assignments</li>
        <li>Grades</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
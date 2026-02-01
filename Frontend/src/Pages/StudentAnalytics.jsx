import Navbar from "../components/common/Navbar";
import GradeChart from "../components/charts/GradeChart";
import AttendanceChart from "../components/charts/AttendanceChart";

export default function StudentAnalytics() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "100px 24px",
          background: "linear-gradient(135deg, #eef2ff, #fdf4ff)",
          minHeight: "100vh"
        }}
      >
        <h2 style={{ marginBottom: "24px", color: "#4f46e5" }}>
          Student Analytics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          <GradeChart />
          <AttendanceChart />
        </div>
      </div>
    </>
  );
}

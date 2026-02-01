// components/charts/AttendanceChart.jsx
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./charts.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AttendanceChart() {
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: [
          "#22c55e",
          "#ef4444"
        ],
        hoverOffset: 12
      }
    ]
  };

  const options = {
    responsive: true,
    cutout: "70%",
    animation: {
      animateRotate: true,
      duration: 1200
    },
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-title">Attendance Overview</div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

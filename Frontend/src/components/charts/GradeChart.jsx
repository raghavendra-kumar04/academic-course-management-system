// components/charts/GradeChart.jsx
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./charts.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function GradeChart() {
  const data = {
    labels: ["DBMS", "OS", "ML", "Web Dev", "AI"],
    datasets: [
      {
        label: "Grade %",
        data: [82, 76, 88, 91, 85],
        backgroundColor: [
          "#6366f1",
          "#8b5cf6",
          "#ec4899",
          "#22c55e",
          "#f59e0b"
        ],
        borderRadius: 8
      }
    ]
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1200,
      easing: "easeOutQuart"
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-title">Subject-wise Grades</div>
      <Bar data={data} options={options} />
    </div>
  );
}

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ labels, count, heading, max }) => {
  // const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: max,
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels,
    datasets: [
      {
        label: heading,
        data: count,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="bar-graph" style={{ width: "100%", height: "300px" }}>
      <Bar options={options} data={data} labels={labels} />
    </div>
  );
};

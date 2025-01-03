import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], // Labels for the X-axis
  datasets: [
    {
      label: "KWh",
      data: [15000, 10200, 9800, 5300, 3200], // Your data points for the Y-axis
      borderColor: "red", // Line color
      backgroundColor: "rgba(78, 27, 180, 0.2)", // Area under the line fill color
      borderWidth: 2, // Line width
      pointRadius: 2, // Point radius
    },
  ],
};

const options = {
  scales: {
    x: {
      display: false, // Hide the X-axis labels
    },
    y: {
      display: false, // Hide the Y-axis labels
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};

export function LineChart() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Line data={data} options={options} />
    </div>
  );
}

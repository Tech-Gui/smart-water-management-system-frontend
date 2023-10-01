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

const data = {
  labels: [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
    "Day 11",
    "Day 12",
    "Day 13",
    "Day 14",
    "Day 15",
    "Day 16",
    "Day 17",
    "Day 18",
    "Day 19",
    "Day 20",
  ],
  datasets: [
    {
      label: "Water Consumption (in Liters)",
      backgroundColor: "#68E7FD",
      borderColor: "#4e1bb4",
      borderWidth: 1,
      borderRadius: 5,
      hoverBackgroundColor: "#0C90DB",
      hoverBorderColor: "rgba(75, 192, 192, 1)",
      data: [
        150, 180, 200, 190, 210, 220, 250, 230, 240, 260, 270, 290, 280, 300,
        320, 310, 330, 350, 340, 360,
      ], // Replace with your actual water consumption data
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Water Consumption Per Day (Last 20 Days)",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Water Consumption (Liters)",
      },
    },
    x: {
      title: {
        display: true,
        text: "Day",
      },
      grid: {
        display: false, // Remove vertical grid lines
      },
      ticks: {
        callback: function (value, index, values) {
          // Skip every third label
          return index % 3 === 0 ? value : "";
        },
      },
    },
  },
};

function BarChart() {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;

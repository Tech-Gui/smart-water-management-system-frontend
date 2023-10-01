import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Irrigation", "Kitchen", "Toilet", "Shower", "Laundry", "Others"],
  datasets: [
    {
      label: "Water Usage",
      data: [25, 20, 15, 10, 5, 25], // Replace with your actual data percentages
      backgroundColor: [
        "#403f40",
        "#0C90DB",
        "#ffbf00",
        "#ff5722",
        "#68E7FD",
        "#e2e2e2",
      ], // Customize colors as needed
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "right", // Position the legend on the right
    },
    title: {
      display: true,
      text: "Water Usage Distrubition",
    },
  },
};

function PieChart() {
  return (
    <div style={{ maxHeight: "124%" }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ["Used", "Left"],
  datasets: [
    {
      label: "Water levels",
      data: [5000, 2000],
      backgroundColor: ["#ff0000", "#68E7FD"],
      borderColor: ["#000", "#000"],
      //   borderWidth: [1, 1],
    },
  ],
};

const options = {
  cutout: "80%", // Set the cutout to 70%
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};

export function Ring() {
  return <Doughnut data={data} options={options} />;
}

import React from "react";
import { Bar } from "react-chartjs-2";
import { Sun } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const SolarProductionChart = ({ data = [4200, 4800, 3900] }) => {
  const chartData = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        data: data,
        backgroundColor: "#FFB800",
        borderRadius: 4,
        borderColor: "#FF9900",
        borderWidth: 1,
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 2,
        bottom: 2,
        left: 2,
        right: 2,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y}kWh`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 8,
          },
          padding: 0,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative w-full h-16" style={{ maxHeight: "5rem" }}>
      <div className="absolute inset-0" style={{ maxHeight: "4.5rem" }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SolarProductionChart;

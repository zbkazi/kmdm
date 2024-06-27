import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./widget.css";

Chart.register();

interface StatisticProps {
  className?: string;
}

const Statistic: React.FC<StatisticProps> = ({ className }) => {
  const data = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli"],
    datasets: [
      {
        label: "2023",
        data: [12, 22, 90, 150, 145, 120, 190] ,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Target",
        data: [11, 20, 89, 149, 150, null, null], // Padding with null values to match the length
        type: "line",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  return (
    <div className={`widgetCard p-3 md:py-4 md:px-6 ${className}`}>
      <h1 className="text-medium font-semibold pb-4">Income Statement</h1>
      <div>
        <Bar data={data as any} options={options} />
      </div>
    </div>
  );
};

export default Statistic;

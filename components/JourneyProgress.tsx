// components/JourneyProgress.tsx
"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function JourneyProgress({ completedDays }: { completedDays: number }) {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completedDays, 100 - completedDays],
        backgroundColor: ["#4f46e5", "#e5e7eb"], // indigo-600 and gray-200
        borderColor: ["#4f46e5", "#e5e7eb"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    cutout: "80%", // Make it a doughnut chart
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {Math.floor((completedDays / 100) * 100)}%
        </span>
      </div>
    </div>
  );
}
// components/ProgressChart.tsx
"use client";

import { motion } from "framer-motion";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Database } from "@/types/supabase";

type Entry = Database['public']['Tables']['entries']['Row'];

const totalDays = 100;

interface ProgressChartProps {
  entries: Entry[];
}

export default function ProgressChart({ entries }: ProgressChartProps) {
  const currentDay = entries.length; // ✅ Get the current day from the number of entries

  const progressPercentage = (currentDay / totalDays) * 100;
  const daysRemaining = totalDays - currentDay;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors duration-300 h-full"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Progress</h2>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-48 h-48 sm:w-56 sm:h-56 relative"
        >
          <CircularProgressbarWithChildren
            value={progressPercentage}
            styles={buildStyles({
              pathColor: "#6366F1",
              trailColor: "#E5E7EB",
              strokeLinecap: "round",
            })}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {Math.round(progressPercentage)}%
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                Completed
              </span>
            </div>
          </CircularProgressbarWithChildren>
        </motion.div>
        
        <div className="mt-8 text-center w-full">
          <div className="flex justify-around text-center mb-4 text-sm font-medium">
            <span className="text-gray-700 dark:text-gray-300">
              <span className="w-2 h-2 inline-block rounded-full bg-indigo-600 mr-1"></span>
              Completed: {currentDay}
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              <span className="w-2 h-2 inline-block rounded-full bg-gray-300 dark:bg-gray-700 mr-1"></span>
              Remaining: {daysRemaining}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            You have completed {currentDay} of your 100-day journey!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
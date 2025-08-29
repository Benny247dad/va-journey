// components/ProfilesPageContainer.tsx
"use client";

import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa"; // Using FaUserCircle for consistency

export default function ProfilesPageContainer() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaUserCircle className="text-4xl text-gray-500 dark:text-gray-400 mr-2" />
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
              Your Profile
            </h1>
          </div>
        </motion.div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          View and manage your personal details and journey progress.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0">
            {/* Placeholder for a user's profile picture */}
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1 text-gray-800 dark:text-gray-100">
              John Doe
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              john.doe@example.com
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Journey Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">45</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Days Completed</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">100</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Days</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
// components/SettingsPageContainer.tsx
"use client";

import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa"; // Using FaCog for consistency

export default function SettingsPageContainer() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaCog className="text-4xl text-gray-500 dark:text-gray-400 mr-2" />
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
              Account Settings
            </h1>
          </div>
        </motion.div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Profile Information</h2>
        <p className="text-gray-600 dark:text-gray-400">
          This is where you'll be able to edit your name, email, and password.
        </p>
        <div className="mt-6">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  );
}
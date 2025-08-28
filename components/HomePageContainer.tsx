// components/HomePageContainer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaChartLine, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

const featureIcons = {
  tracker: <FaChartLine className="w-10 h-10 text-indigo-500" />,
  motivation: <FaLaptopCode className="w-10 h-10 text-green-500" />,
  community: <FaUsers className="w-10 h-10 text-purple-500" />,
};

export default function HomePageContainer() {
  const [currentDay, setCurrentDay] = useState(0);
  const totalDays = 100;

  useEffect(() => {
    // This is a placeholder. In a real application, you would fetch this from your database.
    // For now, let's just set a static day or get a mock value.
    const mockCurrentDay = 45; // Placeholder value from your prompt
    setCurrentDay(mockCurrentDay);
  }, []);

  const progressPercentage = (currentDay / totalDays) * 100;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 overflow-hidden">
        {/* Background gradient and image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 mb-6">
              Follow My 100-Day Journey to Becoming a Skilled Virtual Assistant
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              I’m documenting my growth step by step—sharing lessons, wins, and setbacks. Whether you’re curious about virtual assistants or walking the same path, this space is for you.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full max-w-sm mx-auto mb-8 bg-gray-200 rounded-full dark:bg-gray-700 h-2.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
                role="progressbar"
                aria-valuenow={currentDay}
                aria-valuemin={0}
                aria-valuemax={totalDays}
              ></motion.div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-12">Day {currentDay}/100</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/journey" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
                  aria-label="See my daily progress on the Journey page"
                >
                  See My Daily Progress
                </motion.a>
              </Link>
              <Link href="/signup" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-transparent border-2 border-indigo-600 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
                  aria-label="Start your own journey by signing up"
                >
                  Start Your Own Journey
                </motion.a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-16"
          >
            Benefits of Following My Journey
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {featureIcons.tracker}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Daily Progress Tracker</h3>
              <p className="text-gray-600 dark:text-gray-400">See my 100-day progress unfold in real time, with updates on skills learned and challenges overcome.</p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {featureIcons.motivation}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Motivation That Lasts</h3>
              <p className="text-gray-600 dark:text-gray-400">Follow milestones that keep me accountable (and maybe inspire you too) through honest reflections and goal-setting tips.</p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {featureIcons.community}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">A Supportive Community</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with others on similar journeys. Share, learn, and grow together via comments, forums, or a newsletter.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtle CTA at the bottom */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Join the community and track your own progress.</h2>
        <Link href="/signup" passHref>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
            aria-label="Join the community"
          >
            Start My Journey
          </motion.a>
        </Link>
      </section>
    </main>
  );
}
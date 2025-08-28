// components/JourneyPageContainer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaBookOpen, FaClipboardList, FaUsers, FaLightbulb } from "react-icons/fa";

// Data for each milestone
const milestones = [
  {
    day: 1,
    title: "Getting Started & Goal Setting",
    lessons: "Importance of clear objectives and daily habits.",
    icon: <FaBookOpen />,
    date: "August 28, 2025",
  },
  {
    day: 25,
    title: "Mastering Core VA Skills",
    lessons: "Tools like Google Calendar and efficient data gathering techniques.",
    icon: <FaClipboardList />,
    date: "September 22, 2025",
  },
  {
    day: 50,
    title: "Communication & Client Collaboration",
    lessons: "Active listening and using tools like Slack or Zoom effectively.",
    icon: <FaUsers />,
    date: "October 17, 2025",
  },
  {
    day: 75,
    title: "Project Management & Efficiency",
    lessons: "Prioritization methods like Eisenhower Matrix and time-blocking.",
    icon: <FaLightbulb />,
    date: "November 11, 2025",
  },
  {
    day: 100,
    title: "Becoming a Client-Ready Professional",
    lessons: "Portfolio building, networking, and real-world application.",
    icon: <FaCheckCircle />,
    date: "December 6, 2025",
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function JourneyPageContainer() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 mb-4">
            My 100-Day Virtual Assistant Challenge
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I believe growth comes from consistency. This page is my accountability wall—every milestone marks a key lesson or skill gained.
          </p>
        </section>

        {/* Interactive Milestone Section */}
        <section className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 h-full hidden md:block"></div>
          
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 md:space-y-24"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.day}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center md:items-start relative"
              >
                {/* Milestone Icon and Checkmark */}
                <div className="relative z-10 p-2 rounded-full bg-white dark:bg-gray-950 border-4 border-indigo-500 dark:border-indigo-400 mb-4 md:mb-0 md:mr-6">
                  <div className="text-indigo-500 dark:text-indigo-400 text-3xl">
                    {milestone.icon}
                  </div>
                </div>

                {/* Milestone Content */}
                <div className="flex-1 text-center md:text-left md:max-w-xl">
                  <h2 className="text-2xl font-bold mb-2">
                    <span className="text-indigo-600 dark:text-indigo-400">Day {milestone.day}:</span> {milestone.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">{milestone.date}</p>
                  <p className="text-gray-700 dark:text-gray-300">{milestone.lessons}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Latest Update Section */}
        <section className="mt-20 py-12 text-center bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Latest Update</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            This section will be dynamically updated with my most recent journal entry from the dashboard.
          </p>
          <p className="text-sm italic text-gray-500 dark:text-gray-400">
            (Future: Integrate with your database to display the latest entry here.)
          </p>
        </section>

        {/* CTA at Bottom */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Want to start your own 100-day challenge?
          </h2>
          <Link href="/signup" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
              aria-label="Start your own 100-day challenge"
            >
              Click here to begin
            </motion.a>
          </Link>
        </section>
      </div>
    </main>
  );
}
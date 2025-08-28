// components/ServicesPageContainer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaSearch, FaCommentDots, FaTasks, FaBullhorn } from "react-icons/fa";

const services = [
  {
    title: "Email & Calendar Management",
    description: "Keep inboxes clean and schedules organized, freeing up your time for high-priority work.",
    icon: <FaEnvelope className="text-indigo-500 w-12 h-12" />,
  },
  {
    title: "Research & Data Entry",
    description: "Gather accurate information so clients make informed decisions, saving hours of manual searching.",
    icon: <FaSearch className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Social Media Support",
    description: "Help manage content scheduling and engagement, boosting online presence without the hassle.",
    icon: <FaBullhorn className="text-purple-500 w-12 h-12" />,
  },
  {
    title: "Client Communication",
    description: "Ensure professional, timely responses to inquiries, building trust and strong relationships.",
    icon: <FaCommentDots className="text-orange-500 w-12 h-12" />,
  },
  {
    title: "Project Assistance",
    description: "Support ongoing projects with structure and follow-up, ensuring deadlines are met and tasks stay on track.",
    icon: <FaTasks className="text-teal-500 w-12 h-12" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ServicesPageContainer() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline and Intro Text */}
        <section className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 mb-4"
          >
            What Skills Am I Building as a Virtual Assistant?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I’m learning the exact skills businesses look for in a reliable VA. Here’s what I’m focusing on and how it can create value for clients.
          </motion.p>
        </section>

        {/* Service List Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold mb-2 text-center text-gray-800 dark:text-white">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA at Bottom */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Follow my journey as I sharpen these skills—or reach out if you’d like to collaborate when I’m ready.
          </h2>
          <Link href="/contact" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
              aria-label="Contact me for collaboration"
            >
              Contact
            </motion.a>
          </Link>
        </section>
      </div>
    </main>
  );
}
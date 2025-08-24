"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg bg-gray-800/60 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
        >
          Send Message
        </button>
      </motion.form>
    </main>
  );
}
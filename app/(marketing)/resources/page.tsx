"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const resources = [
  { name: "Notion", url: "https://notion.so", desc: "For task management." },
  { name: "Trello", url: "https://trello.com", desc: "Organize projects visually." },
  { name: "Grammarly", url: "https://grammarly.com", desc: "Polish your writing." },
];

export default function Resources() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        Resources
      </motion.h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {resources.map((res, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="p-6 rounded-xl bg-gray-800/50 shadow-md hover:scale-105 transition"
          >
            <Link href={res.url} target="_blank" className="text-2xl font-semibold text-indigo-400">
              {res.name}
            </Link>
            <p className="text-gray-400 mt-2">{res.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
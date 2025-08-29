// components/DashboardContainer.tsx
"use client";

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ProgressChart from "./ProgressChart";
import NewEntryForm from "./NewEntryForm"; // Changed name to match your file
import EntriesList from "./EntriesList";
import { Database } from "@/types/supabase";

type Entry = Database['public']['Tables']['entries']['Row'];

interface DashboardContainerProps {
  entries: Entry[];
}

export default function DashboardContainer({ entries }: DashboardContainerProps) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.button
            onClick={() => router.back()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Go back to the previous page"
          >
            <FaArrowLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 flex-grow"
          >
            My Dashboard
          </motion.h1>
          <div className="w-10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <ProgressChart entries={entries} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 md:col-span-1 lg:col-span-2"
          >
            <NewEntryForm />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <EntriesList entries={entries} />
        </motion.div>
      </div>
    </main>
  );
}
// components/EntryForm.tsx
"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function EntryForm() {
  const [dayNumber, setDayNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const user = (await supabase.auth.getSession()).data.session?.user;
    if (!user) {
      toast.error("You must be logged in to log an entry.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("entries").insert({
      user_id: user.id,
      day_number: parseInt(dayNumber),
      title,
      description,
    });

    if (error) {
      console.error(error);
      toast.error(error.message);
      setLoading(false);
      return;
    }

    toast.success("Entry logged successfully!");
    setDayNumber("");
    setTitle("");
    setDescription("");
    router.refresh(); // Refresh the page to show the new entry
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors duration-300 h-full"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Log New Entry</h2>
      <form onSubmit={handleLogEntry} className="space-y-6">
        <div>
          <label htmlFor="day-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Day Number
          </label>
          <input
            id="day-number"
            type="number"
            min="1"
            max="100"
            required
            value={dayNumber}
            onChange={(e) => setDayNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging..." : "Log Entry"}
        </motion.button>
      </form>
    </motion.div>
  );
}
// components/EntriesList.tsx
"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface Entry {
  id: string;
  day_number: number;
  title: string;
  description: string;
  created_at: string;
}

export default function EntriesList() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setLoading(false);
        return;
      }
      
      const { data, error } = await supabase
        .from("entries")
        .select("*")
        .eq("user_id", session.user.id)
        .order("day_number", { ascending: false });

      if (error) {
        console.error("Error fetching entries:", error);
        toast.error("Failed to load entries.");
        setLoading(false);
        return;
      }
      
      setEntries(data as Entry[]);
      setLoading(false);
    };

    fetchEntries();
  }, [supabase]);

  const handleDelete = async (entryId: string) => {
    const { error } = await supabase.from("entries").delete().eq("id", entryId);

    if (error) {
      console.error("Error deleting entry:", error);
      toast.error("Failed to delete entry.");
      return;
    }
    
    setEntries(entries.filter((entry) => entry.id !== entryId));
    toast.success("Entry deleted successfully!");
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Entries</h2>
        <p className="text-gray-500 dark:text-gray-400">Loading entries...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors duration-300"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">My Entries</h2>
      
      {entries.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No entries logged yet. Start by adding one above!</p>
      ) : (
        <AnimatePresence>
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                      Day {entry.day_number}: {entry.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(entry.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {entry.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <button className="hover:text-indigo-600 transition-colors" aria-label="Edit entry">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(entry.id)} className="hover:text-red-600 transition-colors" aria-label="Delete entry">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
// components/EntriesList.tsx
"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Database } from "@/types/supabase";

type Entry = Omit<Database['public']['Tables']['entries']['Row'], 'created_at'> & { created_at: string | null };

interface EntriesListProps {
  entries: Entry[];
  onDelete: (entryId: string) => void;
}

export default function EntriesList({ entries: initialEntries, onDelete }: EntriesListProps) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);

  const handleDelete = async (entryId: string) => {
    onDelete(entryId);
    // Update local state to remove the deleted entry immediately
    setEntries(entries.filter((entry) => entry.id !== entryId));
  };

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
                      {entry.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {entry.created_at ? new Date(entry.created_at).toLocaleDateString() : 'No date'}
                    </p>
                    {entry.description && (
                      <p className="text-gray-700 dark:text-gray-300">
                        {entry.description}
                      </p>
                    )}
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
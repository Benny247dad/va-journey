"use client";

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ProgressChart from "./ProgressChart";
import NewEntryForm from "./NewEntryForm";
import EntriesList from "./EntriesList";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";

type Entry = Omit<Database['public']['Tables']['entries']['Row'], 'created_at'> & { created_at: string | null };

export default function DashboardContainer() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

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
      } else {
        setEntries(data || []);
      }
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
            className="col-span-1"
          >
            <ProgressChart entries={entries} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-2"
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
          {loading ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Loading entries...
            </p>
          ) : (
            <EntriesList entries={entries} onDelete={handleDelete} />
          )}
        </motion.div>
      </div>
    </main>
  );
}
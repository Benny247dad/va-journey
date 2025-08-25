// (app)/dashboard/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";
import { useAuth } from "@/context/AuthProvider"; // ✅ Import useAuth hook

type Entry = {
  id: string;
  date: string; // ISO yyyy-mm-dd
  mood: "🙂" | "😐" | "🙁" | "🔥" | "💪";
  note: string;
  user_id: string;
  created_at: string;
};

export default function DashboardPage() {
  const { user } = useAuth(); // ✅ Get the authenticated user
  const [entries, setEntries] = useState<Entry[]>([]);
  const [note, setNote] = useState("");
  const [mood, setMood] = useState<Entry["mood"]>("💪");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ Add a loading state

  // Load recent entries
  useEffect(() => {
    (async () => {
      // ✅ Check if user is available
      if (!user) return;
      setLoading(true);

      const { data, error } = await supabase
        .from("entries")
        .select("*")
        .eq("user_id", user.id) // ✅ Filter by the user's ID
        .order("date", { ascending: false })
        .limit(14);

      if (!error && data) setEntries(data as Entry[]);
      setLoading(false);
    })();
  }, [user]); // ✅ Run effect when the user state changes

  const streak = useMemo(() => {
    const days = new Set(entries.map((e) => e.date));
    let s = 0;
    const cursor = new Date();
    for (;;) {
      const iso = cursor.toISOString().split("T")[0];
      if (days.has(iso)) {
        s += 1;
        cursor.setDate(cursor.getDate() - 1);
      } else break;
    }
    return s;
  }, [entries]);

  async function submitEntry() {
    // ✅ Make sure user is available before submitting
    if (!user) return;
    setSubmitting(true);
    const today = new Date().toISOString().split("T")[0];
    const { data, error } = await supabase
      .from("entries")
      .insert([{ date: today, mood, note, user_id: user.id }]) // ✅ Add user_id to the inserted data
      .select("*")
      .single();

    setSubmitting(false);
    if (!error && data) {
      setEntries((prev) => [data as Entry, ...prev]);
      setNote("");
    }
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Reveal>
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Welcome back, {user?.email}! 👋
        </motion.h1>
      </Reveal>

      {/* Top cards - same as before */}
      <div className="grid sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 p-5"
        >
          <p className="text-sm text-gray-400">Current Streak</p>
          <p className="text-3xl font-bold mt-1">{streak} days 🔥</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <p className="text-sm text-gray-400">Entries (last 14 days)</p>
          <p className="text-3xl font-bold mt-1">{entries.length}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <p className="text-sm text-gray-400">Today</p>
          <p className="text-3xl font-bold mt-1">
            {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>

      {/* Quick log - same logic, but with user check */}
      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold mb-3">Log today’s progress</h2>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value as Entry["mood"])}
              className="rounded-lg bg-transparent border px-3 py-2"
            >
              <option value="💪">💪 Strong</option>
              <option value="🔥">🔥 On fire</option>
              <option value="🙂">🙂 Good</option>
              <option value="😐">😐 Okay</option>
              <option value="🙁">🙁 Tough day</option>
            </select>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What did you do today?"
              className="flex-1 rounded-lg bg-transparent border px-3 py-2"
            />
            <button
              onClick={submitEntry}
              disabled={submitting || !note.trim()}
              className="rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 px-4 py-2 font-medium"
            >
              {submitting ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </Reveal>

      {/* Recent entries - same as before */}
      <Reveal>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Recent Entries</h3>
          {entries.length === 0 ? (
            <p className="text-gray-400">No entries yet. Log your first one!</p>
          ) : (
            <ul className="grid gap-3">
              {entries.map((e) => (
                <li
                  key={e.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">{e.mood}</div>
                    <div className="text-sm text-gray-400">
                      {new Date(e.date).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="mt-2">{e.note}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    </div>
  );
}
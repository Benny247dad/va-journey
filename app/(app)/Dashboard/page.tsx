"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

// ✅ SEO + Open Graph Metadata
export const metadata: Metadata = {
  title: "Dashboard | VA Journey",
  description:
    "Track your progress, log daily reflections, and maintain your growth streak on your Virtual Assistant journey.",
  openGraph: {
    title: "Dashboard | VA Journey",
    description:
      "Stay consistent with your Virtual Assistant growth journey. Track daily logs, moods, and streaks.",
    url: "https://va-journey.vercel.app/dashboard",
    siteName: "VA Journey",
    images: [
      {
        url: "https://va-journey.vercel.app/og-dashboard.png", // optional: add custom OG image
        width: 1200,
        height: 630,
        alt: "VA Journey Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | VA Journey",
    description:
      "Your personal Virtual Assistant journey dashboard to stay on track and consistent.",
    images: ["https://va-journey.vercel.app/og-dashboard.png"], // same as above
  },
};

type Entry = {
  id: string;
  date: string; // ISO yyyy-mm-dd
  mood: "🙂" | "😐" | "🙁" | "🔥" | "💪";
  note: string;
  user_id: string;
  created_at: string;
};

export default function DashboardPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [note, setNote] = useState("");
  const [mood, setMood] = useState<Entry["mood"]>("💪");
  const [submitting, setSubmitting] = useState(false);

  // Load recent entries
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("entries")
        .select("*")
        .order("date", { ascending: false })
        .limit(14);
      if (!error && data) setEntries(data as Entry[]);
    })();
  }, []);

  const streak = useMemo(() => {
    const days = new Set(entries.map((e) => e.date));
    let s = 0;
    let cursor = new Date();
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
    setSubmitting(true);
    const today = new Date().toISOString().split("T")[0];
    const { data, error } = await supabase
      .from("entries")
      .insert([{ date: today, mood, note }])
      .select("*")
      .single();

    setSubmitting(false);
    if (!error && data) {
      setEntries((prev) => [data as Entry, ...prev]);
      setNote("");
    }
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
          Welcome back 👋 — Let’s keep the streak going
        </motion.h1>
      </Reveal>

      {/* Top cards */}
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

      {/* Quick log */}
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

      {/* Recent entries */}
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
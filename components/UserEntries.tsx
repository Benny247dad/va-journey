// components/UserEntries.tsx
"use client";

import { deleteEntryAction } from "@/app/actions";
import { useState } from "react";
import toast from "react-hot-toast";

interface Entry {
  id: string;
  created_at: string;
  day: number;
  title: string;
  description: string;
}

interface UserEntriesProps {
  entries: Entry[];
}

export default function UserEntries({ entries }: UserEntriesProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (entryId: string) => {
    setDeletingId(entryId);
    const result = await deleteEntryAction(entryId);
    setDeletingId(null);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Entry deleted successfully!");
    }
  };

  return (
    <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        My Entries
      </h2>
      <div className="space-y-6">
        {entries.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No entries logged yet. Start your journey!
          </p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Day {entry.day}: {entry.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(entry.id)}
                  disabled={deletingId === entry.id}
                  className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition disabled:opacity-50"
                  aria-label={`Delete entry for Day ${entry.day}`}
                >
                  {deletingId === entry.id ? (
                    <span className="text-sm">...</span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.679-.114 1.022-.165m-1.022.165a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.14-2.056-2.268a48.27 48.27 0 0 0-4.04-2.078c-1.258-.29-2.585-.145-3.655.253a2.25 2.25 0 0 1-2.454 1.637l-.053.018a2.25 2.25 0 0 0-1.637 2.454l.253 3.655c.277 1.15.541 2.308.793 3.472a2.25 2.25 0 0 0 2.454 1.637l.053-.018Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {entry.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

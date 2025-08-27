// src/components/UserEntries.tsx
import React from "react";
import { format } from "date-fns";

interface UserEntriesProps {
  entries: {
    id: string;
    created_at: string;
    day: number;
    title: string;
    description: string;
  }[];
}

const UserEntries: React.FC<UserEntriesProps> = ({ entries }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:col-span-1">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Your Entries
      </h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Day {entry.day} -{" "}
                {format(new Date(entry.created_at), "MMMM d, yyyy")}
              </p>
              <h3 className="text-lg font-bold mt-1 text-gray-900 dark:text-white">
                {entry.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {entry.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">
            You haven&apos;t logged any entries yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserEntries;
// components/JourneyTimeline.tsx
"use client";

import Reveal from "@/components/Reveal";
import { format } from "date-fns";

interface JourneyEntry {
  id: string;
  created_at: string;
  day: number;
  title: string;
  description: string;
}

interface JourneyTimelineProps {
  entries: JourneyEntry[];
}

export default function JourneyTimeline({ entries }: JourneyTimelineProps) {
  return (
    <div className="relative space-y-16">
      {/* Timeline Line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

      {entries.map((entry, index) => (
        <Reveal key={entry.id} direction={index % 2 === 0 ? "right" : "left"}>
          <div className={`relative flex items-center justify-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
            <div className={`w-full md:w-1/2 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${index % 2 === 0 ? "md:mr-20" : "md:ml-20"} bg-white dark:bg-gray-900`}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Day {entry.day}: {entry.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{entry.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Logged on {format(new Date(entry.created_at), "MMMM d, yyyy")}
              </p>
            </div>
            {/* Dot on the timeline */}
            <div className="absolute w-4 h-4 rounded-full bg-indigo-500 z-10"></div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
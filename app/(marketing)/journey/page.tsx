// app/(marketing)/journey/page.tsx
import JourneyTimeline from "@/components/JourneyTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Journey | Dayo's VA Journey",
  description: "A public timeline of my progress, projects, and daily consistency on my 100-day journey to become a virtual assistant.",
};

export default function JourneyPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
          The 100-Day VA Journey
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          This is a public log of my daily progress, lessons learned, and projects completed.
        </p>
        <JourneyTimeline entries={[]} />
      </div>
    </main>
  );
}
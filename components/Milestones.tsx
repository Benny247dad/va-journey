"use client";

import Reveal from "@/components/Reveal";

const milestones = [
  {
    day: "Day 1",
    title: "Kickoff",
    description: "Started the journey by setting up the project foundation.",
  },
  {
    day: "Day 25",
    title: "Core Features",
    description: "Built out the core website features with animations.",
  },
  {
    day: "Day 50",
    title: "Progress Tracking",
    description: "Added scroll progress bar & milestone tracker.",
  },
  {
    day: "Day 75",
    title: "Refinements",
    description: "Improved design and added user-friendly enhancements.",
  },
  {
    day: "Day 100",
    title: "Launch",
    description: "The journey culminates with a fully live website.",
  },
];

export default function Milestones() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <Reveal direction="up">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Journey Milestones
          </h2>
        </Reveal>

        {/* Milestone List */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <Reveal key={index} direction="left" delay={index * 0.2}>
              <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {milestone.day} – {milestone.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
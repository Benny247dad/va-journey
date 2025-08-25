"use client";

import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Track Your Journey",
    description: "Follow your 100-day progress with milestones and insights.",
  },
  {
    title: "Stay Motivated",
    description: "Daily reminders and progress markers keep you moving forward.",
  },
  {
    title: "Community Support",
    description: "Share your journey and learn from others walking the same path.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 text-center text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <Reveal direction="up">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
        </Reveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} direction="up" delay={index * 0.2}>
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
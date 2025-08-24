"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const timelineData = [
  { day: 1, title: "Started the journey", desc: "Set up repo, Next.js + Tailwind configured." },
  { day: 5, title: "Hero + Navbar", desc: "Designed and animated hero section, added sticky navbar." },
  { day: 10, title: "Progress bar", desc: "Scroll tracking progress bar added at the top." },
  { day: 20, title: "Animations", desc: "Reveal animations for sections/pages working smoothly." },
  { day: 30, title: "Journey Timeline", desc: "Currently building timeline to track my progress." },
  // You can keep extending this list as you move forward
];

export default function JourneyTimeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Reveal direction="up">
        <h2 className="text-3xl font-bold mb-12 text-center">My 100-Day Journey</h2>
      </Reveal>

      <div className="relative border-l border-gray-300">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full shadow-md">
              {item.day}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
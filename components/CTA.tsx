"use client";

import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the 100-Day Journey 🚀
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal direction="up" delay={0.2}>
          <p className="text-lg text-gray-200 mb-8">
            Follow along as I build this project step by step.  
            Let’s grow, learn, and achieve milestones together!
          </p>
        </Reveal>

        {/* Call to Action Button */}
        <Reveal direction="up" delay={0.4}>
          <a
            href="#"
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Follow My Progress
          </a>
        </Reveal>
      </div>
    </section>
  );
}
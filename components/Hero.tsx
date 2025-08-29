// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center mb-8">
        {/* Portrait Image */}
        <Reveal direction="up">
          <Image
            src="/images/va-portrait.jpg"
            alt="Portrait of a Virtual Assistant at work"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <h1 className="text-5xl font-bold mt-4">
            Follow My 100-Day Journey
          </h1>
        </Reveal>
      </div>

      <Reveal direction="up" delay={0.4}>
        <h6 className="text-3xl font-semibold mb-2">
          Becoming a Skilled Virtual Assistant
        </h6>
      </Reveal>

      <Reveal direction="up" delay={0.6}>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-400">
          I’m documenting my growth step by step—sharing lessons, wins, and
          setbacks. Whether you’re curious about virtual assistants or walking
          the same path, this space is for you.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.8}>
        <Link
          href="/journey"
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          Explore My Journey 🚀
        </Link>
      </Reveal>
    </section>
  );
}
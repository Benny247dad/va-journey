// components/hero.tsx
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
            Hello, I&apos;m Dayo.
          </h1>
        </Reveal>
      </div>

      <Reveal direction="up" delay={0.4}>
        <h6 className="text-3xl font-semibold mb-2">
          An Aspiring Data Scientist | Virtual Assistant | Problem Solver
        </h6>
      </Reveal>
      <Reveal direction="up" delay={0.6}>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-400">
          Tracking my 100-day journey of growth, consistency, and projects to become a professional Virtual Assistant.
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
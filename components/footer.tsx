"use client";

import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Left side */}
        <Reveal direction="up" delay={0.05}>
          <p className="text-sm">&copy; {new Date().getFullYear()} VA Journey. All rights reserved.</p>
        </Reveal>

        {/* Right side */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
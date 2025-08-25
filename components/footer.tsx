"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/@Benny_king6" },
    { name: "LinkedIn", href: "https://linkedin.com/in/ekundayo-benjamin-69550a251" },
    { name: "GitHub", href: "https://github.com/Benny247dad" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20 dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Left side */}
        <Reveal direction="up" delay={0.05}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} VA Journey. All rights reserved.
          </p>
        </Reveal>

        {/* Right side */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-gray-900 transition-colors dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
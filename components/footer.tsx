// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "https://twitter.com/@Benny_king6", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.linkedin.com/in/ekundayo-benjamin-69550a251", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/Benny247dad", icon: <FaGithub />, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Footer Copy */}
        <p className="text-lg font-semibold mb-6 max-w-2xl">
          Built with consistency in mind. Follow the 100-day journey, stay inspired, and take your own first step.
        </p>
        
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} passHref>
                  <motion.a
                    whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </motion.a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6366F1" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 hover:text-indigo-500 transition-colors duration-300 text-2xl"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} VA Journey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
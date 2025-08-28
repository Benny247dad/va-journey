// components/AboutPageContainer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

const socialLinks = [
  { href: "https://twitter.com/Benny_king6", icon: <FaTwitter />, label: "Dayo's Twitter Profile" },
  { href: "https://www.linkedin.com/in/ekundayo-benjamin-69550a251/", icon: <FaLinkedin />, label: "Dayo's LinkedIn Profile" },
  { href: "https://github.com/Benny247dad", icon: <FaGithub />, label: "Dayo's GitHub Profile" },
  { href: "https://t.co/WNMXJAQ1yQ", icon: <FaLink />, label: "Dayo's Personal Website" },
];

export default function AboutPageContainer() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <section className="text-center md:flex md:items-center md:justify-center md:text-left mb-16">
          <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0 md:mr-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800"
            >
              {/* ✅ Use Next.js Image Component for optimization */}
              <Image
                src="/images/dayo-profile.jpg" // ➡️ Add your profile photo here
                alt="A photo of Dayo, the creator of the 100-day VA journey."
                width={256}
                height={256}
                layout="responsive"
                objectFit="cover"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          <div className="md:w-2/3 max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 mb-4"
            >
              Who’s Behind This Journey?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6"
            >
              Hi, I’m Dayo—a final-year student passionate about building a career in the digital world. I started this project because I wanted accountability. By committing to 100 days of learning and practice, I’ll grow into a professional Virtual Assistant ready to help businesses thrive.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              This site is both my progress tracker and my open diary. My hope? That it inspires others to set bold challenges for themselves—and maybe even join me on this path.
            </motion.p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-3xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <Link href="/journey" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
                aria-label="See how far I've come on the Journey page"
              >
                See how far I’ve come →
              </motion.a>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
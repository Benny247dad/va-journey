import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dayo's VA Journey | From Beginner to Pro",
  description:
    "Follow Dayo's 100-day journey to becoming a professional virtual assistant. Documenting skills, challenges, and progress.",
};

export default function HomePage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal direction="up">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 mb-4"
          >
            Welcome to Dayo&apos;s VA Journey
          </motion.h1>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I'm documenting my 100-day journey from a beginner to a professional
            virtual assistant. Follow my progress, learn new skills, and
            discover the tools I'm using along the way.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-md"
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link href="/journey" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold text-indigo-600 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300 shadow-md"
              >
                Explore My Progress
              </motion.button>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal direction="up" delay={0.6}>
            <div className="flex justify-center items-center space-x-6 text-2xl text-gray-500 dark:text-gray-400">
              <Link href="https://twitter.com/Benny_king6" passHref aria-label="Twitter Profile">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaTwitter />
                </motion.div>
              </Link>
              <Link href="https://github.com/Benny247dad" passHref aria-label="GitHub Profile">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaGithub />
                </motion.div>
              </Link>
              <Link href="https://linkedin.com/in/ekundayo-benjamin-69550a251" passHref aria-label="LinkedIn Profile">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaLinkedin />
                </motion.div>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
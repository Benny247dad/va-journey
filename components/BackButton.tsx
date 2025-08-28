// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi"; // Install react-icons if you haven't already

interface BackButtonProps {
  // Optional path to navigate to, if not just going back one step in history
  targetPath?: string;
  // Optional label for accessibility or custom text
  label?: string;
}

export default function BackButton({ targetPath, label = "Back" }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (targetPath) {
      router.push(targetPath);
    } else {
      router.back();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-sm font-medium"
      aria-label={label}
    >
      <HiArrowLeft className="w-5 h-5" />
      <span>{label}</span>
    </motion.button>
  );
}
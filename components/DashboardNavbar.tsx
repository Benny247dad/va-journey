// components/DashboardNavbar.tsx
"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaUserCircle, FaCog } from "react-icons/fa"; // ✅ New icons for profile and settings

export default function DashboardNavbar() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      toast.error("Failed to log out. Please try again.");
      return;
    }
    router.refresh();
    router.push("/login");
    toast.success("Logged out successfully!");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/dashboard" passHref>
            <span className="flex-shrink-0 cursor-pointer"> {/* Added cursor-pointer */}
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
                VA Journey
              </span>
            </span>
          </Link>
          
          {/* Navigation Links and Logout Button */}
          <div className="flex items-center space-x-4">
            {/* Profile Link */}
            <Link href="/profiles" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1"
                aria-label="View Profile"
              >
                <FaUserCircle className="w-5 h-5" />
                <span className="hidden md:inline">Profile</span>
              </motion.a>
            </Link>

            {/* Settings Link */}
            <Link href="/settings" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1"
                aria-label="Account Settings"
              >
                <FaCog className="w-5 h-5" />
                <span className="hidden md:inline">Settings</span>
              </motion.a>
            </Link>

            {/* Logout Button */}
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all"
              aria-label="Logout"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
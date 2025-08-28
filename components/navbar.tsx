"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Journey", href: "/journey" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-[998]">
           {" "}
      <div className="relative">
               {" "}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8
                     h-16 rounded-b-2xl
                     bg-white/60 dark:bg-gray-900/60 backdrop-blur
                     border-b border-black/5 dark:border-white/10"
        >
                    {/* Brand */}         {" "}
          <Link
            href="/"
            className="font-semibold tracking-tight text-gray-900 dark:text-white"
          >
                        VA<span className="text-indigo-500">Journey</span>     
               {" "}
          </Link>
                    {/* Desktop nav */}         {" "}
          <nav className="hidden md:flex items-center gap-6 text-sm">
                       {" "}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 dark:text-gray-300 transition ${
                  pathname === item.href
                    ? "text-indigo-600 dark:text-indigo-400 font-bold"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                                {item.label}             {" "}
              </Link>
            ))}
                       {" "}
            {!loading && user && (
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition"
              >
                                Dashboard              {" "}
              </Link>
            )}
                     {" "}
          </nav>
                    {/* Right controls */}         {" "}
          <div className="flex items-center gap-3">
                        <ThemeToggle />           {" "}
            {!loading &&
              (user ? (
                <button
                  onClick={handleSignOut}
                  className="rounded-lg px-3 py-2 text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition"
                >
                                    Logout                {" "}
                </button>
              ) : (
                <Link
                  href="/login" // ✅ Changed from "/auth" to "/login"
                  className="rounded-lg px-3 py-2 text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition"
                >
                                    Login                {" "}
                </Link>
              ))}
                       {" "}
            <button
              className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
                           {" "}
              {open ? (
                <HiX className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <HiMenu className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
                         {" "}
            </button>
                     {" "}
          </div>
                 {" "}
        </motion.nav>
               {" "}
        <AnimatePresence>
                   {" "}
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur
                          border-b border-black/5 dark:border-white/10"
            >
                           {" "}
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
                               {" "}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-gray-800 hover:bg-black/5
                                 dark:text-gray-200 dark:hover:bg-white/10 transition"
                  >
                                        {item.label}                 {" "}
                  </Link>
                ))}
                               {" "}
                {!loading && Boolean(user) && (
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-gray-800 hover:bg-black/5
                                 dark:text-gray-200 dark:hover:bg-white/10 transition"
                  >
                                        Dashboard                  {" "}
                  </Link>
                )}
                               {" "}
                {!loading &&
                  (user ? (
                    <button
                      onClick={handleSignOut}
                      className="rounded-lg px-3 py-2 text-red-600 dark:text-red-400 hover:bg-black/5 dark:hover:bg-white/10 transition text-left"
                    >
                                            Logout                    {" "}
                    </button>
                  ) : (
                    <Link
                      href="/login" // ✅ Changed from "/auth" to "/login"
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 bg-indigo-500 text-white hover:bg-indigo-600 transition text-center"
                    >
                                            Login                    {" "}
                    </Link>
                  ))}
                             {" "}
              </div>
                         {" "}
            </motion.div>
          )}
                 {" "}
        </AnimatePresence>
             {" "}
      </div>
         {" "}
    </header>
  );
}

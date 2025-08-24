// components/AppTabBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/journey", label: "Journey" },
  { href: "/resources", label: "Resources" },
  { href: "/settings", label: "Settings" },
];

export default function AppTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[999]">
      <div className="flex gap-2 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-black/5 dark:border-white/10 px-3 py-2 shadow-lg">
        {tabs.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`px-3 py-2 rounded-xl text-sm transition ${
                active
                  ? "bg-indigo-500 text-white"
                  : "text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
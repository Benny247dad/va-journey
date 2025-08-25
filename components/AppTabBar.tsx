// components/AppTabBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiBookOpen, HiChartPie, HiCog } from "react-icons/hi"; // ✅ Import some icons

const tabs = [
  { href: "/dashboard", label: "Dashboard", icon: HiHome },
  { href: "/journey", label: "Journey", icon: HiBookOpen },
  { href: "/profile", label: "Profile", icon: HiChartPie }, // ✅ Used 'Profile' as an example
  { href: "/settings", label: "Settings", icon: HiCog },
];

export default function AppTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[999]">
      <div className="flex gap-2 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-black/5 dark:border-white/10 px-3 py-2 shadow-lg">
        {tabs.map((t) => {
          const active = pathname === t.href;
          const Icon = t.icon; // ✅ Get the icon component

          return (
            <Link
              key={t.href}
              href={t.href}
              className={`px-3 py-2 rounded-xl text-sm transition flex items-center gap-1 ${
                active
                  ? "bg-indigo-500 text-white"
                  : "text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              aria-current={active ? "page" : undefined} // ✅ Add for accessibility
            >
              <Icon className="w-5 h-5" /> {/* ✅ Render the icon */}
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
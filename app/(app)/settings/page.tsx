import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

// Import SEO metadata
import { metadata } from "./metadata";
export { metadata };

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Reveal>
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Settings ⚙️
        </motion.h1>
      </Reveal>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-6">
        <p className="text-gray-400">
          Customize your preferences, account details, and notifications here.
        </p>

        {/* Example setting card */}
        <div className="space-y-3">
          <label className="block text-sm font-medium">Dark Mode</label>
          <button className="rounded-xl bg-indigo-500 hover:bg-indigo-600 px-4 py-2 font-medium">
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
}
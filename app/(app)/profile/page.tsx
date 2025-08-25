// app/(app)/profile/page.tsx
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

// ✅ Removed the metadata import because it's not needed for a protected page.

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Reveal>
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Your Profile 👤
        </motion.h1>
      </Reveal>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-6">
        <p className="text-gray-400">
          View and manage your personal details and activity.
        </p>

        {/* Example profile info card */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="font-medium">Name: John Doe</p>
          <p className="text-sm text-gray-400">Email: john@example.com</p>
        </div>
      </div>
    </div>
  );
}
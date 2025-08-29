import { Metadata } from "next";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { FaBullhorn, FaEnvelope, FaChartLine } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Services | Dayo's VA Journey",
  description: "Learn about the virtual assistant services I am mastering on my 100-day journey, including social media management, email marketing, and data entry.",
};

const services = [
  {
    icon: <FaBullhorn className="text-4xl text-indigo-500" />,
    title: "Social Media Management",
    description: "Creating engaging content, scheduling posts, and analyzing performance to grow your brand's online presence.",
  },
  {
    icon: <FaEnvelope className="text-4xl text-green-500" />,
    title: "Email Marketing & Support",
    description: "Drafting, sending, and managing email campaigns and providing prompt customer support via email.",
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-500" />,
    title: "Data Entry & Analysis",
    description: "Handling data entry tasks with accuracy and providing basic analysis to help you make informed decisions.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal direction="up">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500 mb-4"
          >
            My Core Services
          </motion.h1>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            These are the key skills I am mastering on my 100-day journey to offer as a Virtual Assistant.
          </p>
        </Reveal>
      </div>

      <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Reveal key={index} direction="up" delay={0.4 + index * 0.2}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300 text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
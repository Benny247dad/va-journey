import Link from "next/link";
import { HiOutlineLightBulb, HiOutlineChatAlt2, HiOutlineDocumentText } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

export default function ServicesPage() {
  const coreServices = [
    {
      icon: <HiOutlineDocumentText className="w-8 h-8 text-indigo-500" />,
      title: "Administrative Support",
      description: "Efficiently handle your daily tasks, from email management and scheduling to data entry and file organization."
    },
    {
      icon: <MdOutlineSocialDistance className="w-8 h-8 text-purple-500" />,
      title: "Social Media Management",
      description: "Grow your online presence with strategic content planning, scheduling, and community engagement across all platforms."
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8 text-yellow-500" />,
      title: "Content Creation",
      description: "Craft engaging blog posts, newsletters, and compelling website copy that connects with your audience."
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
      title: "Website Maintenance",
      description: "Keep your site running smoothly with regular updates, security checks, and content uploads."
    },
    {
      icon: <AiOutlineTeam className="w-8 h-8 text-green-500" />,
      title: "Client & Project Management",
      description: "Ensure your projects are delivered on time and your clients are happy through streamlined communication and task tracking."
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Services & Portfolio 💼
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I provide professional virtual assistant services tailored to help you streamline your operations and focus on what matters most.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          My Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <div key={service.title} className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm transition-all hover:shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Selected Projects
        </h2>
        <div className="space-y-8">
          {/* Project Card 1 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Project Alpha</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Role: Social Media Manager | Client: [Client Name]
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Successfully grew a client&apos;s Instagram following by 30% in three months through consistent content posting and targeted engagement strategies.
            </p>
          </div>
          {/* Project Card 2 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Project Beta</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Role: Executive Assistant | Client: [Client Name]
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Managed complex calendars, organized international travel, and streamlined communication for a busy CEO, improving their productivity by 20%.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-indigo-500/10 p-12 rounded-2xl border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Let&apos;s discuss how my skills can help you achieve your goals and grow your business.
        </p>
        <Link 
          href="/contact" 
          className="inline-block py-3 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
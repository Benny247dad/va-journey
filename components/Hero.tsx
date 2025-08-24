import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <Reveal direction="up">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Journey 🚀
        </h1>
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <p className="text-lg text-gray-600 mb-8">
          Tracking my 100-day journey of growth, consistency, and projects.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.4}>
        <a
          href="/journey"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          View My Journey
        </a>
      </Reveal>
    </section>
  );
}
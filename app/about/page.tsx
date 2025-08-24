import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <Reveal direction="up">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-lg text-gray-600">
            This journey is more than just code — it’s about growth, consistency, and building something meaningful day by day 💡
          </p>
        </Reveal>
      </section>

      <section className="space-y-6 text-gray-700 leading-relaxed">
        <Reveal direction="up" delay={0.4}>
          <p>
            I started this 100-day challenge to track my progress, share my learnings, and stay accountable. 
            Each day adds up to something bigger, and this site is my living journal.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.6}>
          <p>
            Along the way, I’ll be building projects, improving my skills, and documenting every milestone. 
            You can follow the journey here and see how it evolves over time.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.8}>
          <p>
            Thank you for visiting — your support, comments, and encouragement keep me moving forward 🙌
          </p>
        </Reveal>
      </section>
    </main>
  );
}
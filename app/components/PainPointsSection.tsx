import FeatureCard from "./ui/FeatureCard";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: "🔧",
      text: "Too many tools to manage tasks, clients, and deadlines",
    },
    {
      icon:  "⚠️",
      text: "Important things slipping through the cracks",
    },
    {
      icon:  "⏰",
      text: "Spending more time organizing work than doing it",
    },
    {
      icon: "🎯",
      text: "Tools that feel complex and heavy for solo work",
    },
  ];

  return (
    <section className="mb-20 md:mb-32 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
        Freelancing shouldn't feel{" "}
        <span className="text-yellow-400">overwhelming</span>
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {painPoints.map((point, index) => (
          <FeatureCard key={index} icon={point.icon} text={point.text} />
        ))}
      </ul>
    </section>
  );
}
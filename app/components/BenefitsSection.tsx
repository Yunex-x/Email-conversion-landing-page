import FeatureCard from "./ui/FeatureCard";


export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🚀",
      text: "Streamlined workflow tailored for freelancers",
    },
    {
      icon:  "📅",
      text: "Keep track of deadlines and client communications easily",
    },
    {
      icon: "💡",
      text: "Focus on delivering quality work, not managing tools",
    },
    {
      icon:  "🎉",
      text: "Simple, intuitive design made for solo professionals",
    },
  ];

  return (
    <section className="mb-20 md:mb-32 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
        Benefits of using{" "}
        <span className="text-yellow-400">FlowSolo</span>
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <FeatureCard key={index} icon={benefit.icon} text={benefit.text} />
        ))}
      </ul>
    </section>
  );
}
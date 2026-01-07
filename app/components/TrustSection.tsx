export default function TrustSection() {
  const features = [
    {
      icon: "✅",
      title: "Task Management",
      description: "Organize and prioritize your work",
    },
    {
      icon: "👥",
      title: "Client Tracking",
      description: "Keep all client info in one place",
    },
    {
      icon:  "📈",
      title:  "Progress Overview",
      description:  "See what's done and what's next",
    },
  ];

  return (
    <section className="mb-20 md:mb-32 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8">
        Designed with freelancers in mind{" "}
        <span className="text-yellow-400">from day one</span>
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
        FlowSolo is currently in early development. 
        By joining early access, you'll be among the first to try the product and help shape it based on real freelance needs.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl bg-blue-900/40 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-blue-900/60 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
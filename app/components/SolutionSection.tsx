import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function SolutionSection() {
  return (
    <section className="mb-20 md:mb-32 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8">
        One simple place for your{" "}
        <span className="text-yellow-400">freelance </span>work
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
        FlowSolo is designed to keep everything you need in one clear workspace.
        Instead of jumping between tools, you get a simple system that helps you stay focused, organized, and in control of your work.
      </p>

      {/* Solution Image Placeholder */}
      <div className="w-full max-w-4xl mx-auto">
        <ImagePlaceholder
          icon="📊"
          title="Workspace Overview"
          subtitle="See how everything stays organized"
          aspectRatio="aspect-[4/3]"
        />
      </div>
    </section>
  );
}
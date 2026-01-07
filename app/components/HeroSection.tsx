import EmailSignupForm from "./ui/EmailSignupForm";
import ImagePlaceholder from "./ui/ImagePlaceholder";


export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center mb-20 md:mb-32">
      <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight px-4">
          Manage your freelance work{" "}
          <span className="text-yellow-400">without the chaos</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
          FlowSolo helps freelancers and remote workers organize tasks, clients,
          and deadlines in one simple workspace — so you can focus on{" "}
          <span className="font-semibold text-white">doing the work</span>, not managing it.
        </p>
      </div>

      <EmailSignupForm />

      {/* Hero Image Placeholder */}
      <div className="w-full max-w-5xl px-4 mt-12 md:mt-16">
        <ImagePlaceholder
          icon="🖼️"
          title="Product Screenshot"
          subtitle="Dashboard preview coming soon"
          aspectRatio="aspect-video"
        />
      </div>
    </section>
  );
}
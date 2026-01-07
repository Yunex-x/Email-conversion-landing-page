import EmailSignupForm from "./ui/EmailSignupForm";

export default function CTASection() {
  return (
    <section className="mb-16 md:mb-20 px-4 text-center" id="contact">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to take control of your freelance work?
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
        Join FlowSolo early access and simplify how you manage your freelance projects.
      </p>
      <div className="flex justify-center">
        <EmailSignupForm />
      </div>
    </section>
  );
}
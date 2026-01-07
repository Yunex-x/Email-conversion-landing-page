"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import EmailSignupForm from "./ui/EmailSignupForm";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate heading with word reveal
      tl.from(headingRef.current, {
        y: 100,
        opacity:  0,
        duration: 1,
      })
        // Animate the yellow text with a slight scale
        .from(
          ".highlight-text",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        // Animate paragraph
        .from(
          paragraphRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        // Animate form
        .from(
          formRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        // Animate image placeholder
        .from(
          imageRef.current,
          {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 1,
          },
          "-=0.5"
        );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center mb-20 md:mb-32">
      <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight px-4"
        >
          Manage your freelance work{" "}
          <span className="text-yellow-400 highlight-text">
            without the chaos
          </span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4"
        >
          FlowSolo helps freelancers and remote workers organize tasks, clients,
          and deadlines in one simple workspace — so you can focus on{" "}
          <span className="font-semibold text-white">doing the work</span>, not
          managing it.
        </p>
      </div>

      <div ref={formRef}>
        <EmailSignupForm />
      </div>

      {/* Hero Image Placeholder */}
      <div
        ref={imageRef}
        className="w-full max-w-5xl px-4 mt-12 md:mt-16"
      >
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
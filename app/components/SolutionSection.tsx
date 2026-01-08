"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImagePlaceholder from "./ui/ImagePlaceholder";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:  sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Sequence animations
      tl.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      const yellowText = headingRef.current?.querySelector(".text-yellow-400");
      if (yellowText) {
        tl.from(
          yellowText,
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back. out(2)",
          },
          "-=0.5"
        );
      }

      tl
        .from(
          paragraphRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          imageRef.current,
          {
            y: 100,
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Add floating animation to image after it appears
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-20 md:mb-32 px-4">
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8"
      >
        One simple place for your{" "}
        <span className="text-yellow-400">freelance</span> work
      </h2>
      <p
        ref={paragraphRef}
        className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12"
      >
        FlowSolo is designed to keep everything you need in one clear workspace.
        Instead of jumping between tools, you get a simple system that helps you
        stay focused, organized, and in control of your work.
      </p>

      {/* Solution Image Placeholder */}
      <div ref={imageRef} className="w-full max-w-4xl mx-auto">
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
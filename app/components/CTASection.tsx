"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmailSignupForm from "./ui/EmailSignupForm";

gsap. registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef. current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Animate paragraph
      gsap. from(paragraphRef.current, {
        scrollTrigger:  {
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate form with scale
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger:  formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mb-16 md:mb-20 px-4 text-center"
      id="contact"
    >
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Ready to take control of your freelance work? 
      </h2>
      <p
        ref={paragraphRef}
        className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10"
      >
        Join FlowSolo early access and simplify how you manage your freelance projects. 
      </p>
      <div ref={formRef} className="flex justify-center">
        <EmailSignupForm />
      </div>
    </section>
  );
}
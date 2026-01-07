"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./ui/FeatureCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function PainPointsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

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
      icon: "⏰",
      text: "Spending more time organizing work than doing it",
    },
    {
      icon: "🎯",
      text: "Tools that feel complex and heavy for solo work",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading on scroll
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions:  "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate cards with stagger effect
      const cards = cardsRef. current?. children;
      if (cards && cards.length > 0) {
        gsap.from(Array.from(cards), {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%", // Changed from 75% to 80% to trigger earlier
            toggleActions: "play none none none",
            markers: false, // Set to true for debugging
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all", // Clear properties after animation
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mb-20 md:mb-32 px-4">
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12"
      >
        Freelancing shouldn't feel{" "}
        <span className="text-yellow-400">overwhelming</span>
      </h2>

      <ul
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {painPoints.map((point, index) => (
          <li key={index}>
            <FeatureCard icon={point.icon} text={point.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
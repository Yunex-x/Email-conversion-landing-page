"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./ui/FeatureCard";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  const benefits = [
    {
      icon: "🚀",
      text: "Streamlined workflow tailored for freelancers",
    },
    {
      icon: "📅",
      text: "Keep track of deadlines and client communications easily",
    },
    {
      icon: "💡",
      text: "Focus on delivering quality work, not managing tools",
    },
    {
      icon: "🎉",
      text: "Simple, intuitive design made for solo professionals",
    },
  ];

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
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      const highlightElement = headingRef.current?.querySelector(".text-yellow-400");
      if (highlightElement) {
        tl.from(
          highlightElement,
          {
            scale: 0,
            opacity: 0,
            rotation: -180,
            duration: 0.7,
            ease: "back. out(2)",
          },
          "-=0.5"
        );
      }

      // Animate cards with different directions
      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        Array.from(cards).forEach((card, index) => {
          const isLeft = index % 2 === 0;
          
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            x: isLeft ? -100 : 100,
            opacity: 0,
            duration:  0.8,
            ease: "power3.out",
          });
        });
      }

      // Add hover animations to cards
      if (cards && cards.length > 0) {
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;
          
          element.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: "power2.out",
            });
          });
          
          element.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-20 md:mb-32 px-4">
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12"
      >
        Benefits of using{" "}
        <span className="text-yellow-400">FlowSolo</span>
      </h2>
      <ul
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {benefits.map((benefit, index) => (
          <li key={index}>
            <FeatureCard icon={benefit.icon} text={benefit.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
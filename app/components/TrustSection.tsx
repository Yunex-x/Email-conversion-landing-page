"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: "✅",
      title: "Task Management",
      description: "Organize and prioritize your work",
    },
    {
      icon: "👥",
      title: "Client Tracking",
      description:  "Keep all client info in one place",
    },
    {
      icon: "📈",
      title: "Progress Overview",
      description: "See what's done and what's next",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline
      const tl = gsap. timeline({
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
            scale:  0,
            opacity: 0,
            rotation: 360,
            duration: 0.8,
            ease: "back. out(2)",
          },
          "-=0.5"
        );
      }

      tl.from(
        paragraphRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Animate feature cards with different effects per card
      const featureCards = featuresRef.current?.children;
      if (featureCards && featureCards.length > 0) {
        Array.from(featureCards).forEach((card, index) => {
          // Different entrance direction based on position
          let xOffset = 0;
          if (index === 0) xOffset = -100; // Left card comes from left
          if (index === 2) xOffset = 100;  // Right card comes from right
          
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions:  "play none none none",
            },
            x: xOffset,
            y: index === 1 ? 100 : 50, // Middle card comes from bottom
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "power3.out",
          });

          // Animate icon circle
          const iconCircle = card.querySelector(".bg-yellow-400\\/20");
          if (iconCircle) {
            gsap.from(iconCircle, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions:  "play none none none",
              },
              scale: 0,
              rotation: 180,
              duration: 0.6,
              delay: 0.3,
              ease: "back.out(2)",
            });
          }

          // Add hover animation
          const element = card as HTMLElement;
          
          element.addEventListener("mouseenter", () => {
            gsap. to(card, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
            
            // Pulse icon on hover
            gsap.to(iconCircle, {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
          
          element.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
            
            gsap.to(iconCircle, {
              scale: 1,
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
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8"
      >
        Designed with freelancers in mind{" "}
        <span className="text-yellow-400">from day one</span>
      </h2>
      <p
        ref={paragraphRef}
        className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12"
      >
        FlowSolo is currently in early development. 
        By joining early access, you'll be among the first to try the product and help shape it based on real freelance needs. 
      </p>

      {/* Feature Grid */}
      <div
        ref={featuresRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl bg-blue-900/40 backdrop-blur-sm border border-white/10 p-6 text-center hover: transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">{feature. icon}</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
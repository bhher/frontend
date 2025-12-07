import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AI-Powered Robot Solutions",
    subtitle: "Innovation in every motion",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Safe and Reliable Cobots",
    subtitle: "Collaborative robots for industry",
    image:
      "https://images.unsplash.com/photo-1581091012184-6f1f9b2ce961?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Automation",
    subtitle: "Optimize throughput and efficiency",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=2000&q=80&auto=format&fit=crop",
  },
];

const AUTO_ADVANCE_TIME = 4000; // ms

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    // Use window.setTimeout for strict typing
    timeoutRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_TIME);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused]);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides wrapper - each slide is viewport-width (min-w-full), wrapper translates by -index*100% */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(index * 100) / slides.length}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="h-full flex-shrink-0 relative"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#001b3d]/90 to-[#002e6d]/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6 font-light">
                {slide.subtitle}
              </p>
              <button className="group border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#002e6d] transition-all duration-300 flex items-center gap-2 mx-auto">
                두산 로봇과 함께 상상을 실현해 보세요
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20 pointer-events-none">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="pointer-events-auto w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
        >
          ◄
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="pointer-events-auto w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
        >
          ►
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

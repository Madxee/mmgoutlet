import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ArrowLeft, ArrowRight, ThumbsUp } from "lucide-react";
import { TESTIMONIALS } from "../types";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Visual glowing shadows */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-red-650/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-10 top-10 w-80 h-80 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase block mb-3">
            VERIFIED OUTLET LIFT PLANS
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white italic">
            MEMBER <span className="text-gold">TESTIMONIALS</span>
          </h2>
        </div>

        {/* Carousel Framework */}
        <div className="relative overflow-hidden min-h-[350px] sm:min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full rounded-none border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 sm:p-12 relative flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              {/* Abs decoration quote icon */}
              <Quote className="absolute right-8 top-8 w-14 h-14 text-zinc-900 pointer-events-none shrink-0" />

              {/* User Avatar with premium gold halo frame */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-red-500 blur-xs scale-105" />
                <img
                  src={TESTIMONIALS[currentIndex].avatarUrl}
                  alt={TESTIMONIALS[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-24 h-24 rounded-full object-cover border-2 border-[#050505] shadow-xl"
                />
                
                {/* Thumb icon badge overlay */}
                <div className="absolute bottom-0 right-0 z-20 w-6 h-6 rounded-full bg-gold border border-black flex items-center justify-center shadow-lg">
                  <ThumbsUp className="w-3 h-3 text-black" />
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1 text-center md:text-left">
                {/* Star display */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Actual quote statement */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic mb-6 font-light">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>

                {/* Review Signature */}
                <div>
                  <h4 className="text-sm font-black text-gold uppercase tracking-widest leading-none mb-1">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-bold">
                    {TESTIMONIALS[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-none border border-white/10 bg-[#050505] hover:border-gold/30 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Review"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Indicators bullet dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all cursor-pointer rounded-none ${
                  currentIndex === idx 
                    ? "bg-gold w-6" 
                    : "bg-zinc-800 hover:bg-zinc-700 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-none border border-white/10 bg-[#050505] hover:border-gold/30 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Review"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

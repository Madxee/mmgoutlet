import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalise position between -0.5 and 0.5
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Immersive background asset image using high-contrast dark athletic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920"
          alt="Cinema Gym Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 filter saturate-[0.15] contrast-[1.25]"
        />
        {/* Multilayered radial and linear dark/red gradients to form dynamic, gorgeous shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-radial from-red-650/15 via-transparent to-black/90 pointer-events-none" />
      </div>

      {/* Interactive mouse-controlled glow spotlight */}
      <div 
        className="absolute w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none transition-transform duration-500 lg:block hidden z-10"
        style={{
          transform: `translate(${mousePosition.x * 200}px, ${mousePosition.y * 200}px) translate(-50%, -50%)`,
          left: "50%",
          top: "50%"
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Marketing Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Tagline Pre-Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-block px-3 py-1.5 bg-red-600 text-[10px] font-bold tracking-[3px] uppercase mb-5 self-center lg:self-start self-skew shadow-[0_0_15px_rgba(220,38,38,0.35)]"
            >
              <span>NOW IN KANO STATE</span>
            </motion.div>

            {/* Main Header Display Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-zinc-500 text-[10px] font-mono font-bold tracking-[0.4em] uppercase mb-2 pl-1"
            >
              M.M.G OUTLET MEMBERSHIP CLUB
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.85] font-black italic uppercase tracking-tighter mb-5"
            >
              Transform <br /> Your <span className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Body</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 font-light italic tracking-wide"
            >
              Strength • Discipline • Fitness. Experience Nigeria's elite luxury bodybuilding and cardio center. High-end equipment meets professional training excellence.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={onJoinClick}
                className="w-full sm:w-auto px-10 py-4 bg-gold text-black font-black uppercase text-xs tracking-widest shadow-lg shadow-yellow-900/20 hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                Join the Elite
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/2347061603669?text=Hello%20M.M.G%20OUTLET%2C%20I'd%20love%20to%20know%20more%20about%20your%20membership%20packages%20and%20availabilities!"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                Explore Tours
              </a>
            </motion.div>

            {/* Dynamic statistics */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-gold">12+</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Pro Trainers</div>
              </div>
              <div className="text-center lg:text-left border-x border-white/10 px-6">
                <div className="text-2xl font-black text-gold">50+</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Elite Machines</div>
              </div>
              <div className="text-center lg:text-left font-mono">
                <div className="text-2xl font-black text-gold">24/7</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Gym Access</div>
              </div>
            </div>

          </div>

          {/* Epic Right Hand Interactive Dumbbell 3D Orbit Graphics */}
          <div className="lg:col-span-5 flex items-center justify-center relative h-[380px] sm:h-[450px]">
            {/* Glowing red & amber orbital rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-zinc-800/60"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-60 h-60 sm:w-64 sm:h-64 rounded-full border border-double border-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.05)]"
            />

            <motion.div
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-amber-500/10"
            />
            
            {/* Interactive Spotlight Backdrop behind dumbbell */}
            <div className="absolute w-44 h-44 bg-gradient-to-tr from-red-600/20 to-amber-500/10 rounded-full blur-[50px] animate-pulse" />

            {/* Glowing Rotating Dumbbell SVG Representation (Looks stunning, 3D transformed) */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [4, -4, 4]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              className="relative z-10 w-64 h-64 flex items-center justify-center select-none"
            >
              {/* Gold outer circles */}
              <div className="absolute w-52 h-52 rounded-full border-2 border-amber-500/30 flex items-center justify-center">
                <div className="text-[8px] font-mono tracking-[0.4em] text-amber-500/50 uppercase absolute animate-spin-slow">
                  * M.M.G OUTLET MEMBERSHIP BASE *
                </div>
              </div>

              {/* Handcrafted High-End Dumbbell Graphic with Glowing effects */}
              <div className="absolute transform rotate-45 flex items-center justify-center">
                {/* Bar */}
                <div className="w-48 h-5 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] relative">
                  {/* Grip Knurling */}
                  <div className="absolute inset-x-8 top-0 bottom-0 bg-[linear-gradient(45deg,#3f3f46_25%,transparent_25%),linear-gradient(-45deg,#3f3f46_25%,transparent_25%)] bg-[size:4px_4px] opacity-75" />
                </div>
                
                {/* Left Weights */}
                <div className="absolute -left-3 flex items-center gap-[2px]">
                  <div className="w-3 h-24 bg-gradient-to-b from-zinc-800 via-zinc-950 to-zinc-800 rounded border border-amber-500/40 shadow-xl" />
                  <div className="w-5 h-20 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 rounded border border-amber-500/30" />
                  <div className="w-1.5 h-16 bg-gradient-to-br from-red-650 to-red-950 rounded" />
                </div>

                {/* Right Weights */}
                <div className="absolute -right-3 flex items-center gap-[2px] flex-row-reverse">
                  <div className="w-3 h-24 bg-gradient-to-b from-zinc-800 via-zinc-950 to-zinc-800 rounded border border-amber-500/40 shadow-xl" />
                  <div className="w-5 h-20 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 rounded border border-amber-500/30" />
                  <div className="w-1.5 h-16 bg-gradient-to-br from-red-650 to-red-950 rounded" />
                </div>
              </div>

              {/* Central glowing indicator core */}
              <div className="absolute w-6 h-6 rounded-full bg-black border border-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              </div>
            </motion.div>

            {/* Floating glass keycaps */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-10 right-4 backdrop-blur-md bg-zinc-950/40 border border-zinc-800/60 p-3 rounded shadow-lg flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-mono tracking-wider font-bold text-zinc-300 uppercase">K Kano, Nigeria</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-6 left-12 backdrop-blur-md bg-zinc-950/40 border border-zinc-800/60 py-2.5 px-3.5 rounded shadow-lg flex items-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
              <span className="text-[10px] font-mono tracking-widest font-bold text-zinc-300 uppercase">STRENGTH ROOM</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Modern subtle section transition mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}

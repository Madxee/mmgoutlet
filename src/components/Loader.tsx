import { motion } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Background Cinematic Lighting */}
      <div className="absolute inset-0 z-0 bg-[#050505]" />
      
      {/* Moving gold dust laser glow */}
      <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-red-650/5 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Center Content Wrap */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        {/* Futuristic Dumbbell Ring Logo Concept */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative mb-6"
        >
          {/* Glowing Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gold/20 blur-md animate-ping" />
          <div className="w-24 h-24 rounded-full border border-gold/40 flex items-center justify-center bg-[#050505] shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gold via-white to-red-500 tracking-tighter italic">
              MMG
            </span>
          </div>

          {/* Miniature styling dumbbells left/right */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-zinc-800 rounded-none border-y border-gold shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-zinc-800 rounded-none border-y border-gold shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
        </motion.div>

        {/* Brand Name with letter-spacing animations */}
        <motion.h1
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-[0.5em] mb-1 pl-4 italic"
        >
          M.M.G <span className="text-gold">OUTLET</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-zinc-500 text-xs tracking-[0.3em] uppercase font-bold mb-12"
        >
          STRENGTH • DISCIPLINE • FITNESS
        </motion.p>

        {/* Dynamic Loading Meter Code */}
        <div className="relative w-64 h-[2px] bg-white/5 rounded-none overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-red-500"
          />
        </div>

        {/* Progress Text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[10px] font-mono tracking-[0.2em] text-red-500/80 uppercase mt-4"
        >
          INITIALIZING STRENGTH MATRIX...
        </motion.span>
      </div>

      {/* Technical detail footer */}
      <div className="absolute bottom-6 z-10 text-[9px] font-mono text-zinc-600 tracking-wider">
        KANO STATE, NIGERIA // EST. 2025
      </div>
    </motion.div>
  );
}

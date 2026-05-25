import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

export default function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Grand Opening is June 1, 2026 at 10:00 AM
    const targetDate = new Date("June 1, 2026 10:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsCompleted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <section 
      id="event" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"
          alt="Inspirational Event"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-10 filter grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Border outline with custom glowing gold theme to make it look like a flyer */}
        <div className="rounded-none border border-white/10 bg-[#050505] p-8 md:p-14 relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          {/* Futuristic laser glowing effect */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-red-600 text-white text-[10px] tracking-widest font-black uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                CELEBRATING OUR GRAND LAUNCH
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 italic">
                GRAND OPENING <span className="text-gold">CEREMONY</span>
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xl font-light italic">
                Be part of history as we unveil Kano's premier athletic stronghold. Tour our state-of-the-art weights zone, watch live professional lifting challenges, participate in body composition trials, and win direct M.M.G merchandise packages.
              </p>

              {/* Event Coordinates */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">DAY & DATE</span>
                    <span className="text-xs md:text-sm font-bold text-zinc-250 font-mono">Sunday, 1ST June 2026 // 10:00AM Prompt</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">CHRONO TIME</span>
                    <span className="text-xs md:text-sm font-bold text-zinc-250 font-mono">10:00AM GMT+1 Prompt</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">HEADQUARTERS VENUE</span>
                    <span className="text-xs md:text-sm font-bold text-zinc-250 font-mono">305B Tudun Yola Opposite AMK Petrol Station, Kano, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side live Countdown Clock */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              
              <div className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-4 pl-1 font-bold">
                // LAUNCH SEQUENCE METERS
              </div>

              {isCompleted ? (
                <div className="text-center p-6 border border-gold/30 rounded-none bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <h3 className="text-xl font-bold text-gold uppercase tracking-widest mb-1">
                    THE OUTLET IS LIVE
                  </h3>
                  <p className="text-zinc-400 text-[11px] uppercase font-light italic">Join physical training programs today!</p>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-sm w-full">
                  
                  {/* Days */}
                  <div className="flex flex-col items-center bg-[#050505] border border-white/10 rounded-none p-3 md:p-4 text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-black text-gold tracking-tight">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Days</span>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center bg-[#050505] border border-white/10 rounded-none p-3 md:p-4 text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-black text-gold tracking-tight">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Hours</span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center bg-[#050505] border border-white/10 rounded-none p-3 md:p-4 text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-black text-gold tracking-tight">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Mins</span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center bg-[#050505] border border-white/10 rounded-none p-3 md:p-4 text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-black text-red-500 tracking-tight">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Secs</span>
                  </div>

                </div>
              )}
              
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider mt-6 select-none uppercase font-bold">
                // ACTIVE TIMEZONE GMT+1 (EST. MAY 2026)
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

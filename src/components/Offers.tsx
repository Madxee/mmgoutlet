import { useState } from "react";
import { motion } from "motion/react";
import { Compass, Percent, ClipboardCheck, Gift, Users, Trophy } from "lucide-react";
import { SPECIAL_OFFERS, SpecialOffer } from "../types";

export default function Offers() {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);

  // Helper to map icon names from props to responsive Lucide elements
  const getIconElement = (name: string) => {
    switch (name) {
      case "Compass": return <Compass className="w-6 h-6" />;
      case "Percent": return <Percent className="w-6 h-6" />;
      case "ClipboardCheck": return <ClipboardCheck className="w-6 h-6" />;
      case "Gift": return <Gift className="w-6 h-6" />;
      case "Users": return <Users className="w-6 h-6" />;
      default: return <Trophy className="w-6 h-6" />;
    }
  };

  return (
    <section 
      id="offers" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Visual neon circles */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-red-650/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase block mb-3">
              M.M.G SPECIAL PERKS
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white m-0 italic">
              EXCLUSIVE <span className="text-gold">ADD-ONS</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs md:text-sm max-w-md m-0 leading-relaxed md:text-right font-light italic">
            We value your physical effort and dedication. These exclusive rewards are fully open to verified club members and registered families.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SPECIAL_OFFERS.map((offer) => {
            const isActive = activeOffer === offer.id;
            return (
              <motion.div
                key={offer.id}
                onMouseEnter={() => setActiveOffer(offer.id)}
                onMouseLeave={() => setActiveOffer(null)}
                className={`p-6 rounded-none border transition-all duration-300 flex flex-col justify-between ${
                  isActive 
                    ? "border-gold bg-gold/5 shadow-[0_5px_30px_rgba(212,175,55,0.15)]" 
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
                whileHover={{ y: -5 }}
              >
                <div>
                  {/* Glowing Icon Frame */}
                  <div className={`w-12 h-12 rounded-none flex items-center justify-center mb-6 transition-all duration-300 ${
                    isActive 
                      ? "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                      : "bg-[#050505] text-gold border border-white/10"
                  }`}>
                    {getIconElement(offer.iconName)}
                  </div>

                  {/* Offer Heading */}
                  <h3 className="text-xs font-black tracking-widest text-white uppercase mb-3">
                    {offer.title}
                  </h3>

                  {/* Description statement */}
                  <p className="text-zinc-400 text-[11px] leading-relaxed mb-6 font-light italic">
                    {offer.description}
                  </p>
                </div>

                {/* Animated lower label */}
                <span className={`text-[9px] font-mono tracking-wider transition-colors uppercase ${
                  isActive ? "text-gold font-bold" : "text-zinc-600"
                }`}>
                  {isActive ? "// UNLOCKED ACCESS" : "// MEMBERS ACCESS"}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

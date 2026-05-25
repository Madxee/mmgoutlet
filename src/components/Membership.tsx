import { useState } from "react";
import { motion } from "motion/react";
import { Check, Dumbbell, Award, HelpCircle, ArrowUpRight } from "lucide-react";
import { MEMBERSHIP_PLANS, MembershipPlan } from "../types";

export default function Membership() {
  const [hoveredPlanId, setHoveredPlanId] = useState<string | null>(null);

  const getWhatsAppLink = (plan: MembershipPlan) => {
    const baseMsg = `Hello M.M.G OUTLET, I am very interested in joining your fitness gym. `;
    const planMsg = plan.price === "Custom" 
      ? `I want to inquire about custom pricing for: ${plan.name}.`
      : `I want to sign up for: ${plan.name} (${plan.price} ${plan.period}).`;
    return `https://wa.me/2347061603669?text=${encodeURIComponent(baseMsg + planMsg)}`;
  };

  return (
    <section 
      id="membership" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Dynamic atmospheric color drops */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-650/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs font-black tracking-[0.30em] uppercase block mb-3"
          >
            FLEXIBLE ADMISSION & TIERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 italic"
          >
            MEMBERSHIP <span className="text-gold">PACKAGES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light italic"
          >
            Choose the membership form or frequency that matches your schedule. From daily drop-ins to annual conditioning commitments, unlock high-end gear and professional training excellence. No hidden charges.
          </motion.p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, idx) => {
            const isHovered = hoveredPlanId === plan.id;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredPlanId(plan.id)}
                onMouseLeave={() => setHoveredPlanId(null)}
                className={`relative rounded-none border p-6 flex flex-col justify-between transition-all duration-500 h-full ${
                  plan.popular 
                    ? "bg-gold/5 border-gold/40 shadow-[0_0_25px_rgba(212,175,55,0.15)]" 
                    : "bg-white/[0.03] backdrop-blur-md border-white/10 hover:border-white/20"
                }`}
                style={{
                  transform: isHovered ? "translateY(-6px)" : "none",
                }}
              >
                {/* Popular Badge element */}
                {plan.badge && (
                  <span className={`absolute -top-3 right-6 text-black text-[9px] font-black tracking-widest px-3 py-1 rounded-none uppercase shadow-lg ${
                    plan.popular ? "bg-[#D4AF37]" : "bg-red-600 text-white"
                  }`}>
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-1.5 rounded-none ${plan.popular ? "bg-gold/15" : "bg-white/5"}`}>
                      <Dumbbell className={`w-3.5 h-3.5 ${plan.popular ? "text-gold" : "text-zinc-500"}`} />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider font-bold">M.M.G VERIFIED</span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2 select-none">
                    {plan.name}
                  </h3>

                  {/* Price info block */}
                  <div className="mb-6 flex items-baseline gap-1.5">
                    <span className="text-2xl md:text-3xl font-black text-gold font-sans tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[10px] text-zinc-500 tracking-wider lowercase">
                      / {plan.period}
                    </span>
                  </div>

                  <div className="h-[1px] bg-white/10 mb-6" />

                  {/* Features detailed block */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="leading-tight font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit action CTA */}
                <a
                  href={getWhatsAppLink(plan)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-none text-[10px] font-sans tracking-[0.2em] font-black uppercase text-center flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:bg-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <span>SECURE PACK</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote information regarding club / registration forms */}
        <div className="mt-14 p-5 rounded-none border border-white/10 bg-white/[0.03] backdrop-blur-md text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Award className="w-5 h-5 text-gold animate-pulse" />
          <p className="text-zinc-400 text-xs leading-relaxed text-center sm:text-left font-light">
            <strong>OFFLINE REGISTRATION:</strong> Prior to gym admittance, prospective members are expected to secure their custom physical membership form from the front desk office in Tudun Yola.
          </p>
        </div>

      </div>
    </section>
  );
}

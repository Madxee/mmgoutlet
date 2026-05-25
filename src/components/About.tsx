import { motion } from "motion/react";
import { Dumbbell, Heart, Award, Sparkles, Scale, Shield } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "PROFESSIONAL TRAINERS",
      desc: "Our elite coaches provide custom biometric mapping, precision diet guides, and posture correction to maximize your effort."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-red-500" />,
      title: "FITNESS CONSULTATION",
      desc: "Step-by-step physical profiling and assessment metrics to isolate target areas and reach optimization milestones."
    },
    {
      icon: <Dumbbell className="w-5 h-5 text-gold" />,
      title: "WEIGHT TRAINING BASE",
      desc: "An incredible expansive platform of heavy bars, gold-standard iron plates, and durable powerlifting platforms."
    },
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: "CARDIO CONDITIONING",
      desc: "Unleash high-energy output with modern premium treadmills, elliptical tracks, and rowing setups with heart telemetry."
    },
    {
      icon: <Scale className="w-5 h-5 text-gold" />,
      title: "MUSCLE DEVELOPMENT",
      desc: "Targeted isolated machines and free weights fine-tuned to stimulate deep muscle hypertrophy and core strength."
    },
    {
      icon: <Shield className="w-5 h-5 text-red-500" />,
      title: "HEALTHY LIFESTYLE HUB",
      desc: "More than just lifting weights — we build lasting physical habits, focus parameters, and continuous health progress."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-650/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-red-500 text-xs font-black tracking-[0.3em] uppercase block mb-3"
          >
            OUR SACRED CREED
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 italic"
          >
            M.M.G OUTLET <span className="text-gold">PHILOSOPHY</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed font-light tracking-wide italic"
          >
            At M.M.G OUTLET, we translate fitness into physical art. We provide Kano State with a state-of-the-art facility built on three unyielding pillars: **Strength, Discipline, and Fitness**. Experience Nigeria's elite luxury bodybuilding and cardio center. High-end equipment meets professional training excellence.
          </motion.p>
        </div>

        {/* Bento Grid Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch mb-20">
          
          {/* Bento Block 1: Large Statement with Hero-style Image layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden relative group min-h-[350px] lg:min-h-auto flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200"
                alt="Intense Power Workout"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter saturate-50 contrast-125 opacity-25 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
            
            <div className="relative z-10">
              <span className="text-gold text-[10px] font-mono tracking-widest uppercase block mb-2 font-bold">
                // AN ATHLETIC REVOLUTION IN NIGERIA
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                FORGE THE UNBREAKABLE PILLARS OF PHYSICAL MASTERY
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl font-light italic">
                We design environments that demand focus. From industrial iron cage setups to custom-tailored cardiac monitoring zones, every inch of M.M.G is aligned with maximum physiological activation.
              </p>
            </div>
          </motion.div>

          {/* Bento Block 2: Secondary Visual Accent featuring heavy bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden relative group p-8 flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
                alt="Heavy Barbell plates"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter saturate-25 contrast-125 opacity-15 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/95" />
            </div>

            <div className="relative z-10 mb-8">
              <div className="w-10 h-10 rounded-full border border-red-500/30 bg-red-950/20 flex items-center justify-center mb-4">
                <Dumbbell className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                STRENGTH & POWER
              </h3>
            </div>

            <div className="relative z-10">
              <div className="text-4xl font-extrabold text-gold font-mono mb-2">50+ ELITE MACHINES</div>
              <p className="text-zinc-400 text-xs tracking-wider uppercase font-bold">
                Of Premium Calibrated Barbells & Heavy armor at Tudun Yola
              </p>
            </div>
          </motion.div>

        </div>

        {/* Detailed credential blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/[0.02] border border-white/5 hover:border-white/10 p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center bg-[#050505] mb-6 group-hover:border-gold transition-colors">
                  {cred.icon}
                </div>
                <h3 className="text-base font-black tracking-widest text-white uppercase mb-4">
                  {cred.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light italic">
                  {cred.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

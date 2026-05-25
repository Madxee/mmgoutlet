import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageSquare, Send, CheckCircle, Navigation, Users, Mail } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      
      // Auto close success notification after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-red-650/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase block mb-3">
            SECURE YOUR PHYSICAL FORM
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 italic">
            STAY IN <span className="text-gold">TOUCH</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-light italic">
            Ready to secure elite status? Visit our fitness desk in Kano State or drop us a quick digital correspondence below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information & Designed Futuristic Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-lg font-black tracking-widest text-gold uppercase mb-6">
                M.M.G HEADQUARTERS
              </h3>
              
              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-1 font-bold">OUR LOCATION</h4>
                    <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed font-mono">
                      305B Tudun Yola Opposite AMK Petrol Station, Kano State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Telephone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-1 font-bold">CALL COUNSEL</h4>
                    <p className="text-xs md:text-sm text-zinc-300 font-bold font-mono">
                      +234 706 160 3669
                    </p>
                  </div>
                </div>

                {/* WhatsApp Fast CTA link */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-1 font-bold">FAST CHAT</h4>
                    <a
                      href="https://wa.me/2347061603669?text=Hello%20M.M.G%20OUTLET%21%20I%20am%20at%20your%20website%20and%20interested%20in%20arranging%20a%20physical%20visit%20to%20Tudun%20Yola."
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs md:text-sm text-emerald-400 hover:text-emerald-300 font-extrabold flex items-center gap-1 mt-0.5 font-mono"
                    >
                      Open WhatsApp Messenger
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Customized Premium Map Visualization (Much cleaner than raw Google Map iframe) */}
            <div className="rounded-none border border-white/10 bg-white/[0.03] p-5 relative overflow-hidden flex flex-col justify-end min-h-[220px]">
              {/* Abs map styled graphic mesh */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-[1px] h-full bg-zinc-700/60" />
                <div className="absolute top-2/4 left-1/2 w-[1px] h-full bg-zinc-700/60" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-zinc-700/60" />
                {/* Block grids */}
                <div className="absolute top-8 left-8 w-24 h-16 bg-zinc-800/20 border border-zinc-700/50 rounded-none flex items-center justify-center text-[7px] text-zinc-500 tracking-[0.2em] font-mono">AMK PETROL</div>
                <div className="absolute top-32 left-32 w-44 h-14 bg-gold/10 border border-gold/20 rounded-none flex items-center justify-center text-[7px] text-gold/65 tracking-[0.2em] font-mono">OPPOSITE ROADWAY</div>
              </div>

              {/* Glowing Location beacon indicator */}
              <div className="absolute top-[110px] right-[130px] z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full bg-red-650/30 animate-ping" />
                  <div className="absolute w-4.5 h-4.5 rounded-full bg-gold/20 animate-pulse" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gold border border-zinc-950" />
                </div>
                <span className="text-[8px] font-mono font-black text-gold mt-1 uppercase tracking-widest bg-[#050505]/95 py-0.5 px-2.5 rounded-none border border-gold/20 shadow-md">
                  M.M.G OUTLET
                </span>
              </div>

              {/* Lower Navigation Controls info */}
              <div className="relative z-15 bg-[#050505]/90 border border-white/10 p-3 rounded-none">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h5 className="text-[10px] font-black text-white uppercase tracking-widest m-0 leading-none">
                      TUDUN YOLA MAPS
                    </h5>
                    <span className="text-[8px] text-zinc-500 font-mono tracking-tight block mt-1">
                      Kano State, Nigeria (AMK Area Office)
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=305B+Tudun+Yola+Opposite+AMK+Petrol+Station+Kano+Nigeria"
                    target="_blank"
                    rel="noreferrer"
                    className="py-1.5 px-3 rounded-none bg-gold hover:bg-white text-[9px] font-mono tracking-widest font-black text-black flex items-center gap-1 transition-colors"
                  >
                    <Navigation className="w-2.5 h-2.5 fill-black" />
                    <span>DIRECTIONS</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Clean dynamic contact forms */}
          <div className="lg:col-span-7">
            <div className="rounded-none border border-white/10 bg-white/[0.03] p-6 md:p-10 shadow-xl relative">
              <h3 className="text-sm font-black tracking-widest text-white uppercase mb-8">
                SEND AN ENVOY INQUIRY
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-bold">
                    FULL NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your athletic or group name"
                    className="w-full bg-[#050505] border border-white/10 focus:border-gold/80 rounded-none p-3 text-xs tracking-wider text-zinc-100 placeholder-zinc-750 font-medium transition-all focus:outline-none focus:ring-1 focus:ring-gold/20 font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-bold">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. warrior@gmail.com"
                      className="w-full bg-[#050505] border border-white/10 focus:border-gold/80 rounded-none p-3 text-xs tracking-wider text-zinc-100 placeholder-zinc-750 font-medium transition-all focus:outline-none font-mono"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-bold">
                      PHONE NUMBER
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="+2347061603669"
                      className="w-full bg-[#050505] border border-white/10 focus:border-gold/80 rounded-none p-3 text-xs tracking-wider text-zinc-100 placeholder-zinc-750 font-medium transition-all focus:outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Message input area */}
                <div>
                  <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-bold">
                    MESSAGE / INQUIRY BODY *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="How can we help your strength training goals?"
                    className="w-full bg-[#050505] border border-white/10 focus:border-gold/80 rounded-none p-3 text-xs tracking-wider text-zinc-100 placeholder-zinc-750 font-medium transition-all focus:outline-none focus:ring-1 focus:ring-gold/20 font-mono"
                  />
                </div>

                {/* Actions banner */}
                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-none bg-gold disabled:bg-zinc-800 text-black font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:text-zinc-650"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SEND CORRESPONDENCE</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Submitting Success UI Notification */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 rounded-none bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <p className="text-zinc-300 text-xs font-mono">
                        <strong>INQUIRY DISPATCHED:</strong> Thank you! Your strength counseling transmission has been received at our office. We will revert shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

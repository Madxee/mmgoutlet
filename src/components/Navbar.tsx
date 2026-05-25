import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PhoneCall, Award } from "lucide-react";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("home");

  // Track scroll position to change navbar background opacity & update active nav item
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track current section visible on screen
      const sections = ["home", "about", "membership", "offers", "event", "gallery", "testimonials", "contact"];
      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSegment(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Creed", href: "#about", id: "about" },
    { label: "Memberships", href: "#membership", id: "membership" },
    { label: "Offers", href: "#offers", id: "offers" },
    { label: "Opening", href: "#event", id: "event" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Reviews", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 shadow-xl" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleScrollToSegment(e, "home")}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 bg-red-650 flex items-center justify-center font-bold text-xl italic skew-x-[-12deg] shadow-[0_0_20px_rgba(220,38,38,0.45)] transition-transform group-hover:scale-105">
                <span className="text-white inline-block transform skew-x-[12deg] font-black">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-widest text-white leading-none">
                  M.M.G <span className="text-gold">OUTLET</span>
                </span>
                <span className="text-[8px] tracking-[0.25em] text-zinc-400 font-bold">
                  PREMIUM FITNESS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollToSegment(e, item.id)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                    activeSegment === item.id 
                      ? "text-gold" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSegment === item.id && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold to-red-600 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Join CTA for Desktop */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://wa.me/2347061603669?text=Hello%20M.M.G%20OUTLET%2C%20I%20want%20to%20inquire%20about%20joining%20the%20gym!"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white tracking-widest transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold" />
                <span>+234 706 160 3669</span>
              </a>

              <button
                onClick={onJoinClick}
                className="relative overflow-hidden px-5 py-2 rounded-none bg-transparent border border-gold hover:border-gold text-[10px] font-bold tracking-widest text-gold hover:text-black uppercase shadow-[0_4px_15px_rgba(212,175,55,0.1)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-gold animate-pulse" />
                  JOIN NOW
                </span>
                <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onJoinClick}
                className="px-3 py-1.5 rounded-none bg-transparent border border-gold text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase cursor-pointer"
              >
                JOIN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-900 rounded focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Slideout Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-black/95 border-b border-zinc-900 backdrop-blur-lg shadow-2xl py-6 px-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollToSegment(e, item.id)}
                  className={`px-4 py-3 rounded text-sm uppercase tracking-widest font-black transition-all ${
                    activeSegment === item.id
                      ? "bg-gold/10 text-gold border-l-2 border-gold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="h-[1px] bg-zinc-900 my-4" />
              
              {/* Mobile CTA Contacts */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 px-4">
                <a
                  href="https://wa.me/2347061603669?text=Hello%20M.M.G%20OUTLET%2C%20I%20want%20to%20inquire%20about%20joining"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-zinc-300 hover:text-white"
                >
                  <PhoneCall className="w-4 h-4 text-gold" />
                  <span>+234 706 160 3669</span>
                </a>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onJoinClick();
                  }}
                  className="w-full sm:w-auto py-3 px-6 rounded-none bg-gold text-xs font-black tracking-widest text-black text-center uppercase"
                >
                  JOIN THE OUTLET
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

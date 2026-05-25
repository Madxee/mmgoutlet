import React from "react";
import { Award, Compass, Heart, Instagram, Facebook, Shield, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    { url: "https://instagram.com", icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
    { url: "https://facebook.com", icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
    { url: "https://youtube.com", icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Home Base", id: "home" },
    { label: "Our Creed", id: "about" },
    { label: "Memberships", id: "membership" },
    { label: "Special Offers", id: "offers" },
    { label: "Opening Event", id: "event" },
    { label: "View Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
    { label: "Connect Form", id: "contact" }
  ];

  return (
    <footer className="bg-[#050505] text-white relative pt-20 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Visual background details */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.2)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Outlet Presentation info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-10 h-10 rounded-none border border-gold flex items-center justify-center bg-zinc-950">
                  <span className="text-sm font-black text-white italic">MMG</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-widest text-white leading-none italic">
                    M.M.G <span className="text-gold">OUTLET</span>
                  </span>
                  <span className="text-[8px] tracking-[0.25em] text-zinc-500 font-bold">
                    PREMIUM FITNESS & GYM
                  </span>
                </div>
              </a>

              <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mb-6 font-light italic">
                Uncompromising fitness standards in Kano State. M.M.G OUTLET provides members with advanced, robust, physical engineering systems to help hit strength landmarks.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-none bg-[#050505] border border-white/10 hover:border-gold text-zinc-400 hover:text-gold flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links list */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-gold uppercase mb-6">
              NAVIGATION CHANNELS
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {quickLinks.map((lnk, idx) => (
                <a
                  key={idx}
                  href={`#${lnk.id}`}
                  onClick={(e) => handleSmoothScroll(e, lnk.id)}
                  className="text-xs text-zinc-400 hover:text-gold transition-colors uppercase font-bold tracking-wide"
                >
                  {lnk.label}
                </a>
              ))}
            </div>
          </div>

          {/* Opening info column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black tracking-widest text-gold uppercase mb-6">
              OPERATING TIMELINES
            </h4>
            <ul className="space-y-3.5 text-xs text-zinc-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="uppercase font-bold tracking-wide font-medium">MONDAY – FRIDAY</span>
                <span className="font-bold text-zinc-200 font-mono">06:00AM – 10:00PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="uppercase font-bold tracking-wide font-medium">SATURDAY</span>
                <span className="font-bold text-zinc-200 font-mono">07:00AM – 08:00PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="uppercase font-bold tracking-wide text-red-500">SUNDAY</span>
                <span className="font-bold text-red-500 font-mono text-[10px] tracking-wider uppercase">Grand Launch / Event</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-zinc-500 tracking-wider">
            &copy; {currentYear} M.M.G OUTLET. ALL RIGHTS COMPLY WITH PHYSICAL LAW // EST. 2025.
          </p>
          <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-500 tracking-wider">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-gold">CREED</a>
            <span>•</span>
            <a href="#membership" onClick={(e) => handleSmoothScroll(e, "membership")} className="hover:text-gold">MEMBERSHIPS</a>
            <span>•</span>
            <span className="text-red-500 font-bold">KANO, NIGERIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

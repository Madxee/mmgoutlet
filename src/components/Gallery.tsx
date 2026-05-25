import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Grid, Eye, X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../types";

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<"all" | "interior" | "workout" | "equipment">("all");
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { label: "ALL BASE", id: "all" },
    { label: "INTERNAL ROOMS", id: "interior" },
    { label: "HEAVY WORKOUTS", id: "workout" },
    { label: "EQUIPMENT AMENITIES", id: "equipment" }
  ];

  const filteredItems = GALLERY_ITEMS.filter(item => 
    selectedCat === "all" ? true : item.category === selectedCat
  );

  return (
    <section 
      id="gallery" 
      className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-650/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase block mb-3">
            M.M.G AMENITY PREVIEWS
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 italic">
            M.M.G <span className="text-gold">GALLERY</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-light italic">
            Investigate our powerful training environment. Custom plate trees, high quality steel cable configurations, and optimized sound architectures are ready for you.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-white/10 pb-2 max-w-xl mx-auto">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCat(tab.id as any)}
              className={`relative px-4 py-2 text-[10px] sm:text-xs font-mono font-black tracking-widest uppercase transition-colors rounded-none cursor-pointer ${
                selectedCat === tab.id ? "text-gold font-bold" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab.label}
              {selectedCat === tab.id && (
                <motion.span
                  layoutId="activeGalleryTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid display with anim transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className="group relative rounded-none border border-white/10 bg-[#050505] overflow-hidden cursor-pointer h-64 shadow-md hover:border-gold/35 transition-colors"
              >
                {/* Image item representation */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter saturate-[0.85] contrast-[1.10]"
                />

                {/* Dark color gradient mask on bottom / full slide up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Cover label details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-gold uppercase block mb-1 font-bold">
                      {item.category} ROOMS
                    </span>
                    <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-widest m-0 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Eye look indicator badge */}
                  <div className="w-7 h-7 bg-[#050505] border border-white/10 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Expanded Modal Screen Lightbox Backdrop */}
        <AnimatePresence>
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
              onClick={() => setActiveMedia(null)}
            >
              <div 
                className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Exit pointer */}
                <button
                  onClick={() => setActiveMedia(null)}
                  className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white bg-[#050505] border border-white/10 rounded-none focus:outline-none transition-all cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5 text-red-500" />
                </button>

                {/* Lightbox Expanded Image with gorgeous glow border */}
                <motion.div 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="rounded-none border border-gold/30 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.25)] bg-[#050505]"
                >
                  <img
                    src={activeMedia.imageUrl}
                    alt={activeMedia.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] object-contain block mx-auto filter saturate-95"
                  />
                </motion.div>

                {/* Caption Panel */}
                <div className="w-full text-center mt-4">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold">
                    {activeMedia.category} PREVIEW
                  </span>
                  <p className="text-white text-sm md:text-base font-black tracking-widest uppercase m-0 mt-1">
                    {activeMedia.title}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

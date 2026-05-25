import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Membership from "./components/Membership";
import Offers from "./components/Offers";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress percentage to show at top of page as dynamic glowing laser indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToMembership = () => {
    const element = document.getElementById("membership");
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
      {/* 1. Cinematic Loading Entrance */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div key="loader">
            <Loader onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Premium Fitness Application Screen */}
      <div className="bg-[#050505] min-h-screen text-white selection:bg-gold selection:text-black antialiased font-sans">
        
        {/* Dynamic scroll progress laser indicator line */}
        <div 
          className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-gold via-white to-red-500 z-50 transition-all duration-100 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Global floating background noise or ambient gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#2c241a_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* All application segments wrapped together */}
        <div className="relative z-10">
          <Navbar onJoinClick={handleScrollToMembership} />
          <Hero onJoinClick={handleScrollToMembership} />
          <About />
          <Membership />
          <Offers />
          <Event />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </div>

      </div>
    </>
  );
}

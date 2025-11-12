import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 250, 249, 0)", "rgba(250, 250, 249, 0.98)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm transition-shadow duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div
        className={`flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          isScrolled ? "py-4 shadow-sm" : "py-6 md:py-8"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="text-neutral-900 tracking-[0.3em] font-light text-lg md:text-xl z-50"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ATELIER
        </motion.a>

        {/* Spacer for hamburger menu - all navigation is now in hamburger */}
        <div className="w-16" />
      </div>
    </motion.nav>
  );
}
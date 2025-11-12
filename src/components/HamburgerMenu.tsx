import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Hamburger Button - Matching Screenshot with bottom-left rounded corner */}
      <motion.button
        onClick={toggleMenu}
        className={`fixed top-0 right-0 z-50 cursor-magnetic transition-all duration-300 rounded-bl-3xl ${
          isScrolled ? "p-4" : "p-5 md:p-6"
        }`}
        style={{ backgroundColor: "#d4f764" }}
        whileHover={{ backgroundColor: "#e0ff7a" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-[6px] w-8">
          <motion.div
            className="h-[2px] bg-neutral-900 rounded-full"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-[2px] bg-neutral-900 rounded-full"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="h-[2px] bg-neutral-900 rounded-full"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Expanding Purple Section with Diagonal */}
            <motion.div
              initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 0)" }}
              animate={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
              exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 0)" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-40"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)"
              }}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={toggleMenu}
                className="absolute top-6 left-6 md:top-8 md:left-12 text-neutral-900 cursor-magnetic flex items-center gap-2 group"
              >
                <X className="w-6 h-6" />
                <span className="text-sm tracking-[0.15em]">CLOSE</span>
              </motion.button>

              {/* Brand Name */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 md:top-8 text-neutral-900 tracking-[0.3em] font-light opacity-30"
              >
                ATELIER
              </motion.div>

              {/* Navigation Links */}
              <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-4 md:space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{
                      delay: 0.4 + index * 0.08,
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1]
                    }}
                    whileHover={{ x: -10, transition: { duration: 0.2 } }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 hover:text-purple-900 transition-colors cursor-magnetic"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute bottom-8 md:bottom-12 right-12 md:right-24 text-neutral-900"
              >
                <div className="text-sm tracking-[0.15em] mb-2 opacity-70">
                  GOT A PROJECT?
                </div>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm tracking-[0.15em] rounded-full hover:bg-purple-900 transition-colors cursor-magnetic shadow-lg"
                >
                  LET'S TALK
                </a>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.08 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 text-[20vw] font-serif leading-none text-neutral-900 select-none pointer-events-none"
              >
                ATE
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
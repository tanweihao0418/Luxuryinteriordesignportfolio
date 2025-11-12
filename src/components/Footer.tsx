import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden">
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-800/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Left: Company Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div 
              className="text-2xl md:text-3xl tracking-[0.2em] font-light"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              ATELIER
            </motion.div>

            {/* Address */}
            <div className="text-neutral-400 space-y-1 leading-relaxed">
              <p>Atelier Interior Design Studio</p>
              <p>123 Design Avenue, Suite 4-2</p>
              <p>New York, NY 10001</p>
            </div>

            {/* Phone */}
            <motion.a 
              href="tel:+15551234567"
              className="inline-block text-neutral-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              +1 (555) 123-4567
            </motion.a>
          </motion.div>

          {/* Right: Navigation Links */}
          <motion.nav
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            {[
              { name: "Portfolio", href: "#portfolio" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Process", href: "#process" },
              { name: "Insights", href: "#insights" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ x: 10 }}
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-neutral-300 hover:text-white transition-colors inline-block"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-xs tracking-[0.15em] text-neutral-500">
            <motion.a 
              href="#cookie-policy"
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              COOKIE POLICY
            </motion.a>
            <motion.a 
              href="#terms"
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              LEGAL NOTICE & TERMS OF USE
            </motion.a>
            <motion.a 
              href="#privacy"
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              PRIVACY POLICY
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-xs tracking-[0.15em] text-neutral-500">
            COPYRIGHT © ATELIER 2025
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
      >
        <div className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-serif leading-none tracking-tight opacity-[0.03] whitespace-nowrap">
          eLIER
        </div>
      </motion.div>
    </footer>
  );
}
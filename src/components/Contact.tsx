import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Contact() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const handleContactClick = () => {
    // Scroll to form or handle contact action
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Split Screen Hero Section */}
      <section id="contact" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Left Side - Image with "Quote" */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ width: "50%" }}
            animate={{ 
              width: hoveredSide === 'left' ? "60%" : hoveredSide === 'right' ? "40%" : "50%" 
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623351143485-b1d4937747f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwxfHx8fDE3NjI4MzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Interior Design Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-12 md:px-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-white font-serif text-6xl md:text-8xl lg:text-9xl mb-6">
                  Quote
                </h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-white/80 max-w-md mx-auto leading-relaxed"
                >
                  Transform your vision into reality with our expert design services
                </motion.p>
              </motion.div>
            </div>

            {/* Diagonal Edge */}
            <div 
              className="absolute top-0 right-0 w-32 h-full bg-[#d4f764]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
              }}
            />
          </motion.div>

          {/* Right Side - Contact CTA */}
          <motion.div
            className="relative overflow-hidden bg-[#d4f764]"
            initial={{ width: "50%" }}
            animate={{ 
              width: hoveredSide === 'right' ? "60%" : hoveredSide === 'left' ? "40%" : "50%" 
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Decorative floating cards */}
            <motion.div
              className="absolute top-4 right-8 w-20 h-28 bg-white/30 backdrop-blur-sm rotate-12"
              animate={{
                y: [0, -20, 0],
                rotate: [12, 15, 12]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/4 right-24 w-16 h-24 bg-white/40 backdrop-blur-sm -rotate-6"
              animate={{
                y: [0, -15, 0],
                rotate: [-6, -3, -6]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute bottom-32 right-16 w-24 h-32 bg-white/25 backdrop-blur-sm rotate-6"
              animate={{
                y: [0, -25, 0],
                rotate: [6, 9, 6]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Top Right Labels */}
            <div className="absolute top-8 right-8 text-right">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm tracking-[0.2em] uppercase mb-2"
              >
                Your
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                spotlight's
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                waiting.
              </motion.p>
            </div>

            {/* Top Right "GOT A PROJECT?" Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute top-4 right-48 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase"
            >
              GOT A PROJECT?
            </motion.div>

            {/* Main Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-12 md:px-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center max-w-2xl"
              >
                <motion.p
                  className="text-sm tracking-[0.2em] uppercase mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  NEXT
                </motion.p>

                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                  Got questions?<br />
                  A wild idea?
                </h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="mb-12 leading-relaxed text-neutral-800"
                >
                  We'll get you started or help you<br />
                  dream bigger.
                </motion.p>

                <motion.button
                  onClick={handleContactClick}
                  className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:gap-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  CONTACT US
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Let's Start a Conversation</h2>
            <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Share your vision with us and we'll bring it to life with our expertise in luxury interior design
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your interest! We'll be in touch soon.");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-3 text-xs tracking-[0.15em] uppercase text-neutral-700">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-purple-600 focus:outline-none transition-colors duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-3 text-xs tracking-[0.15em] uppercase text-neutral-700">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-purple-600 focus:outline-none transition-colors duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-3 text-xs tracking-[0.15em] uppercase text-neutral-700">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-neutral-300 focus:border-purple-600 focus:outline-none transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-3 text-xs tracking-[0.15em] uppercase text-neutral-700">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-3 border border-neutral-300 focus:border-purple-600 focus:outline-none transition-colors duration-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block mb-3 text-xs tracking-[0.15em] uppercase text-neutral-700">
                Project Type
              </label>
              <select
                id="projectType"
                className="w-full px-4 py-3 border border-neutral-300 focus:border-purple-600 focus:outline-none transition-colors duration-300"
              >
                <option value="">Select a project type</option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Design</option>
                <option value="consultation">Design Consultation</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-3 text-xs tracking-[0.15em] uppercase text-neutral-700">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 focus:border-purple-600 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Share your vision, timeline, and any specific requirements..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-neutral-900 text-white py-4 px-8 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-purple-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">Email</p>
              <p className="text-neutral-900">hello@atelierdesign.com</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">Phone</p>
              <p className="text-neutral-900">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">Studio</p>
              <p className="text-neutral-900">New York, NY 10001</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

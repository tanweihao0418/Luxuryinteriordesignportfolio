import { motion } from "motion/react";
import { InteractiveGlobe } from "./InteractiveGlobe";

export function About() {
  const stats = [
    { label: "Presence in", value: "4", sublabel: "continents" },
    { label: "Clients in", value: "55", sublabel: "countries" },
    { label: "Manufacturing in", value: "5 production", sublabel: "plants" },
    { label: "Employing", value: "1200+", sublabel: "people" },
  ];

  return (
    <section id="about" className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="space-y-8 lg:pr-12"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              >
                worldwide
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-lg text-neutral-400 leading-relaxed"
              >
                Atelier is ahead of the curve in achieving<br />
                sustainable excellence across the globe.
              </motion.p>
            </motion.div>

            {/* Right Side - Interactive Globe */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <InteractiveGlobe />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="relative bg-[#2a2a2a] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:bg-[#333333] h-full flex flex-col">
                  {/* Accent line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-lime-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />

                  {/* Label */}
                  <p className="text-xs tracking-wide text-neutral-500 mb-4">
                    {stat.label}
                  </p>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="mb-2"
                  >
                    <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white group-hover:text-lime-400 transition-colors duration-300">
                      {stat.value}
                    </p>
                  </motion.div>

                  {/* Sublabel */}
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
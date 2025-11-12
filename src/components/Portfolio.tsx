import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Contemporary Riverside Residence",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjcyNDM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "London, UK",
    year: "2024"
  },
  {
    id: 2,
    title: "Serene Master Suite",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNzY2NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Paris, France",
    year: "2024"
  },
  {
    id: 3,
    title: "Culinary Excellence",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2Mjc3OTI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "New York, USA",
    year: "2023"
  },
  {
    id: 4,
    title: "Spa-Inspired Sanctuary",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1658760046471-896cbc719c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMG1hcmJsZXxlbnwxfHx8fDE3NjI3Njg0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Dubai, UAE",
    year: "2023"
  },
  {
    id: 5,
    title: "Grand Entertaining Space",
    category: "Dining Room",
    image: "https://images.unsplash.com/photo-1613545325797-1eb61f6f1776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2MjcxNTEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Milan, Italy",
    year: "2023"
  }
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <motion.section 
      ref={sectionRef}
      id="portfolio" 
      className="py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 max-w-4xl">Where passion meets precision</h2>
          </motion.div>

          {/* Statistics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Stat 1 - Projects */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative group cursor-magnetic"
            >
              <motion.div 
                className="relative p-8 rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900/5 rounded-full blur-3xl" />
                
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                    className="text-[80px] md:text-[100px] lg:text-[120px] font-light leading-none mb-2 bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent"
                  >
                    270<sup className="text-[50px] md:text-[60px]">+</sup>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-y-1"
                  >
                    <div className="h-px w-16 bg-neutral-900 mb-3" />
                    <p className="text-sm tracking-[0.2em] uppercase text-neutral-600">
                      Projects
                    </p>
                    <p className="text-neutral-500 text-xs leading-relaxed">
                      Successfully delivered
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stat 2 - Client Satisfaction */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative group cursor-magnetic"
            >
              <motion.div 
                className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Background Element */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                    className="text-[80px] md:text-[100px] lg:text-[120px] font-light leading-none mb-2 bg-gradient-to-br from-amber-900 to-orange-600 bg-clip-text text-transparent"
                  >
                    90<sup className="text-[50px] md:text-[60px]">%</sup>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="space-y-1"
                  >
                    <div className="h-px w-16 bg-amber-900 mb-3" />
                    <p className="text-sm tracking-[0.2em] uppercase text-amber-900">
                      Satisfaction
                    </p>
                    <p className="text-amber-700 text-xs leading-relaxed">
                      Clients who return
                    </p>
                  </motion.div>
                </div>

                {/* Floating Icon */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                >
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stat 3 - Team Size */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative group cursor-magnetic"
            >
              <motion.div 
                className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                    className="text-[80px] md:text-[100px] lg:text-[120px] font-light leading-none mb-2 bg-gradient-to-br from-blue-900 to-indigo-600 bg-clip-text text-transparent"
                  >
                    21
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="space-y-1"
                  >
                    <div className="h-px w-16 bg-blue-900 mb-3" />
                    <p className="text-sm tracking-[0.2em] uppercase text-blue-900">
                      Experts
                    </p>
                    <p className="text-blue-700 text-xs leading-relaxed">
                      In our talented team
                    </p>
                  </motion.div>
                </div>

                {/* Mini Avatar Group */}
                <motion.div
                  className="absolute bottom-6 right-6 flex -space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-lg" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white shadow-lg" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs">
                    +
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Draggable Horizontal Scroll Section */}
        <div className="relative -mx-6 md:-mx-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            whileTap={{ cursor: 'grabbing' }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.1}
          >
            <div className="flex gap-6 md:gap-8 px-6 md:px-12 pb-8">
              {/* Card 1: Projects Delivered - Large Card with Overlay */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex-shrink-0 w-[85vw] md:w-[500px] bg-neutral-900 rounded-[40px] overflow-hidden group cursor-magnetic relative"
              >
                <div className="relative h-full">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={projects[0].image}
                        alt="Projects Delivered"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
                      <span className="text-white/90 text-xs tracking-[0.2em]">MILESTONE</span>
                    </div>
                    <h3 className="text-white mb-4">270+ Projects Delivered</h3>
                    <p className="text-white/80 leading-relaxed">
                      Big stages, small details. Each one designed to leave a mark.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Loyal Clients - Split Design */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex-shrink-0 w-[85vw] md:w-[500px] rounded-[40px] overflow-hidden group cursor-magnetic bg-gradient-to-br from-rose-50 to-pink-100"
              >
                <div className="p-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-[100px] font-light leading-none text-rose-900">
                      90<sup className="text-[60px]">%</sup>
                    </div>
                  </div>
                  
                  <h3 className="text-neutral-900 mb-4">Loyal Clients</h3>
                  <p className="text-neutral-700 leading-relaxed mb-8">
                    Our clients love to come back, proof that true partnership lasts.
                  </p>
                  
                  <div className="mt-auto aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={projects[1].image}
                        alt="Loyal Clients"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Team Nationals - Asymmetric Layout */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex-shrink-0 w-[85vw] md:w-[500px] rounded-[40px] overflow-hidden group cursor-magnetic relative bg-gradient-to-br from-blue-50 to-indigo-100"
              >
                <div className="p-10">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-2xl relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={projects[2].image}
                        alt="Team Nationals"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-white rounded-full px-6 py-3 shadow-lg">
                      <span className="text-2xl font-light">21</span>
                    </div>
                  </div>
                  
                  <h3 className="text-neutral-900 mb-4">Team Nationals</h3>
                  <p className="text-indigo-900 leading-relaxed">
                    One team. Twenty-one perspectives. Countless insights.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Excellence - Minimalist Design */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex-shrink-0 w-[85vw] md:w-[500px] bg-white rounded-[40px] overflow-hidden group cursor-magnetic shadow-xl border border-neutral-200"
              >
                <div className="p-10">
                  <div className="mb-8">
                    <div className="inline-block p-4 bg-emerald-100 rounded-2xl mb-6">
                      <svg className="w-8 h-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-neutral-900 mb-4">Design Excellence</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Award-winning designs that set new standards in luxury interiors.
                    </p>
                  </div>
                  
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={projects[3].image}
                        alt="Design Excellence"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Card 5: Innovation - Gradient Text */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex-shrink-0 w-[85vw] md:w-[500px] bg-gradient-to-br from-purple-600 to-pink-500 rounded-[40px] overflow-hidden group cursor-magnetic"
              >
                <div className="p-10 flex flex-col h-full">
                  <div className="mb-auto">
                    <h3 className="text-white mb-4">Innovation</h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      Pioneering new approaches to create unforgettable spaces.
                    </p>
                  </div>
                  
                  <div className="mt-8 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={projects[4].image}
                        alt="Innovation"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-8 text-sm text-neutral-500 tracking-[0.15em]"
          >
            ← DRAG TO EXPLORE →
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  {
    title: "Full Home Design",
    description: "Comprehensive interior design services from concept to completion for entire residences. We create cohesive spaces that reflect your personality and lifestyle.",
    number: "01",
    image: "https://images.unsplash.com/photo-1611094016919-36b65678f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNzAwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "bg-purple-50"
  },
  {
    title: "Color Consultation",
    description: "Expert guidance on color schemes and material selection to create harmonious spaces. Transform your vision into a sophisticated palette that works.",
    number: "02",
    image: "https://images.unsplash.com/photo-1608231261603-42c08866e163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHBhbGV0dGUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI3ODY1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "bg-lime-50"
  },
  {
    title: "Lighting Design",
    description: "Strategic lighting solutions that enhance ambiance and functionality. We layer light to create atmosphere and highlight architectural features.",
    number: "03",
    image: "https://images.unsplash.com/photo-1761479326325-d0cbce572bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWdodGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjI3ODY1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "bg-violet-50"
  },
  {
    title: "Furniture Curation",
    description: "Bespoke furniture selection and custom pieces tailored to your lifestyle. Each piece is chosen for its quality, comfort, and timeless design.",
    number: "04",
    image: "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzg2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "bg-fuchsia-50"
  },
  {
    title: "Space Planning",
    description: "Optimized layouts that maximize both aesthetics and functionality. We analyze flow, proportion, and purpose to create efficient spaces.",
    number: "05",
    image: "https://images.unsplash.com/photo-1721244654195-943615c56ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZmxvb3IlMjBwbGFufGVufDF8fHx8MTc2Mjc3OTAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "bg-purple-100/50"
  },
  {
    title: "Project Management",
    description: "Seamless coordination of contractors, vendors, and installation. We handle every detail so you can enjoy the transformation stress-free.",
    number: "06",
    image: "https://images.unsplash.com/photo-1737103515139-e3adf7efbd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzYyNzg2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "bg-lime-100/40"
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef(0);
  const scrollVelocity = useRef(0);
  const lastScrollTime = useRef(0);
  
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const animateToSection = (index: number) => {
    if (isAnimating || index < 0 || index >= services.length) return;
    
    setIsAnimating(true);
    const slides = containerRef.current?.querySelectorAll('.service-slide');
    
    if (!slides) return;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[index];
    const direction = index > currentIndex ? 1 : -1;

    // Animate current slide out
    gsap.to(currentSlide, {
      y: -100 * direction + '%',
      rotationX: -15 * direction,
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
    });

    // Animate next slide in
    gsap.fromTo(nextSlide, 
      {
        y: 100 * direction + '%',
        rotationX: 15 * direction,
        scale: 0.85,
        opacity: 0,
        zIndex: 10,
      },
      {
        y: '0%',
        rotationX: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => {
          setIsAnimating(false);
          setCurrentIndex(index);
        }
      }
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    // Mouse wheel handler with inertia
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeDelta = now - lastScrollTime.current;
      lastScrollTime.current = now;

      // Calculate velocity
      scrollVelocity.current = Math.abs(e.deltaY) / (timeDelta || 1);

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set new timeout for inertia effect
      scrollTimeout = setTimeout(() => {
        const threshold = 50;
        
        if (Math.abs(e.deltaY) > threshold) {
          if (e.deltaY > 0 && currentIndex < services.length - 1) {
            animateToSection(currentIndex + 1);
          } else if (e.deltaY < 0 && currentIndex > 0) {
            animateToSection(currentIndex - 1);
          }
        }
      }, 50);
    };

    // Touch handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      const threshold = 50;

      if (Math.abs(diff) > threshold && !isAnimating) {
        if (diff > 0 && currentIndex < services.length - 1) {
          animateToSection(currentIndex + 1);
        } else if (diff < 0 && currentIndex > 0) {
          animateToSection(currentIndex - 1);
        }
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      
      if (e.key === 'ArrowDown' && currentIndex < services.length - 1) {
        animateToSection(currentIndex + 1);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        animateToSection(currentIndex - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentIndex, isAnimating]);

  return (
    <section id="services" className="bg-white">
      {/* Header Section */}
      <div className="py-32 px-6 md:px-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 tracking-[0.15em]">SERVICES</Badge>
        </motion.div>
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="max-w-4xl mx-auto"
          >
            What We Offer
          </motion.h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="h-px bg-neutral-900 mx-auto mb-6"
        />
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-neutral-600 leading-relaxed"
        >
          From initial concept to final installation, we provide a comprehensive suite of services tailored to your needs
        </motion.p>
      </div>

      {/* Interactive Scrolling Container */}
      <div 
        ref={containerRef}
        className="relative h-screen overflow-hidden"
        style={{ perspective: "2000px" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-slide absolute inset-0 ${service.bgColor}`}
            style={{
              zIndex: index === currentIndex ? 5 : index === 0 ? 1 : 0,
              opacity: index === 0 ? 1 : 0,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="h-full flex items-center py-12 md:py-20">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Number - Left/Right Side */}
                  <div
                    className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-3' : 'lg:order-1'} relative lg:static`}
                  >
                    <div className="absolute lg:relative top-0 left-0 lg:top-auto lg:left-auto -z-10 lg:z-0 text-[80px] md:text-[120px] lg:text-[140px] font-light leading-none text-neutral-900/5 lg:text-neutral-900/8 pointer-events-none select-none">
                      {service.number}
                    </div>
                  </div>

                  {/* Content - Middle */}
                  <div className={`lg:col-span-4 space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-2'} relative z-10`}>
                    <div>
                      <h3 className="text-neutral-900 font-serif mb-4">
                        {service.title}
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={scrollToPortfolio}
                        className="group inline-flex items-center gap-3 text-neutral-900 text-sm tracking-[0.1em] transition-transform hover:translate-x-2"
                      >
                        SEE WHAT WE CREATE
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Image - Right/Left Side */}
                  <div
                    className={`lg:col-span-6 group ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-3'} relative z-10`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Subtle Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => animateToSection(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-neutral-900 w-8' 
                  : 'bg-neutral-400 hover:bg-neutral-600'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        {currentIndex < services.length - 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-neutral-600 text-sm animate-bounce">
            Scroll to explore
          </div>
        )}
      </div>
    </section>
  );
}

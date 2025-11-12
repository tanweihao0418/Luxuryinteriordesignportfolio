import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { useEffect } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const rotateZ = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize to -0.5 to 0.5
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50">
      {/* Geometric Background Shapes with Mouse Tracking */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        style={{
          rotateX,
          rotateY,
          rotateZ,
          transformStyle: "preserve-3d",
        }}
        className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-br from-purple-400/30 to-purple-500/40 rounded-bl-[200px]"
      />
      
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        style={{
          rotateX: useTransform(rotateX, (v) => -v),
          rotateY: useTransform(rotateY, (v) => -v),
          rotateZ: useTransform(rotateZ, (v) => -v),
          transformStyle: "preserve-3d",
        }}
        className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-purple-400/30 to-purple-500/40 rounded-tr-[200px]"
      />

      {/* Floating Accent Shapes */}
      <motion.div
        style={{
          x: useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]),
          y: useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]),
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]),
          y: useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]),
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
      />

      {/* Main Content - Added top padding to account for fixed navbar */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 md:pt-40 pb-24">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden mb-2"
          >
            <h1 className="text-neutral-900">
              Crafting Timeless
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-neutral-900">
              Luxury <span className="italic font-serif">Interiors</span>
            </h1>
          </motion.div>
        </div>

        {/* Image Container with Mouse Parallax */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          style={{
            x: useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]),
            y: useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]),
          }}
          className="relative w-full max-w-3xl mb-12 cursor-magnetic group"
        >
          <div className="aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI3NDQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury Interior Design"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Decorative Frame Corner */}
          <motion.div
            className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-purple-400/50 rounded-tl-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8, type: "spring" }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-purple-400/50 rounded-br-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-center max-w-2xl text-neutral-600 text-lg font-light leading-relaxed mb-10"
        >
          We transform spaces into extraordinary living experiences through meticulous attention to detail and uncompromising quality
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <MagneticButton>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-magnetic px-8 py-6 text-xs tracking-[0.2em] shadow-lg hover:shadow-xl transition-shadow"
                onClick={scrollToPortfolio}
              >
                VIEW OUR WORK
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Large Bottom Text with Mouse Parallax */}
      <div className="relative z-10 px-6 md:px-12 pb-12 overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          style={{
            x: useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]),
          }}
          className="text-[15vw] md:text-[12vw] font-light tracking-tight leading-none"
        >
          <span className="text-purple-400/40">ATELI</span>
          <span className="text-neutral-300/60 text-[rgba(185,86,238,0.6)]">ER</span>
        </motion.div>
      </div>
    </div>
  );
}
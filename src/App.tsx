import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Hide default cursor on desktop
    if (window.innerWidth >= 768) {
      document.body.style.cursor = "none";
      
      // Add cursor none to all interactive elements
      const style = document.createElement("style");
      style.innerHTML = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <HamburgerMenu />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Location {
  lat: number;
  lng: number;
  color: string;
}

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const isDraggingRef = useRef(false);

  // Locations to mark on globe (purple and orange dots matching theme)
  const locations: Location[] = [
    { lat: 40.7128, lng: -74.0060, color: "#ff6b35" }, // New York - orange
    { lat: 51.5074, lng: -0.1278, color: "#7c3aed" }, // London - purple
    { lat: 48.8566, lng: 2.3522, color: "#ff6b35" }, // Paris - orange
    { lat: 35.6762, lng: 139.6503, color: "#7c3aed" }, // Tokyo - purple
    { lat: -33.8688, lng: 151.2093, color: "#ff6b35" }, // Sydney - orange
    { lat: 1.3521, lng: 103.8198, color: "#7c3aed" }, // Singapore - purple
    { lat: 25.2048, lng: 55.2708, color: "#ff6b35" }, // Dubai - orange
    { lat: 19.4326, lng: -99.1332, color: "#7c3aed" }, // Mexico City - purple
  ];

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38;

    const drawGlobe = () => {
      const rotation = rotationRef.current;
      
      ctx.clearRect(0, 0, width, height);

      // Draw globe base with gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, "#3a3a3a");
      gradient.addColorStop(0.5, "#2a2a2a");
      gradient.addColorStop(1, "#1a1a1a");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw subtle latitude lines
      ctx.strokeStyle = "#4a4a4a";
      ctx.lineWidth = 0.5;
      for (let i = -60; i <= 60; i += 30) {
        const y = centerY - (radius * Math.sin((i * Math.PI) / 180));
        const localRadius = radius * Math.cos((i * Math.PI) / 180);
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, localRadius, localRadius * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30 * Math.PI) / 180 + rotation.y;
        
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 3) {
          const latRad = (lat * Math.PI) / 180;
          const x = centerX + radius * Math.cos(latRad) * Math.sin(angle);
          const z = radius * Math.cos(latRad) * Math.cos(angle);
          const y = centerY - radius * Math.sin(latRad);
          
          if (z > 0) {
            if (lat === -90) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        }
        ctx.stroke();
      }

      // Draw simplified continents
      ctx.fillStyle = "#505050";
      drawSimplifiedContinents(ctx, centerX, centerY, radius);

      // Draw location markers
      locations.forEach((loc) => {
        const latRad = (loc.lat * Math.PI) / 180;
        const lngRad = ((loc.lng + (rotation.y * 180) / Math.PI) * Math.PI) / 180;
        
        const x = centerX + radius * Math.cos(latRad) * Math.sin(lngRad);
        const z = radius * Math.cos(latRad) * Math.cos(lngRad);
        const y = centerY - radius * Math.sin(latRad);
        
        // Only draw if on visible side
        if (z > 0) {
          const size = 8 + (z / radius) * 4; // Size based on depth
          
          // Glow effect
          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2.5);
          glowGradient.addColorStop(0, loc.color + "CC");
          glowGradient.addColorStop(0.5, loc.color + "40");
          glowGradient.addColorStop(1, loc.color + "00");
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Dot
          ctx.fillStyle = loc.color;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // Inner highlight
          ctx.fillStyle = "#ffffff90";
          ctx.beginPath();
          ctx.arc(x - size * 0.2, y - size * 0.2, size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Add highlight/shine to make it look 3D
      const shineGradient = ctx.createRadialGradient(
        centerX - radius * 0.4,
        centerY - radius * 0.4,
        0,
        centerX,
        centerY,
        radius * 1.2
      );
      shineGradient.addColorStop(0, "#ffffff20");
      shineGradient.addColorStop(0.4, "#ffffff08");
      shineGradient.addColorStop(1, "#ffffff00");
      
      ctx.fillStyle = shineGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawSimplifiedContinents = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      r: number
    ) => {
      const rotation = rotationRef.current;
      
      // Simplified continent shapes
      const continentPaths = [
        // North America
        { lat: 50, lng: -100, size: 0.18 },
        { lat: 40, lng: -95, size: 0.16 },
        { lat: 30, lng: -100, size: 0.12 },
        // South America
        { lat: -10, lng: -60, size: 0.14 },
        { lat: -20, lng: -55, size: 0.12 },
        // Europe
        { lat: 55, lng: 10, size: 0.12 },
        { lat: 50, lng: 15, size: 0.09 },
        { lat: 45, lng: 20, size: 0.08 },
        // Africa
        { lat: 10, lng: 20, size: 0.16 },
        { lat: 0, lng: 25, size: 0.18 },
        { lat: -15, lng: 25, size: 0.15 },
        // Asia
        { lat: 50, lng: 100, size: 0.22 },
        { lat: 40, lng: 90, size: 0.18 },
        { lat: 30, lng: 80, size: 0.16 },
        { lat: 20, lng: 100, size: 0.14 },
        // Australia
        { lat: -25, lng: 135, size: 0.14 },
      ];

      continentPaths.forEach((continent) => {
        const latRad = (continent.lat * Math.PI) / 180;
        const lngRad = ((continent.lng + (rotation.y * 180) / Math.PI) * Math.PI) / 180;
        
        const x = cx + r * Math.cos(latRad) * Math.sin(lngRad);
        const z = r * Math.cos(latRad) * Math.cos(lngRad);
        const y = cy - r * Math.sin(latRad);
        
        if (z > 0) {
          const depth = (z / r + 1) / 2;
          ctx.fillStyle = `rgba(80, 80, 80, ${depth * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, r * continent.size * depth, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const animate = () => {
      if (!isDraggingRef.current) {
        // Auto-rotate slowly when not dragging
        rotationRef.current = {
          ...rotationRef.current,
          y: rotationRef.current.y + 0.003,
        };
      }
      drawGlobe();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    rotationRef.current = {
      x: Math.max(-Math.PI / 6, Math.min(Math.PI / 6, rotationRef.current.x + deltaY * 0.005)),
      y: rotationRef.current.y + deltaX * 0.005,
    };

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - dragStart.x;
    const deltaY = e.touches[0].clientY - dragStart.y;

    rotationRef.current = {
      x: Math.max(-Math.PI / 6, Math.min(Math.PI / 6, rotationRef.current.x + deltaY * 0.005)),
      y: rotationRef.current.y + deltaX * 0.005,
    };

    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ width: '100%', height: '100%' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </motion.div>
  );
}
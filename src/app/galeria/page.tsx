"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Marquee } from "@/components/Marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Lista de imagens para a galeria (excluindo as já usadas em outras páginas)
const galleryImages = [
  { src: "IMG-20260130-WA0026.jpg", size: "small", rotation: -2 },
  { src: "IMG-20260130-WA0028.jpg", size: "medium", rotation: 1.5 },
  { src: "IMG-20260130-WA0029.jpg", size: "large", rotation: -1 },
  { src: "IMG-20260130-WA0032.jpg", size: "small", rotation: 2 },
  { src: "IMG-20260130-WA0036.jpg", size: "medium", rotation: -1.5 },
  { src: "IMG-20260130-WA0037.jpg", size: "small", rotation: 1 },
  { src: "IMG-20260130-WA0038.jpg", size: "large", rotation: -2.5 },
  { src: "IMG-20260130-WA0039.jpg", size: "medium", rotation: 2 },
  { src: "IMG-20260130-WA0042.jpg", size: "small", rotation: -1 },
  { src: "IMG-20260130-WA0043.jpg", size: "medium", rotation: 1.5 },
  { src: "IMG-20260130-WA0044.jpg", size: "large", rotation: -1.5 },
  { src: "IMG-20260130-WA0047.jpg", size: "small", rotation: 2 },
  { src: "IMG-20260130-WA0052.jpg", size: "medium", rotation: -2 },
  { src: "IMG-20260130-WA0054.jpg", size: "small", rotation: 1 },
  { src: "IMG-20260130-WA0056.jpg", size: "large", rotation: -1 },
  { src: "IMG-20260130-WA0058.jpg", size: "medium", rotation: 2.5 },
  { src: "IMG-20260130-WA0060.jpg", size: "small", rotation: -1.5 },
  { src: "IMG-20260130-WA0063.jpg", size: "medium", rotation: 1 },
  { src: "IMG-20260130-WA0064.jpg", size: "large", rotation: -2 },
  { src: "IMG-20260130-WA0067.jpg", size: "small", rotation: 2 },
  { src: "IMG-20260130-WA0068.jpg", size: "medium", rotation: -1 },
  { src: "IMG-20260130-WA0069.jpg", size: "small", rotation: 1.5 },
  { src: "IMG-20260130-WA0070.jpg", size: "large", rotation: -1.5 },
  { src: "IMG-20260130-WA0073.jpg", size: "medium", rotation: 2 },
  { src: "IMG-20260130-WA0074.jpg", size: "small", rotation: -1 },
  { src: "IMG-20260130-WA0075.jpg", size: "medium", rotation: 1.5 },
  { src: "IMG-20260130-WA0078.jpg", size: "large", rotation: -2 },
  { src: "IMG-20260130-WA0079.jpg", size: "small", rotation: 1 },
  { src: "IMG-20260130-WA0083.jpg", size: "medium", rotation: -1.5 },
  { src: "IMG-20260130-WA0085.jpg", size: "small", rotation: 2 },
  { src: "IMG-20260130-WA0086.jpg", size: "large", rotation: -1 },
  { src: "IMG-20260130-WA0089.jpg", size: "medium", rotation: 1.5 },
  { src: "IMG-20260130-WA0090.jpg", size: "small", rotation: -2 },
  { src: "IMG-20260130-WA0093.jpg", size: "medium", rotation: 1 },
  { src: "IMG-20260130-WA0094.jpg", size: "large", rotation: -1.5 },
  { src: "IMG-20260202-WA0000.jpg", size: "small", rotation: 2 },
  { src: "IMG-20260202-WA0001.jpg", size: "medium", rotation: -1 },
  { src: "IMG-20260202-WA0002.jpg", size: "small", rotation: 1.5 },
  { src: "IMG-20260202-WA0003.jpg", size: "large", rotation: -2 },
  { src: "IMG-20260202-WA0004.jpg", size: "medium", rotation: 1 },
  { src: "IMG-20260202-WA0005.jpg", size: "small", rotation: -1.5 },
  { src: "IMG-20260202-WA0006.jpg", size: "medium", rotation: 2 },
  { src: "IMG-20260202-WA0008.jpg", size: "large", rotation: -1 },
  { src: "IMG-20260202-WA0010.jpg", size: "small", rotation: 1.5 },
  { src: "IMG-20260202-WA0011.jpg", size: "medium", rotation: -2 },
  { src: "IMG-20260202-WA0013.jpg", size: "small", rotation: 1 },
  { src: "IMG-20260202-WA0015.jpg", size: "large", rotation: -1.5 },
  { src: "IMG-20260202-WA0017.jpg", size: "medium", rotation: 2 },
  { src: "IMG-20260202-WA0018.jpg", size: "small", rotation: -1 },
  { src: "IMG-20260202-WA0020.jpg", size: "medium", rotation: 1.5 },
  { src: "IMG-20260202-WA0021.jpg", size: "small", rotation: -2 },
  { src: "IMG-20260202-WA0022.jpg", size: "large", rotation: 1 },
  { src: "IMG-20260202-WA0024.jpg", size: "medium", rotation: -1.5 },
  { src: "IMG-20260202-WA0025.jpg", size: "small", rotation: 2 },
  { src: "IMG-20260202-WA0026.jpg", size: "medium", rotation: -1 },
  { src: "IMG-20260202-WA0027.jpg", size: "large", rotation: 1.5 },
  { src: "IMG-20260202-WA0028.jpg", size: "small", rotation: -2 },
  { src: "IMG-20260202-WA0030.jpg", size: "medium", rotation: 1 },
  { src: "IMG-20260202-WA0032.jpg", size: "small", rotation: -1.5 },
  { src: "IMG-20260202-WA0033.jpg", size: "large", rotation: 2 },
  { src: "Within site(1).jpg", size: "medium", rotation: -1 },
  { src: "Within site(2).jpg", size: "small", rotation: 1.5 },
  { src: "Within site(3).jpg", size: "large", rotation: -2 },
  { src: "Within site(4).jpg", size: "medium", rotation: 1 },
  { src: "Within site(5).jpg", size: "small", rotation: -1.5 },
  { src: "Within site(6).jpg", size: "medium", rotation: 2 },
];

const sizeClasses = {
  small: "w-48 h-64 md:w-56 md:h-72",
  medium: "w-64 h-80 md:w-80 md:h-96",
  large: "w-80 h-96 md:w-96 md:h-[28rem]",
};

export default function GaleriaPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTime = 0;
    const scrollSpeed = 0.3; // pixels por frame (ritmo lento a médio)

    // Função para fazer scroll automático
    const autoScroll = (currentTime: number) => {
      if (isPaused) {
        lastTime = currentTime;
        requestAnimationFrame(autoScroll);
        return;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      // Se chegou ao fim, volta ao início suavemente
      if (currentScroll >= maxScroll - 5) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        // Aguardar um pouco antes de continuar
        setTimeout(() => {
          lastTime = performance.now();
          requestAnimationFrame(autoScroll);
        }, 1000);
      } else {
        // Scroll contínuo suave
        container.scrollLeft += scrollSpeed;
        requestAnimationFrame(autoScroll);
      }
    };

    // Iniciar animação
    lastTime = performance.now();
    const animationFrameId = requestAnimationFrame(autoScroll);

    // Pausar quando o usuário interagir
    let userInteracting = false;
    let resumeTimer: NodeJS.Timeout;

    const pauseScroll = () => {
      userInteracting = true;
      setIsPaused(true);
      clearTimeout(resumeTimer);
    };

    const resumeScroll = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        userInteracting = false;
        setIsPaused(false);
        lastTime = performance.now();
      }, 2000); // Retomar após 2 segundos de inatividade
    };

    const handleMouseEnter = () => pauseScroll();
    const handleMouseLeave = () => resumeScroll();
    const handleScroll = () => {
      pauseScroll();
      resumeScroll();
    };
    const handleTouchStart = () => pauseScroll();
    const handleTouchEnd = () => resumeScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("scroll", handleScroll);
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resumeTimer);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isPaused]);

  return (
    <main className="min-h-screen bg-background-dark text-gray-200 pt-16">
      {/* Marquee no topo */}
      <div className="bg-emerald border-b border-primary/20">
        <Marquee />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-charcoal to-charcoal/90">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">
            Nossa Galeria
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
            Momentos de <span className="text-primary italic">Sabor</span> e{" "}
            <span className="text-primary italic">Tradição</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Uma parede de memórias que conta a história do Chef Sam e da paixão pela gastronomia africana em São Paulo.
          </p>
        </div>
      </section>

      {/* Photo Wall Gallery */}
      <section className="relative py-12 bg-gradient-to-b from-charcoal/90 via-background-light to-background-light min-h-screen">
        {/* Wall texture background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.03) 2px,
                rgba(0,0,0,0.03) 4px
              )`,
            }}
          />
        </div>

        {/* Scrollable Photo Wall */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto overflow-y-hidden h-[calc(100vh-200px)] md:h-[calc(100vh-150px)] hide-scrollbar"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <div className="flex items-start gap-4 md:gap-6 px-4 md:px-12 py-8" style={{ width: "max-content", minHeight: "100%" }}>
            {/* Create a masonry-style wall layout with varying heights */}
            {galleryImages.map((image, index) => {
              // Vary the top position for a more natural wall look
              const topOffset = (index % 7) * 20 - 40;
              const column = index % 6;
              
              return (
                <motion.div
                  key={`${image.src}-${index}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative group cursor-pointer flex-shrink-0"
                  style={{
                    transform: `rotate(${image.rotation}deg)`,
                    marginTop: `${topOffset}px`,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Photo Frame */}
                  <div
                    className={`${sizeClasses[image.size as keyof typeof sizeClasses]} relative bg-white p-2 md:p-3 shadow-2xl`}
                    style={{
                      boxShadow: `
                        0 15px 35px rgba(0,0,0,0.4),
                        inset 0 0 0 6px #f5f5f5,
                        inset 0 0 0 8px #e5e5e5,
                        inset 0 0 0 10px #fafafa
                      `,
                    }}
                  >
                    {/* Hanging string effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full opacity-70 shadow-md"></div>
                    
                    <div className="relative w-full h-full overflow-hidden bg-gray-100">
                      <Image
                        src={`/assets/photos/MamaAfricaLaBonneBoufe Photos/${image.src}`}
                        alt={`Galeria - ${image.src}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 200px, 300px"
                        quality={90}
                      />
                    </div>
                  </div>

                  {/* Shadow on the wall */}
                  <motion.div
                    className="absolute inset-0 bg-black/30 blur-2xl -z-10"
                    style={{
                      transform: `rotate(${image.rotation}deg) translateY(15px) scale(1.2)`,
                    }}
                    whileHover={{
                      opacity: 0.5,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            className="flex items-center gap-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPaused ? 0.5 : 1 }}
            transition={{ delay: 1 }}
          >
            <span className="hidden md:inline">
              {isPaused ? "Pausado - Passe o mouse para continuar" : "Rolagem automática"}
            </span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: isPaused ? 0 : [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: isPaused ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}

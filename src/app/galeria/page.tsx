"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Marquee } from "@/components/Marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const PHOTOS_PATH = "/assets/photos/MamaAfricaLaBonneBoufe Photos";

type Size = "small" | "medium" | "large";

interface GalleryImage {
  src: string;
  caption: string;
  size: Size;
  rotation: number;
}

// Helper to build images with alternating size/rotation
function buildImages(
  filenames: string[],
  captionPrefix: string
): GalleryImage[] {
  const sizes: Size[] = ["small", "medium", "large"];
  const rotations = [-2, -1.5, -1, 1, 1.5, 2];
  return filenames.map((src, i) => ({
    src,
    caption: `${captionPrefix} ${i + 1}.`,
    size: sizes[i % sizes.length],
    rotation: rotations[i % rotations.length],
  }));
}

// Pratos - photos from Gallery/Pratos
const pratosFilenames = [
  "IMG-20260130-WA0043.jpg", "IMG-20260130-WA0044.jpg", "IMG-20260130-WA0047.jpg",
  "IMG-20260130-WA0050.jpg", "IMG-20260130-WA0057.jpg", "IMG-20260130-WA0058.jpg",
  "IMG-20260130-WA0061.jpg", "IMG-20260130-WA0063.jpg", "IMG-20260130-WA0064.jpg",
  "IMG-20260130-WA0067.jpg", "IMG-20260130-WA0068.jpg", "IMG-20260130-WA0069.jpg",
  "IMG-20260130-WA0070.jpg", "IMG-20260130-WA0071.jpg", "IMG-20260130-WA0073.jpg",
  "IMG-20260130-WA0074.jpg", "IMG-20260130-WA0075.jpg", "IMG-20260130-WA0078.jpg",
  "IMG-20260130-WA0079.jpg", "IMG-20260130-WA0083.jpg", "IMG-20260130-WA0084.jpg",
  "IMG-20260130-WA0085.jpg", "IMG-20260130-WA0086.jpg", "IMG-20260130-WA0088.jpg",
  "IMG-20260130-WA0089.jpg", "IMG-20260130-WA0090.jpg", "IMG-20260130-WA0091.jpg",
  "IMG-20260130-WA0092.jpg", "IMG-20260130-WA0093.jpg", "IMG-20260130-WA0094.jpg",
  "IMG-20260130-WA0095.jpg", "IMG-20260130-WA0096.jpg", "IMG-20260130-WA0098.jpg",
  "IMG-20260205-WA0061.jpg",
];

// Chef Sam na TV e com Personalidades Influentes - photos from Gallery/TV & FIGURAS INFLUENTES
const tvFilenames = [
  "BAND TV.jpg", "IMG-20260202-WA0004.jpg", "IMG-20260202-WA0009.jpg",
  "IMG-20260202-WA0011.jpg", "IMG-20260202-WA0012.jpg", "IMG-20260202-WA0014.jpg",
  "IMG-20260202-WA0018.jpg", "IMG-20260202-WA0021.jpg", "IMG-20260202-WA0022.jpg",
  "IMG-20260202-WA0026.jpg", "IMG-20260202-WA0031.jpg", "IMG-20260205-WA0054.jpg",
  "IMG-20260205-WA0057.jpg", "IMG-20260205-WA0059.jpg", "IMG-20260205-WA0060.jpg",
  "IMG-20260205-WA0062.jpg", "IMG-20260205-WA0064.jpg", "IMG-20260205-WA0066.jpg",
  "Rede TV.jpg", "Samuel Eto'o.jpg", "SPTV (2).jpg", "SPTV.jpg",
];

const pratosImages = buildImages(pratosFilenames, "Prato da gastronomia africana");
const tvImages = buildImages(tvFilenames, "Chef Sam na mídia e com personalidades");

interface GallerySection {
  title: string;
  basePath: string;
  images: GalleryImage[];
}

const gallerySections: [GallerySection, GallerySection] = [
  {
    title: "Pratos",
    basePath: "Gallery/Pratos",
    images: pratosImages,
  },
  {
    title: "Chef Sam na TV e com Personalidades Influentes",
    basePath: "Gallery/TV & FIGURAS INFLUENTES",
    images: tvImages,
  },
];

const sizeClasses: Record<Size, string> = {
  small: "w-40 h-52 sm:w-48 sm:h-64 md:w-56 md:h-72",
  medium: "w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96",
  large: "w-56 h-72 sm:w-80 sm:h-96 md:w-96 md:h-[28rem]",
};

function GalleryPhotoCard({
  image,
  basePath,
}: {
  image: GalleryImage;
  basePath: string;
}) {
  return (
    <motion.div
      className="relative group flex-shrink-0"
      style={{
        transform: `rotate(${image.rotation}deg)`,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
    >
      <div
        className={`${sizeClasses[image.size]} relative bg-white p-2 md:p-3 shadow-2xl`}
        style={{
          boxShadow: `
            0 15px 35px rgba(0,0,0,0.4),
            inset 0 0 0 6px #f5f5f5,
            inset 0 0 0 8px #e5e5e5,
            inset 0 0 0 10px #fafafa
          `,
        }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full opacity-70 shadow-md z-10" />
        <div className="relative w-full h-full overflow-hidden bg-gray-100">
          <Image
            src={encodeURI(`${PHOTOS_PATH}/${basePath}/${image.src}`)}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 350px"
            quality={90}
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black/30 blur-2xl -z-10"
        style={{
          transform: `rotate(${image.rotation}deg) translateY(15px) scale(1.2)`,
        }}
      />
    </motion.div>
  );
}

export default function GaleriaPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [sectionA, sectionB] = gallerySections;

  return (
    <main className="min-h-screen bg-background-dark text-gray-200 pt-16">
      <div className="bg-emerald border-b border-primary/20">
        <Marquee />
      </div>

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

      {/* Gallery - Gradient flows seamlessly into footer */}
      <section
        className="relative py-8 md:py-12 bg-gradient-to-b from-charcoal via-charcoal/80 to-[#e5e0d8] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          className={`gallery-container ${isHovered ? "gallery-paused" : ""}`}
          aria-label="Galeria de fotos"
        >
          {/* Desktop: 2 rows stacked, horizontal scroll opposite dirs | Mobile: 2 columns side-by-side, vertical scroll opposite dirs */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-8 w-full">
            {/* Section A - Pratos: Desktop row 1, scrolls left | Mobile left column, scrolls up */}
            <div className="w-1/2 md:w-full flex flex-col gap-3 md:gap-4">
              <h2 className="text-lg md:text-xl font-display font-semibold text-terracotta px-4 md:px-8">
                {sectionA.title}
              </h2>
              <div className="overflow-hidden h-[55vh] md:h-[400px] min-h-[280px]">
                <div
                  data-gallery-track
                  className="flex flex-col md:flex-row gap-4 md:gap-6 px-2 md:px-8 h-max md:h-full w-full md:w-max animate-gallery-scroll-up md:animate-gallery-scroll-left"
                >
                  {[...sectionA.images, ...sectionA.images].map((image, index) => (
                    <div key={`a-${index}`} className="flex-shrink-0">
                      <GalleryPhotoCard
                        image={image}
                        basePath={sectionA.basePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section B - Chef Sam na TV: Desktop row 2, scrolls right | Mobile right column, scrolls down */}
            <div className="w-1/2 md:w-full flex flex-col gap-3 md:gap-4">
              <h2 className="text-lg md:text-xl font-display font-semibold text-terracotta px-4 md:px-8">
                {sectionB.title}
              </h2>
              <div className="overflow-hidden h-[55vh] md:h-[400px] min-h-[280px]">
                <div
                  data-gallery-track
                  className="flex flex-col md:flex-row gap-4 md:gap-6 px-2 md:px-8 h-max md:h-full w-full md:w-max animate-gallery-scroll-down md:animate-gallery-scroll-right"
                >
                  {[...sectionB.images, ...sectionB.images].map((image, index) => (
                    <div key={`b-${index}`} className="flex-shrink-0">
                      <GalleryPhotoCard
                        image={image}
                        basePath={sectionB.basePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <motion.div
            className="flex items-center gap-2 text-terracotta/90 text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.4 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="hidden sm:inline">
              {isHovered ? "Pausado" : "Passe o mouse para pausar"}
            </span>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}

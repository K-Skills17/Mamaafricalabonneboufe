"use client";

import { Unidades } from "@/components/Unidades";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const platterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (platterRef.current) observer.observe(platterRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (platterRef.current) observer.unobserve(platterRef.current);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <main className="min-h-screen bg-[#1A1A1A] text-white">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="fade-in relative h-screen w-full overflow-hidden"
        >
          <div className="relative h-full w-full">
            <Image
              src="/assets/photos/MamaAfricaLaBonneBoufe Photos/Hero image.jpg"
              alt="O Sabor Ancestral de Camarões"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                  O Sabor Ancestral
                  <br />
                  <span className="text-[#D4AF37]">de Camarões</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mt-4 drop-shadow-lg">
                  Experiência Imersiva em São Paulo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platter Section */}
        <section
          ref={platterRef}
          className="fade-in py-16 md:py-24 px-4 md:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/assets/photos/MamaAfricaLaBonneBoufe Photos/Homepage.jpg"
                  alt="Platter compartilhado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Feito para
                  <br />
                  <span className="text-[#A45C40]">Compartilhar</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Mãos que Alimentam. Sabores da África em cada mordida.
                  Ancestralidade e Sabor em cada prato.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossas Casas - Unidades */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#1A1A1A] to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nossas <span className="text-[#D4AF37]">Casas</span>
            </h2>
            <Unidades />
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}

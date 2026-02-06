"use client";

import { Unidades } from "@/components/Unidades";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Marquee } from "@/components/Marquee";
import { GlobeIcon, ShareIcon, HeartIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background-dark text-gray-200 pt-16">
      {/* Marquee no topo */}
      <div className="bg-emerald border-b border-primary/20">
        <Marquee />
      </div>

      {/* Hero Section - Mantém o header atual */}
      <section className="relative h-[92vh] flex items-end overflow-hidden bg-charcoal">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/photos/MamaAfricaLaBonneBoufe Photos/Hero image.jpg"
            alt="O Sabor de Camarões que São Paulo Abraçou!"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </motion.div>
        <div className="relative px-6 pb-20 w-full z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald/90 text-white text-[10px] font-bold tracking-widest uppercase mb-4 border border-white/10">
            Herança Camaronesa • Sabor Brasileiro
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-4 drop-shadow-2xl">
            O Sabor de <span className="text-primary italic font-medium">Camarões</span>
            <br />
            que São Paulo <span className="text-primary italic font-medium">Abraçou!</span>
          </h1>
          <p className="text-white text-sm md:text-base mb-8 max-w-sm font-light leading-relaxed drop-shadow-lg">
            Comida de verdade, tempero de vó e mesa cheia.
            <br />
            O Chef Sam traz <span className="font-medium text-primary">10 anos de tradição</span> para quem ama comer bem e compartilhar momentos.
          </p>
        </div>
      </section>

      {/* Divider com padrão */}
      <div className="h-8 bg-terracotta flex items-center justify-around overflow-hidden">
        <div className="flex gap-4 opacity-30">
          <span className="text-white text-xs">✦</span>
          <span className="text-white text-xs">✦</span>
          <span className="text-white text-xs">✦</span>
          <span className="text-white text-xs">✦</span>
          <span className="text-white text-xs">✦</span>
        </div>
      </div>

      {/* Why Us Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-background-light relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl mb-6 text-charcoal"
            >
              Por que <span className="text-primary">nos</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-center border-2 border-emerald/20 hover:border-emerald/40 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6 text-emerald">
                <GlobeIcon />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-4 text-charcoal">
                100% Autêntico
              </h3>
              <p className="text-gray-700 leading-relaxed font-light text-sm">
                Sabores <span className="text-emerald font-semibold">autênticos de Camarões</span> com ingredientes selecionados.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6 text-primary">
                <ShareIcon />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-4 text-charcoal">
                Feito para Compartilhar
              </h3>
              <p className="text-gray-700 leading-relaxed font-light text-sm">
                Travessas fartas para a <span className="text-primary font-semibold">família toda</span>.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-center border-2 border-terracotta/20 hover:border-terracotta/40 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6 text-terracotta">
                <HeartIcon />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-4 text-charcoal">
                Coração do Chef
              </h3>
              <p className="text-gray-700 leading-relaxed font-light text-sm">
                <span className="text-terracotta font-semibold">10 anos</span> cozinhando com paixão e dedicação.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Chef Sam Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-background-light relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-terracotta font-bold tracking-widest uppercase text-xs block mb-2">O Mestre</span>
            <h2 className="font-display text-3xl mb-6 text-charcoal">A Visão do Chef Sam</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/chef.jpg"
                alt="Chef Sam - 10 Anos de Tradição"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl">
                <p className="text-white text-xs italic font-light leading-relaxed drop-shadow-lg">
                  "Minha cozinha é uma ponte. Cada prato carrega o peso das minhas raízes camaronesas e o calor do solo brasileiro."
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-700 leading-relaxed font-light">
                O Chef Sam traz para São Paulo uma experiência que transcende o paladar. Sua paixão pela gastronomia nasceu nas feiras de Douala e se refinou nas técnicas da alta culinária internacional.
              </p>
              <div className="flex items-center gap-4 py-4 border-y border-gray-200">
                <div className="text-center flex-1">
                  <span className="block text-2xl font-display text-primary">10+</span>
                  <span className="text-[10px] uppercase text-gray-600 font-bold">Anos de História</span>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center flex-1">
                  <span className="block text-2xl font-display text-primary">100%</span>
                  <span className="text-[10px] uppercase text-gray-600 font-bold">Autêntico</span>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center flex-1">
                  <span className="block text-2xl font-display text-primary">São Paulo</span>
                  <span className="text-[10px] uppercase text-gray-600 font-bold">2 Unidades</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Platter Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 bg-charcoal text-white overflow-hidden relative"
      >
        <div className="pattern-bg absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <div className="px-6 mb-8">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">Destaques</span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl mb-6 text-white"
            >
              Travessas <span className="text-primary">Fartas</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-white leading-relaxed font-light">
                Aqui, comer é uma <span className="text-primary font-medium">experiência compartilhada</span>.
                Os platters são feitos para ser divididos, para que cada mordida seja uma
                celebração coletiva de <span className="text-primary font-medium">sabor e tradição</span>.
              </p>
              <p className="text-white leading-relaxed font-light">
                <span className="text-primary font-medium">Mãos que Alimentam.</span>{" "}
                Sabores autênticos em cada prato. Uma imersão completa na gastronomia
                de <span className="text-primary font-medium">Camarões</span>, agora em São Paulo.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/Homepage.jpg"
                alt="Platter compartilhado - Experiência de sabores"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Nossas Casas - Unidades */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-background-light"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-terracotta font-bold tracking-widest uppercase text-xs block mb-2">Localização</span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl mb-6 text-charcoal"
            >
              Nossas <span className="text-primary">Casas</span>
            </motion.h2>
          </div>
          <Unidades />
        </div>
      </motion.section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}

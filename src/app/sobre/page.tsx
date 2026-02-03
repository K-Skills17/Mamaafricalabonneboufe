"use client";

import { Unidades } from "@/components/Unidades";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Marquee } from "@/components/Marquee";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SobrePage() {
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

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden bg-charcoal">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/photos/MamaAfricaLaBonneBoufe Photos/Within site.jpg"
            alt="Chef Sam - 25 Anos de Tradição"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </motion.div>
        <div className="relative px-6 pb-20 w-full z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald/90 text-white text-[10px] font-bold tracking-widest uppercase mb-4 border border-white/10">
            Nossa História
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-4 drop-shadow-2xl">
            25 Anos de <span className="text-primary italic font-medium">Fogo</span>,
            <br />
            <span className="text-primary italic font-medium">Tradição</span> e <span className="text-primary italic font-medium">Alma</span>
          </h1>
          <p className="text-white text-sm md:text-base mb-8 max-w-2xl font-light leading-relaxed drop-shadow-lg">
            A história do Chef Sam e a chegada da verdadeira gastronomia camaronesa ao coração de São Paulo.
          </p>
        </div>
      </section>

      {/* Divider com padrão */}
      <div className="h-12 bg-gradient-to-r from-terracotta via-primary to-terracotta flex items-center justify-around overflow-hidden">
        <div className="flex gap-6 opacity-40">
          <span className="text-white text-sm">✦</span>
          <span className="text-white text-sm">✦</span>
          <span className="text-white text-sm">✦</span>
          <span className="text-white text-sm">✦</span>
          <span className="text-white text-sm">✦</span>
        </div>
      </div>

      {/* Section 2: A Nossa Jornada */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-background-light relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-terracotta font-bold tracking-widest uppercase text-xs block mb-2">A Nossa Jornada</span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl mb-6 text-charcoal"
            >
              Do <span className="text-primary">Camarões</span> para <span className="text-primary">São Paulo</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg mb-6">
                A jornada do Chef Sam começou há mais de duas décadas nas cozinhas vibrantes de Camarões. Com o sonho de levar os sabores ancestrais da sua terra para o mundo, ele desembarcou em São Paulo trazendo na bagagem mais do que receitas: trouxe segredos, temperos raros e a paixão por alimentar o espírito.
              </p>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                Hoje, com <span className="text-primary font-semibold">25 anos de maestria</span>, o Chef Sam é o guardião de uma cultura que se manifesta em cada aroma que sai de suas panelas.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/IMG-20260130-WA0057.jpg"
                alt="Cozinha e tradição do Chef Sam"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Section 3: O Compromisso com a Raiz */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-charcoal text-white overflow-hidden relative"
      >
        <div className="pattern-bg absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">O Compromisso</span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl mb-6 text-white"
            >
              100% <span className="text-primary">Africano</span>. Sem Atalhos.
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8 md:p-10">
              <p className="text-white leading-relaxed font-light text-base md:text-lg mb-6">
                No Mama Africa La Bonne Bouffe, a palavra <span className="text-primary font-semibold">"fusão" não existe</span>. Nosso compromisso é com a fidelidade absoluta aos sabores do continente.
              </p>
              <p className="text-white leading-relaxed font-light text-base md:text-lg">
                Utilizamos ingredientes autênticos e técnicas tradicionais para garantir que você sinta o <span className="text-primary font-semibold">verdadeiro gosto de Camarões</span>, seja no Tatuapé ou em Pinheiros. Aqui, a tradição é o ingrediente principal.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/IMG-20260130-WA0061.jpg"
                alt="Ingredientes autênticos e tradição"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Section 4: O Ritual do Compartilhar */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-background-light relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-terracotta font-bold tracking-widest uppercase text-xs block mb-2">O Ritual</span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl mb-6 text-charcoal"
            >
              Uma <span className="text-primary">Mesa</span>, Muitas <span className="text-primary">Mãos</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/IMG-20260130-WA0050.jpg"
                alt="Platter compartilhado - Ritual do compartilhar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg mb-6">
                Acreditamos que a comida sabe melhor quando compartilhada. Nossa experiência é centrada nos <span className="text-primary font-semibold">grandes platters (travessas)</span>, desenhados para que a família e os amigos se sirvam juntos.
              </p>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                É um convite para baixar a guarda, esquecer os talheres e se conectar através do paladar. É a <span className="text-primary font-semibold">celebração da fartura e da união</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Section 5: Onde Estamos */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-charcoal text-white overflow-hidden relative"
      >
        <div className="pattern-bg absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">Onde Estamos</span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl mb-6 text-white"
            >
              Duas <span className="text-primary">Casas</span>, Uma Só <span className="text-primary">Família</span>
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-white leading-relaxed font-light text-base md:text-lg text-center max-w-3xl mx-auto">
              Seja na energia urbana de <span className="text-primary font-semibold">Pinheiros</span> ou no acolhimento do <span className="text-primary font-semibold">Tatuapé</span>, o Mama Africa é a sua casa. Em cada unidade, o Chef Sam imprime sua digital, garantindo que a imersão seja completa, festiva e, acima de tudo, inesquecível.
            </p>
          </motion.div>
          <Unidades />
        </div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Section 6: Closing Signature */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-emerald text-white relative overflow-hidden"
      >
        <div className="pattern-bg absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/SPTV chef sam.jpg"
                alt="Chef Sam - Assinatura"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8 md:p-12 text-center md:text-left order-1 md:order-2">
              <p className="text-white leading-relaxed font-light text-lg md:text-xl mb-8 italic">
                "Minha cozinha é minha herança. Convido você a sentar-se à minha mesa e descobrir o sabor da África que São Paulo aprendeu a amar."
              </p>
              <p className="text-primary font-display text-xl md:text-2xl">
                — Chef Sam
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}

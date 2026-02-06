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
            alt="Chef Sam - 10 Anos de Tradição"
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
            10 Anos de <span className="text-primary italic font-medium">Fogo</span>,
            <br />
            <span className="text-primary italic font-medium">Tradição</span> e <span className="text-primary italic font-medium">Alma</span>
          </h1>
          <p className="text-white text-sm md:text-base mb-8 max-w-2xl font-light leading-relaxed drop-shadow-lg">
            A história do Chef Sam e a chegada da verdadeira gastronomia camaronesa ao coração de São Paulo desde 2016.
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

      {/* Section 2: A Nossa Jornada - A história do Chef Sam */}
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

          {/* Bloco 1: Origem e decisão + Sahara */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg mb-6">
                Nascido em Yaoundé, nos Camarões, e formado em Engenharia Eletrônica, Sam decidiu ainda jovem desbravar o mundo — uma escolha ousada e desafiadora para um africano, marcada por coragem, resiliência e inúmeros obstáculos ao longo do caminho.
              </p>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                Sua jornada começou em um ônibus rumo à Europa, atravessando países como Nigéria, Mali, Burkina Faso, Níger e Chade. No trajeto, enfrentou um dos momentos mais difíceis de sua vida ao cruzar o implacável Deserto do Saara. Ali, testemunhou a perda de muitas vidas por falta de comida e água, sobrevivendo durante quatro dias intensos de sofrimento extremo, até avistar, à distância, a primeira cidade da Argélia — uma luz solitária que surgia na escuridão da caminhada noturna.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/chef 1.jpg"
                alt="Chef Sam - A jornada começou em Yaoundé"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
          </div>

          {/* Bloco 2: Tamaracet e Maghnia */}
          <motion.div variants={itemVariants} className="mb-20 max-w-3xl">
            <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
              Em Tamaracet, encontrou um cenário pitoresco que lhe permitiu recuperar as forças. Dois dias depois, seguiu rumo à fronteira com o Marrocos, em Maghnia, uma região marcada pela dura realidade imposta pelos Tuaregues (habitantes do deserto) à população local, revelando uma crueldade que deixou marcas profundas em sua trajetória.
            </p>
          </motion.div>

          {/* Bloco 3: Senegal, navio, Argentina + foto */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/chef 2.jpg"
                alt="Chef Sam - Nova vida na América do Sul"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg mb-6">
                Diante de tantas adversidades, Sam decidiu retornar ao Senegal. Em Dakar, embarcou clandestinamente em um navio de carga, perdendo a noção do tempo durante a travessia. Ao final da viagem, desembarcou em Rosário, na Argentina, seguindo posteriormente para Buenos Aires.
              </p>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                Sem nunca ter saído de seu continente de origem, encantou-se com esse novo mundo e sua rica diversidade cultural. Foi ali que, após um pedido de extradição, decidiu iniciar sua primeira experiência gastronômica, dedicando-se a divulgar e apresentar a culinária e a cultura africanas.
              </p>
            </motion.div>
          </div>

          {/* Bloco 4: Brasil, São Paulo, fundação + foto */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg mb-6">
                Ainda na Argentina, tomou conhecimento do Carnaval Brasileiro e, movido pela curiosidade, seguiu para o Rio de Janeiro. Após o carnaval, conheceu sua esposa no interior de São Paulo, na cidade de São José do Rio Preto. Juntos, mudaram-se para a capital paulista, onde fundaram o <span className="text-primary font-semibold">MAMA AFRICA LA BONNE BOUFFE</span>, no bairro do Tatuapé.
              </p>
              <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                O restaurante nasceu como um sonho que, dia após dia, vem crescendo, ganhando forma e espaço, conquistando o paladar e o coração dos paulistanos. Com carisma, dedicação e autenticidade, Sam ampliou seus horizontes e celebrou mais uma conquista: o <span className="text-primary font-semibold">MAMA AFRICA LA BONNE BOUFFE GRILL</span>, localizado na Vila Madalena.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/photos/MamaAfricaLaBonneBoufe Photos/chef 6.jpg"
                alt="Chef Sam - Mama Africa La Bonne Bouffe"
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

      {/* White padding spacer */}
      <div className="py-16 md:py-24 bg-background-light" aria-hidden="true" />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Section 4: Onde Estamos */}
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

      {/* Section 5: Closing Signature */}
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

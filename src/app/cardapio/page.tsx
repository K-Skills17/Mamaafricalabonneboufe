"use client";

import { menuCategories } from "@/data/menu";
import { motion } from "framer-motion";

export default function CardapioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <main className="min-h-screen bg-background-light text-charcoal pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">
              MAMA ÁFRICA – LA BONNE BOUFFE
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Cardápio <span className="text-primary italic">Completo</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Sabores autênticos de Camarões em cada prato. Uma experiência gastronômica única em São Paulo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="mb-24 last:mb-0"
            >
              {/* Category Section */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Category Header with Photo */}
                <div className="relative">
                  {/* Photo Placeholder */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 border-b border-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 md:w-12 md:h-12 text-primary/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 font-medium">
                          Foto em breve
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 via-charcoal/70 to-transparent p-6 md:p-8">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Items List */}
                <div className="p-6 md:p-8">
                  <div className="space-y-4 md:space-y-5">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={`${category.id}-${itemIndex}`}
                        variants={itemVariants}
                        className="border-b border-gray-100 last:border-0 pb-4 md:pb-5 last:pb-0"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                          <div className="flex-1">
                            <h3 className="font-display text-lg md:text-xl text-charcoal">
                              {item.name}
                            </h3>
                            {item.description && (
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mt-1.5">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-end sm:items-start">
                            <div className="text-right sm:text-left">
                              <p className="font-semibold text-primary text-lg md:text-xl whitespace-nowrap">
                                {item.price}
                              </p>
                              {item.priceForTwo && (
                                <p className="text-sm md:text-base text-gray-600 mt-1 whitespace-nowrap">
                                  {item.priceForTwo}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer Info Section */}
      <section className="py-12 px-6 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h3 className="font-display text-2xl mb-6 text-primary">
              Informações Importantes
            </h3>
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p>
                <span className="font-semibold text-white">Aceitamos todos os cartões</span> (débito e crédito)
              </p>
              <p>
                <span className="font-semibold text-white">Exceto VR</span>
              </p>
              <p>
                <span className="font-semibold text-white">Taxa de serviço:</span> 10%
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

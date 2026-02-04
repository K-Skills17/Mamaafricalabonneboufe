"use client";

import { motion } from "framer-motion";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background-light text-charcoal pt-16">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl mb-4">
              Termos de <span className="text-primary italic">Uso</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
          >
            {/* Section 1 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                1. Reservas
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                  As reservas feitas pelo site são direcionadas ao WhatsApp da unidade selecionada. A confirmação depende da disponibilidade da mesa.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                2. Propriedade Intelectual
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                  Todo o conteúdo visual, fotos do Chef Sam e pratos são de propriedade exclusiva do Mama Africa La Bonne Bouffe. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                Para mais informações sobre nossos termos de uso, entre em contato conosco através do{" "}
                <a
                  href="/"
                  className="text-primary hover:text-amber-600 underline font-medium transition-colors"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

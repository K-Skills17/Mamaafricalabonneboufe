"use client";

import { motion } from "framer-motion";

export default function PrivacidadePage() {
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
              Política de <span className="text-primary italic">Privacidade</span>
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
                1. Coleta de Dados
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                  Coletamos apenas as informações estritamente necessárias para processar suas reservas e melhorar sua navegação. Seus dados de contato via WhatsApp são tratados diretamente pela plataforma.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                2. Uso de Cookies
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                  Utilizamos cookies para entender como você interage com nosso conteúdo e para lembrar sua unidade de preferência (Tatuapé ou Pinheiros).
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                3. Seus Direitos
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                  Em conformidade com a LGPD, você tem o direito de acessar, corrigir ou excluir seus dados a qualquer momento. Para exercer esses direitos, entre em contato conosco através do WhatsApp de qualquer uma de nossas unidades.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                Para mais informações sobre nossa política de privacidade, entre em contato conosco através do{" "}
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

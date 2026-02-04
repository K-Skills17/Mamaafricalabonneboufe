"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { unidades, type UnidadeSlug } from "@/data/unidades";

export function WhatsAppButton() {
  const [showSelector, setShowSelector] = useState(false);

  const openWhatsApp = (unidadeSlug: UnidadeSlug) => {
    const unidade = unidades[unidadeSlug];
    const phoneNumber = unidade.whatsapp.replace(/\D/g, ""); // Remove caracteres não numéricos
    const message = encodeURIComponent(
      `Olá! Vi o site e gostaria de saber mais sobre a experiência na unidade ${unidade.nome}.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setShowSelector(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowSelector(!showSelector)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110"
        aria-label="Abrir WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>

      {/* Selector Modal */}
      <AnimatePresence>
        {showSelector && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setShowSelector(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 min-w-[300px] max-w-[90vw] border border-gray-100"
            >
              <h3 className="text-lg md:text-xl font-display font-bold mb-4 text-charcoal">
                Para qual unidade você deseja falar?
              </h3>
              <div className="space-y-3">
                {Object.entries(unidades).map(([slug, unidade], index) => (
                  <motion.button
                    key={slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => openWhatsApp(slug as UnidadeSlug)}
                    className="w-full bg-primary hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-full transition-all duration-200 text-left shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {unidade.nome}
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => setShowSelector(false)}
                className="mt-4 w-full text-gray-500 hover:text-charcoal text-sm transition-colors font-medium"
              >
                Cancelar
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

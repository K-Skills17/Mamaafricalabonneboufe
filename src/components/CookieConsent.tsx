"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Mostra o popup após um pequeno delay para melhor UX
      setTimeout(() => setShowConsent(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={handleReject}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary/30 shadow-2xl"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-charcoal mb-2">
                    Valorizamos sua privacidade
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                    Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{" "}
                    <a
                      href="/privacidade"
                      className="text-primary hover:text-amber-600 underline font-medium transition-colors"
                    >
                      política de privacidade
                    </a>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAccept}
                    className="bg-primary hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Aceitar Todos
                  </button>
                  <button
                    onClick={handleReject}
                    className="bg-transparent border-2 border-gray-300 hover:border-primary text-charcoal hover:text-primary font-semibold py-3 px-6 rounded-full transition-all duration-200 whitespace-nowrap"
                  >
                    Recusar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

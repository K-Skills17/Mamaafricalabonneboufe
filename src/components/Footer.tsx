"use client";

import Link from "next/link";
import { unidades } from "@/data/unidades";

export function Footer() {
  const openGoogleMaps = (url: string) => {
    window.open(url, "_blank");
  };

  const openWhatsApp = (phoneNumber: string, unidadeNome: string) => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const message = encodeURIComponent(
      `Olá! Gostaria de saber se vocês estão abertos hoje e o que tem no cardápio.`
    );
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-charcoal via-charcoal to-terracotta/20 pt-16 pb-24 px-6 border-t border-terracotta/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Section A: The Brand Soul */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-display font-bold text-2xl text-primary mb-1">
                MAMA AFRICA
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70 text-gray-300">
                La Bonne Bouffe
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed font-light">
              25 anos trazendo o tempero autêntico de Camarões para o coração de São Paulo. Uma experiência feita para compartilhar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mamaafrica_labonnebouffe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Section B: Nossas Casas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-6">
              Nossas Casas
            </h4>
            <div className="space-y-8">
              {Object.values(unidades).map((unidade) => (
                <div key={unidade.id} className="space-y-3">
                  <h5 className="font-display text-lg text-white font-semibold">
                    {unidade.nome}
                  </h5>
                  <button
                    onClick={() => openGoogleMaps(unidade.googleMaps)}
                    className="text-sm text-gray-300 hover:text-primary transition-colors text-left block"
                  >
                    {unidade.endereco}
                  </button>
                  <p className="text-sm text-gray-300">
                    {unidade.horarios}
                  </p>
                  <button
                    onClick={() => openWhatsApp(unidade.whatsapp, unidade.nome)}
                    className="text-sm text-primary hover:text-amber-400 font-medium transition-colors"
                  >
                    Falar no WhatsApp →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-6">
              Navegação Rápida
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cardapio"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li className="pt-2 border-t border-primary/20">
                <Link
                  href="/privacidade"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Section D: The Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
              <Link
                href="/termos"
                className="hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/privacidade"
                className="hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">
              © 2026 Mama Africa La Bonne Bouffe
            </div>
            <div className="text-[10px] text-gray-400">
              Desenvolvido com ❤️ em São Paulo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

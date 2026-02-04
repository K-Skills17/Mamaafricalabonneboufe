"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cardapio", label: "Cardápio" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/galeria", label: "Galeria" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-gray-100">
      <div className="px-6 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
          <span className="font-display font-bold text-xl tracking-tight text-terracotta">
            MAMA AFRICA
          </span>
          <span className="text-[8px] uppercase tracking-[0.2em] font-medium -mt-1 opacity-70">
            La Bonne Bouffe
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-charcoal hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-light border-t border-gray-100">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-charcoal hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

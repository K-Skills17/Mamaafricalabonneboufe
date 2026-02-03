"use client";

import { unidades } from "@/data/unidades";
import Image from "next/image";

export function Unidades() {
  const openGoogleMaps = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {Object.values(unidades).map((unidade) => {
        return (
          <div
            key={unidade.id}
            className="bg-white rounded-2xl p-6 md:p-8 border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-4 text-primary">
              {unidade.nome}
            </h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed font-light">{unidade.endereco}</p>
            <button
              onClick={() => openGoogleMaps(unidade.googleMaps)}
              className="w-full bg-primary hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-lg"
            >
              Como Chegar
            </button>
          </div>
        );
      })}
    </div>
  );
}

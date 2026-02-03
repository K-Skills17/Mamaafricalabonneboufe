"use client";

import { unidades } from "@/data/unidades";
import Image from "next/image";

export function Unidades() {
  const openGoogleMaps = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {Object.values(unidades).map((unidade) => (
        <div
          key={unidade.id}
          className="bg-[#2A2A2A] rounded-lg p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]">
            {unidade.nome}
          </h3>
          <p className="text-gray-300 mb-6 text-lg">{unidade.endereco}</p>
          <button
            onClick={() => openGoogleMaps(unidade.googleMaps)}
            className="w-full bg-[#A45C40] hover:bg-[#8B4E35] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Como Chegar
          </button>
        </div>
      ))}
    </div>
  );
}

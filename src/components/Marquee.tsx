"use client";

export function Marquee() {
  const text = "100% AFRICANO • 10 ANOS DE TRADIÇÃO • COMPARTILHE O SABOR • FEITO COM ALMA • TEMPERO DE VÓ";
  
  return (
    <div className="overflow-hidden bg-emerald py-2.5 border-b border-primary/20">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee">
          <span className="text-primary font-medium text-sm md:text-base mx-8">
            {text}
          </span>
          <span className="text-primary font-medium text-sm md:text-base mx-8">
            {text}
          </span>
          <span className="text-primary font-medium text-sm md:text-base mx-8">
            {text}
          </span>
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          <span className="text-primary font-medium text-sm md:text-base mx-8">
            {text}
          </span>
          <span className="text-primary font-medium text-sm md:text-base mx-8">
            {text}
          </span>
          <span className="text-primary font-medium text-sm md:text-base mx-8">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}

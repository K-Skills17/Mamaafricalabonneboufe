// Padrão Ndop (Camarões) como divisor visual elegante
// Inspirado nos padrões tradicionais de tecelagem de Camarões
export function NdopPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="80"
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Padrão Ndop inspirado - linhas geométricas elegantes e simétricas */}
      <g stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.5">
        {/* Linhas principais */}
        <path d="M0 40 L100 20 L200 40 L300 20 L400 40" />
        <path d="M0 40 L100 60 L200 40 L300 60 L400 40" />
        
        {/* Padrões decorativos */}
        <rect x="50" y="30" width="8" height="20" fill="#D4AF37" opacity="0.3" />
        <rect x="150" y="30" width="8" height="20" fill="#D4AF37" opacity="0.3" />
        <rect x="250" y="30" width="8" height="20" fill="#D4AF37" opacity="0.3" />
        <rect x="350" y="30" width="8" height="20" fill="#D4AF37" opacity="0.3" />
        
        {/* Círculos decorativos */}
        <circle cx="50" cy="40" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="150" cy="40" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="250" cy="40" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="350" cy="40" r="2" fill="#D4AF37" opacity="0.4" />
      </g>
    </svg>
  );
}

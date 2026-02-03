// Padrão Ndop mais sutil e maduro
export function MatureNdopPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="50"
      viewBox="0 0 400 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <g opacity="0.4">
        {/* Padrões sutis inspirados em Ndop */}
        <rect x="0" y="20" width="100" height="10" fill="#1B4332" opacity="0.2" />
        <rect x="100" y="20" width="100" height="10" fill="#D4A574" opacity="0.2" />
        <rect x="200" y="20" width="100" height="10" fill="#8B2635" opacity="0.2" />
        <rect x="300" y="20" width="100" height="10" fill="#1B4332" opacity="0.2" />
        
        {/* Linha decorativa sutil */}
        <path
          d="M0 25 L400 25"
          stroke="#D4A574"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        
        {/* Círculos decorativos pequenos */}
        <circle cx="50" cy="25" r="2" fill="#8B2635" opacity="0.3" />
        <circle cx="150" cy="25" r="2" fill="#1B4332" opacity="0.3" />
        <circle cx="250" cy="25" r="2" fill="#D4A574" opacity="0.3" />
        <circle cx="350" cy="25" r="2" fill="#8B2635" opacity="0.3" />
      </g>
    </svg>
  );
}

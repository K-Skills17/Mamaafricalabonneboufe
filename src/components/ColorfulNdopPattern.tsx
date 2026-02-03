// Padrão Ndop colorido (Amarelo/Verde/Vermelho)
export function ColorfulNdopPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="60"
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <g>
        {/* Padrões coloridos inspirados em Ndop */}
        <rect x="0" y="20" width="80" height="20" fill="#FFCC00" opacity="0.3" />
        <rect x="80" y="20" width="80" height="20" fill="#00843D" opacity="0.3" />
        <rect x="160" y="20" width="80" height="20" fill="#B22222" opacity="0.3" />
        <rect x="240" y="20" width="80" height="20" fill="#FFCC00" opacity="0.3" />
        <rect x="320" y="20" width="80" height="20" fill="#00843D" opacity="0.3" />
        
        {/* Linhas decorativas */}
        <path
          d="M0 30 L400 30"
          stroke="#00843D"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <path
          d="M0 35 L400 35"
          stroke="#FFCC00"
          strokeWidth="1.5"
          strokeDasharray="3,3"
        />
        
        {/* Círculos decorativos */}
        <circle cx="40" cy="30" r="4" fill="#B22222" />
        <circle cx="120" cy="30" r="4" fill="#FFCC00" />
        <circle cx="200" cy="30" r="4" fill="#00843D" />
        <circle cx="280" cy="30" r="4" fill="#B22222" />
        <circle cx="360" cy="30" r="4" fill="#FFCC00" />
      </g>
    </svg>
  );
}

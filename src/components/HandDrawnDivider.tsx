// Divisor com estilo "hand-drawn" ou "torn paper"
export function HandDrawnDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="40"
      viewBox="0 0 400 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Linha irregular estilo hand-drawn */}
      <path
        d="M0,20 Q50,15 100,20 T200,20 T300,20 T400,20"
        stroke="#00843D"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M0,25 Q60,30 120,25 T240,25 T360,25 T400,25"
        stroke="#FFCC00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Pequenos detalhes decorativos */}
      <circle cx="50" cy="20" r="2" fill="#B22222" />
      <circle cx="150" cy="22" r="2" fill="#B22222" />
      <circle cx="250" cy="18" r="2" fill="#B22222" />
      <circle cx="350" cy="21" r="2" fill="#B22222" />
    </svg>
  );
}

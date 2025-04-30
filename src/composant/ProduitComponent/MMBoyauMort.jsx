import React from "react";

const MMBoyauMort = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="230"
      height="100"
      viewBox="0 0 230 100"
    >
      <defs>
        {/* Dégradé 3D */}
        <linearGradient id="grad3D" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffd98a", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#f4a300", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#b36b00", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Le boyau principal avec effet 3D */}
      <rect
        x="40"
        y="30"
        rx="40"
        ry="40"
        width="120"
        height="40"
        fill="url(#grad3D)"
        stroke="#b36b00"
        strokeWidth="3"
      />

      {/* Ligature de gauche */}
      <circle cx="30" cy="50" r="8" fill="#b36b00" />
      <path d="M 20 50 Q 30 40, 30 50 Q 30 60, 20 50" fill="#b36b00" />

      {/* Ligature de droite */}
      <circle cx="165" cy="50" r="8" fill="#b36b00" />
      <path d="M 175 50 Q 165 40, 165 50 Q 165 60, 175 50" fill="#b36b00" />

      {/* Texte 250g */}
      <text
        x="100"
        y="55"
        fontFamily="Bona nova, sans-serif"
        fontSize="20"
        fill="#ffffff"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        250g
      </text>
    </svg>
  );
};

export default MMBoyauMort;

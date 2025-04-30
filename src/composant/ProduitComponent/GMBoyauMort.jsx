import React from "react";

const GMBoyauMort = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="270"
      height="100"
      viewBox="0 0 270 100"
    >
      <defs>
      <linearGradient id="grad3D" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffd98a", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#f4a300", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#b36b00", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Le boyau principal */}
      <rect
        x="40"
        y="30"
        rx="40"
        ry="40"
        width="160"
        height="40"
        fill="url(#grad3D)"
        stroke="#d18d00"
        strokeWidth="3"
      />

      {/* Ligature de gauche */}
      <circle cx="30" cy="50" r="8" fill="#d18d00" />
      <path d="M 20 50 Q 30 40, 30 50 Q 30 60, 20 50" fill="#d18d00" />

      {/* Ligature de droite (ajustée pour width 160) */}
      <circle cx="205" cy="50" r="8" fill="#d18d00" />
      <path d="M 215 50 Q 205 40, 205 50 Q 205 60, 215 50" fill="#d18d00" />

      {/* Texte 250g */}
      <text
        x="120"
        y="51"
        fontFamily="Bona nova, sans-serif"
        fontSize="20"
        fill="#ffffff"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontWeight="bold"
      >
        250g
      </text>
    </svg>
  );
};

export default GMBoyauMort;

import React from "react";

const BocalePateGM = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 150"
      width="100"
      height="100"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* <!-- Fond du bocal --> */}
      <defs>
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F2F1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#B2DFDB" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="lidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B0BEC5" />
          <stop offset="100%" stopColor="#78909C" />
        </linearGradient>
      </defs>

      {/* <!-- Corps du bocal --> */}
      <rect
        x="20"
        y="40"
        width="60"
        height="60"
        rx="10"
        ry="10"
        fill="url(#glassGradient)"
        stroke="#78909C"
        strokeWidth="1"
      />

      {/* <!-- Couvercle métallique --> */}
      <rect
        x="15"
        y="30"
        width="70"
        height="15"
        rx="5"
        ry="5"
        fill="url(#lidGradient)"
      />

      {/* <!-- Goulot --> */}
      <rect x="30" y="45" width="40" height="10" rx="3" ry="3" fill="#CFD8DC" />

      {/* <!-- Reflet en verre --> */}
      <path
        d="M 45 60 L 65 60 Q 70 65 65 70 L 45 70 Q 40 65 45 60"
        fill="white"
        fillOpacity="0.3"
      />

      {/* <!-- Texte 250g --> */}
      <text
        x="50%"
        y="70"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Bona nova, sans-serif"
        fontSize="16"
        fill="#030202"
        fontWeight="bold"
        letterSpacing="1"
      >
        250g
      </text>
    </svg>
  );
};

export default BocalePateGM;

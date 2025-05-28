import React from "react";

const SachetOceanSaveur = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="80"
      viewBox="0 0 120 160"
    >
      <defs>
        <linearGradient id="sachetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a8d8ff" />
          <stop offset="100%" stopColor="#7ab3eb" />
        </linearGradient>

        <filter id="softShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* Ombre */}
      <rect
        x="20"
        y="140"
        width="80"
        height="15"
        rx="5"
        fill="rgba(0,0,0,0.1)"
        filter="url(#softShadow)"
      />

      {/* Corps du sachet */}
      <path
        d="M20 20 
           Q30 10 60 10 
           Q90 10 100 20
           L100 130
           Q90 140 60 140
           Q30 140 20 130
           Z"
        fill="url(#sachetGradient)"
        stroke="#4a90d6"
        strokeWidth="2"
      />

      {/* Ouverture supérieure */}
      <path
        d="M25 25 L95 25"
        stroke="#4a90d6"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Texte 250g */}
      <text
        x="50%"
        y="50%"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        textAnchor="middle"
        fill="#2d6187"
        fontWeight="800"
        // stroke="white"
        strokeWidth="1.5"
      >
        250g
      </text>
    </svg>
  );
};

export default SachetOceanSaveur;
import React from "react";

const FumeDoypackMM = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="70"
      viewBox="0 0 80 100"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="90%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
        </filter>

        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4CAF50"/>
          <stop offset="50%" stopColor="#388E3C"/>
          <stop offset="100%" stopColor="#4CAF50"/>
        </linearGradient>

        <linearGradient id="sideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E7D32"/>
          <stop offset="100%" stopColor="#1B5E20"/>
        </linearGradient>
      </defs>

      {/* Ombre portée */}
      <path 
        d="M20 85 L60 85 L55 95 L25 95 Z" 
        fill="rgba(0,0,0,0.15)" 
        filter="url(#shadow)"
      />

      {/* Face principale */}
      <path
        d="M15 15 Q20 5 40 5 Q60 5 65 15 L65 85 Q60 95 40 95 Q20 95 15 85 Z"
        fill="url(#mainGradient)"
        stroke="#2E7D32"
        strokeWidth="1.5"
      />

      {/* Côté 3D */}
      <path
        d="M65 15 L70 20 L70 80 L65 85 L65 15"
        fill="url(#sideGradient)"
        stroke="#1B5E20"
        strokeWidth="1.5"
      />

      {/* Repli supérieur */}
      <path
        d="M30 10 L50 10 L55 15 L25 15 Z"
        fill="#81C784"
        stroke="#2E7D32"
        strokeWidth="1"
      />

      {/* Jointure inférieure */}
      <path
        d="M25 95 L55 95 L50 100 L30 100 Z"
        fill="#1B5E20"
        stroke="#1B5E20"
        strokeWidth="1"
      />

      {/* Texte 200g */}
      <text
        x="50%"
        y="55%"
        fontFamily="Bona nova, sans-serif"
        fontSize="23"
        textAnchor="middle"
        fontWeight="bold"
        stroke="#ffff"
        strokeWidth="0.5"
      >
        500g
      </text>

      {/* Reflet de lumière */}
      <path
        d="M25 20 Q30 15 40 15 Q50 15 55 20 L53 25 Q48 20 40 20 Q32 20 27 25 Z"
        fill="rgba(255,255,255,0.15)"
        strokeWidth="0"
      />
    </svg>
  );
};

export default FumeDoypackMM;
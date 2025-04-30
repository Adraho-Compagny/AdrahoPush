
import React from "react";

const PMPate = () => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 150"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* <!-- Corps de la boîte --> */}
        <rect
          x="15"
          y="50"
          width="70"
          height="40"
          rx="5"
          ry="5"
          fill="#8B4513"
        />

        {/* <!-- Partie supérieure --> */}
        <ellipse cx="50" cy="50" rx="35" ry="7" fill="#A0522D" />

        {/* <!-- Ouverture --> */}
        <rect x="40" y="50" width="20" height="5" rx="2" fill="#CD853F" />

        {/* <!-- Texte 200g --> */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          text-anchor="middle"
          fontFamily="Bona nova, sans-serif"
          fontSize="20"
          fill="#FFFFFF"
          fontWeight="bold"
        >
          200g
        </text>
      </svg>
    
  );
};

export default PMPate;

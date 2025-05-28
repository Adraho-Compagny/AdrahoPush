import React from "react";

const CubeMarinMix5g = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="60" 
      height="45" 
      viewBox="0 0 60 45"
      className="cursor-pointer"
    >
      {/* Face avant */}
      <rect 
        x="10" 
        y="8" 
        width="40" 
        height="25" 
        fill="#f5f0e6" 
        stroke="#d0c0a0" 
        strokeWidth="1" 
        rx="1"
      />
      
      {/* Face supérieure */}
      <polygon 
        points="10,8 15,5 55,5 50,8" 
        fill="#e8e0d0" 
        stroke="#d0c0a0" 
        strokeWidth="1" 
      />
      
      {/* Face latérale */}
      <polygon 
        points="50,8 55,5 55,30 50,33" 
        fill="#e0d8c8" 
        stroke="#d0c0a0" 
        strokeWidth="1" 
      />
      
      {/* Texte "5g" centré */}
      <text 
        x="30" 
        y="22" 
        textAnchor="middle" 
        fontFamily="Arial, sans-serif" 
        fontSize="9" 
        fill="#7a6a52" 
        fontWeight="bold"
      >
        5g
      </text>
    </svg>
  );
};

export default CubeMarinMix5g;
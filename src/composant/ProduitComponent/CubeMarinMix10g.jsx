import React from "react";

const CubeMarinMix10g = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100" 
      height="80" 
      viewBox="0 0 100 80"
      className="cursor-pointer"
    >
      {/* Face avant */}
      <rect 
        x="20" 
        y="15" 
        width="60" 
        height="40" 
        fill="#f5f0e6" 
        stroke="#d0c0a0" 
        strokeWidth="1" 
      />
      
      {/* Face supérieure */}
      <polygon 
        points="20,15 30,10 90,10 80,15" 
        fill="#e8e0d0" 
        stroke="#d0c0a0" 
        strokeWidth="1" 
      />
      
      {/* Face latérale */}
      <polygon 
        points="80,15 90,10 90,50 80,55" 
        fill="#e0d8c8" 
        stroke="#d0c0a0" 
        strokeWidth="1" 
      />
      
      {/* Texte "5g" centré */}
      <text 
        x="50" 
        y="40" 
        textAnchor="middle" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fill="#7a6a52" 
        fontWeight="bold"
      >
        10g
      </text>
    </svg>
  );
};

export default CubeMarinMix10g;
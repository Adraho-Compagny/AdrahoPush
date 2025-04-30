import { useState } from "react";

export default function ProductItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="relative w-full md:w-72 h-72 rounded-lg overflow-hidden cursor-pointer mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />

        <div
          className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-white text-sm">{product.sousTitre}</p>
        </div>
      </div>
      <p className="text-center my-2 font-bold text-[17px] text-maron">{product.name}</p>
    </div>
  );
}

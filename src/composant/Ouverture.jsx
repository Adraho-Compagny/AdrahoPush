import React, { useEffect } from "react";

import hexa from "../assets/image/village/hexa.png";
import coco from "../assets/image/village/coco.png";
import harato from "../assets/image/village/harato.png";
import lakana from "../assets/image/village/lakana.png";
import { Mail, MapPin } from "lucide-react";
import ScrollReveal from "scrollreveal";
import { FaWhatsapp } from "react-icons/fa";

const Ouverture = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-ouverture", { deley: 100, origin: "left", interval :300});
  }, []);
  return (
    <div
      className="accueille w-full sm:h-screen relative overflow-hidden px-8 md:px-[5rem] flex flex-col justify-between"
      id="accueille"
    >
      <img src={coco} alt="" className="absolute hidden md:block coco-img" id="imgCoco" />
      <img src={hexa} alt="" className="absolute hidden md:block hexa-img" />
      <img
        src={lakana}
        alt=""
        className="absolute hidden md:block  lakana-img "
      />
      <img
        src={harato}
        alt=""
        className="absolute hidden md:block  harato-img "
      />

      <div className="mt-[17rem] text-white z-20 relative text-center md:text-start">
        <div className="rounded-3xl h-[8px] w-[10rem] bg-white mb-4 hidden md:block" id="slide-ouverture"></div>
        <div className="w-full flex items-center justify-center md:hidden ">
          <div className="rounded-3xl h-[8px] w-[10rem] bg-white mb-4"></div>
        </div>
        <p className="text-[3em] font-bold" id="slide-ouverture">ADRAHO COMPAGNY</p>
        <p className="text-[2em] font-bold md:flex md:items-center" id="slide-ouverture">
          <MapPin className="hidden md:block mr-4 text-maintso" /> Mangatsiotra
          Manakara
        </p>
        <p className="text-mara" id="slide-ouverture">Votre spécialiste de produit de la mer </p>
        <p className="text-mara" id="slide-ouverture">et d'eau douce de qualité supérieur</p>
      </div>

      <div className="flex items-center justify-start space-x-4 text-white">
        <div className="rounded-t-lg bg-maintso px-4 pt-4 pb-4" id="slide-ouverture">
          <FaWhatsapp size={30} />
        </div>
        <p id="slide-ouverture">+261 038 37 107 32</p>
      </div>
    </div>
  );
};

export default Ouverture;

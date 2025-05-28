import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tanana from "../assets/image/logo/tanana.png";
import globe from "../assets/image/logo/globe.png";
import savoir from "../assets/image/logo/savoir.png";
import social from "../assets/image/logo/social.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "scrollreveal";
function Angagement() {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-engagement", { deley: 100, origin: "top", interval :300});
  }, []);

  return (
    <div className="bg-white px-8 md:px-[5rem] pt-[5rem]">
      <h1 className="text-maron font-bold text-[2em]" id="slide-engagement">Nos Engagements</h1>
      <p className="py-8" id="slide-engagement">
        Notre engagement repose sur la qualité, la durabilté et le respect des
        savoir-faire artisanaux. Chez Adraho Company, nous croyons en une pêche
        responsable, un impact social positif et des produits d'exception. Nous
        travaillons chaque jour pour offrir des produits de qualité tout en
        soutenant les communautés locales de pêcheurs. Nos engagement reflètent
        notre volonté de préserver l'environnement, valoriser les traditions et
        agir pour un avenir durable.
      </p>

      <div className="slider-container relative px-4 md:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4">
        <div id="slide-engagement" className="bg-gray-50 rounded-xl px-8 pt-3 pb-8 text-center hover:bg-gray-100 cursor-pointer">
          <div className="w-full flex items-center justify-center">
            <img src={tanana} alt="main.png" className="w-[250px]" srcSet="" />
          </div>
          <p className="font-bold text-maron text-[20px]">Qualité supérieur</p>
          <p>
            Chez Adraho Company, nous nous engageons à fournir des produits de
            la mer d'eau douce de la plus haite qualité
          </p>
        </div>

        <div id="slide-engagement" className="bg-gray-50 rounded-xl px-8 pt-3 pb-8 text-center hover:bg-gray-100 cursor-pointer">
          <div className="w-full flex items-center justify-center">
            <img src={globe} alt="main.png" className="w-[250px]" srcSet="" />
          </div>
          <p className="font-bold text-maron text-[20px]">Pêche Durable</p>
          <p>
            Nous pratiquons une pêche durable et responsable pour préserver les
            ressources marines aquatiques.
          </p>
        </div>

        <div id="slide-engagement" className="bg-gray-50 rounded-xl px-8 pt-3 pb-8 text-center hover:bg-gray-100 cursor-pointer">
          <div className="w-full flex items-center justify-center">
            <img src={social} alt="main.png" className="w-[110px]" srcSet="" />
          </div>
          <p className="font-bold text-maron text-[20px]">Impact social</p>
          <p>
            Nous soutenons les communautés locales des pêcheurs et contribuons à
            leur développement économique
          </p>
        </div>

        <div id="slide-engagement" className="bg-gray-50 rounded-xl px-8 pt-3 pb-8 text-center hover:bg-gray-100 cursor-pointer">
          <div className="w-full flex items-center justify-center">
            <img src={savoir} alt="main.png" className="w-[110px]" srcSet="" />
          </div>
          <p className="font-bold text-maron text-[20px]">
            Savoir-faire artisanal
          </p>
          <p>
            Nos produits sont préparés selon des méthodes traditionnelles
            assurant une qualité artisanal
          </p>
        </div>
      </div>
    </div>
  );
}

const NextArrow = ({ onClick, mobile }) => {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 bg-maintso text-white p-2 rounded-full z-10 
          ${mobile ? "-right-8" : "-right-12"} // Ajustement pour mobile
        `}
      onClick={onClick}
    >
      <ChevronRight />
    </button>
  );
};

const PrevArrow = ({ onClick, mobile }) => {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 bg-maintso text-white p-2 rounded-full z-10 
          ${mobile ? "-left-8" : "-left-12"} // Ajustement pour mobile
        `}
      onClick={onClick}
    >
      <ChevronLeft />
    </button>
  );
};

export default Angagement;

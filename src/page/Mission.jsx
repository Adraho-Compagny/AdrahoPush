import React, { useEffect } from "react";
import logoRadial from "../assets/image/logo/logoRadiale.png";
import { BarChart, BarChart3, Fish, Globe2Icon, Star, User, Waves } from "lucide-react";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Défile jusqu'en haut
  }, []);
  return (
    <div className="pt-[7rem] w-full px-8 md:px-[5rem] relative overflow-hidden">
      <img
        src={logoRadial}
        alt=""
        className="absolute -z-10 top-[40%] md:top-[5em] -right-[7em] md:-right-[10em] opacity-20 md:opacity-10 w-[70rem] md:w-[75%]"
      />
      <h1 className="text-maron font-bold text-[2em]">A propos de nous</h1>

      <button className="px-8 py-2 rounded-md bg-gradient-to-r from-[#137855aa] via-maintso to-[#074630] my-4">
        <h1 className="text-white font-bold text-[1em]">Nos Missions</h1>
      </button>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Globe2Icon className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Valoriser le patrimoine maritime de Madagascar :
          </p>
          En trnasformant les produits de la pêchs en une gamme variée 
          et savoureuse, nouq mettons en valeur la richesse da nos océans
          et contribuons à leur renommée.
        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Fish className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Soutenir les pêcheurs artisanaux :
          </p>
           En leur garantisant des débouchés stables et en 
           les accompagnants dans l'amélioration de leurs 
           pratiques , nous contribuons à leur développement
           économique et social.
        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Waves className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Promouvoir une pêche durable :
          </p>
           Nous nous engageons à respecter les écosystèmes 
           marins et à la mettre en oeuvre des pratiques 
           de pêches responsables pour préserver les 
           ressources pour les générations futures.
        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <BarChart3 className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Satisfaire les consommateurs :
          </p>
          En proposant des produits sains, savoureux et innovants, 
          nous repondons aux attentes d'unes clientèle exigeante,
          soucieuse de la qualité et de l'origine des produits.
        </p>
      </div>
    </div>
  );
};

export default Mission;

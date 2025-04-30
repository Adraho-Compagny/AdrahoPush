import React, { useEffect } from "react";
import logoRadial from "../assets/image/logo/logoRadiale.png";
import { Star } from "lucide-react";

const Historique = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Défile jusqu'en haut
  }, []);
  return (
    <div className="pt-[10rem] w-full px-8 md:px-[5rem] relative overflow-hidden">
      <img
        src={logoRadial}
        alt=""
        className="absolute -z-10 top-[40%] md:top-[5em] -right-[7em] md:-right-[10em] opacity-20 md:opacity-20 w-[100rem] md:w-[100%]"
      />
      <h1 className="text-maron font-bold text-[2em]">A propos de nous</h1>

      <button className="px-8 py-2 rounded-md bg-gradient-to-r from-[#137855aa] via-maintso to-[#074630] my-4">
        <h1 className="text-white font-bold text-[1em]">HISTORIQUE</h1>
      </button>
      <p className="my-1">
        <span className="mr-2 font-bold text-[19px]">Adraho Company :</span>
        Le goût de l'océan , l'âme de Madagascar
      </p>

      <p className="flex">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Née en 2021 au coeur de la région Fitovinany 
        , Adraho Company est une entreprise passionnée par la valorisation des richesses de la mer.
        Forts d'un profond attachement à notre île et soucieux de préserver ses 
        ressources, nous transformons les produits de la pêches en délices 
        gastronomiques, tous en offrant des perspectives d'avenir aux communautés côtières.
      </p>

      <p className="my-8">
        Notre histoire est celle d'une ambition : donner une nouvelle vie aux 
        trésors de nos océans. En combinant savoir-faire traditionnel et technologies 
        modernes, nous créons des produits de la mer de qualité supérieure, respectueux
        de l'environnement et des hommes
      </p>

      <button className="px-8 py-2 rounded-md bg-gradient-to-r from-[#137855aa] via-maintso to-[#074630] my-4">
        <h1 className="text-white font-bold text-[1em]">
          Pourquoi choisir Adraho Company ?
        </h1>
      </button>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Star className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Un savoir-faire unique :
          </p>
          Forts de notre ancrage local et de notre expertise en transformation
          des produits de la mer, nous maîtrisons l'ensemble de la chaine de production de la pêche
          à la commercialisation.

        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Star className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Une démarche responsable :
          </p>
          Nous privilégions des pratiques durables, en respectant 
          les normes sanitaires et environnements les plus strictes.
        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Star className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Une gamme de produits variés et de qualité :
          </p>
           Notre offre s'adapte à tous les goûts, avec de produits 
           savoureux et athentiques.
        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Star className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Un engagement social :
          </p>
           En soutenant les communautés de pêcheurs, nous contribuons
           au développement économiques et social de la région.
        </p>
      </div>

      <div className="flex items-start justify-start space-x-4 my-4">
        <Star className="text-maron w-[10em] md:w-auto" />
        <p>
          <p className="font-bold text-maron text-[17px]">
            Un partenaire de confiance :
          </p>
          Nous sommes à l'écoute de nos clients et nous nous engageons
          à leur offrir un service personnalisé et de qualité.
        </p>
      </div>
    </div>
  );
};

export default Historique;

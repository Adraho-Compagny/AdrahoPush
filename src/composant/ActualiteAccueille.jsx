import React, { useEffect } from "react";
import reunion from "../assets/image/village/reunion.JPG";
import cyclone from "../assets/image/village/cycl.JPG";
import construction from "../assets/image/village/const.JPG";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "scrollreveal";


const ActualiteAccueille = () => {

  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-actualite", { deley: 100, origin: "top", interval :300});
  }, []);
  return (
    <div className="bg-white px-8 md:px-[5rem] pt-[5rem]">
      <h1 className="text-maron font-bold text-[2em]" id="slide-actualite">Actualités</h1>

      <div className="grid md:grid-cols-4 gap-6 mt-8">
        <div id="slide-actualite" className="bg-gray-100 rounded-b-xl">
          <img src={reunion} alt="" width={350} />
          <div className="p-5">
            <p>04 Mars 2025</p>
            <p className="text-manga_marevaka font-bold text-[17px]">
              Un grand reunion
            </p>
            <p>
              Chez Adraho Company, nous nous engageons à fournir des produits de
              la mer d'eau douce de la plus haite qualité …..
            </p>
          </div>
        </div>

        <div id="slide-actualite" className="bg-gray-100 rounded-b-xl">
          <img src={cyclone} alt="" width={350} />
          <div className="p-5">
            <p>23 Mars 2025</p>
            <p className="text-manga_marevaka font-bold text-[17px]">Cyclone</p>
            <p>
              Chez Adraho Company, nous nous engageons à fournir des produits de
              la mer d'eau douce de la plus haite qualité …..
            </p>
          </div>
        </div>

        <div id="slide-actualite" className="bg-gray-100 rounded-b-xl">
          <img src={construction} alt="" width={350} />
          <div className="p-5">
            <p>12 Avril 2025</p>
            <p className="text-manga_marevaka font-bold text-[17px]">
              Construction
            </p>
            <p>
              Chez Adraho Company, nous nous engageons à fournir des produits de
              la mer d'eau douce de la plus haite qualité …..
            </p>
          </div>
        </div>

        <div id="slide-actualite" className="bg-gray-100 rounded-b-xl">
          <img src={reunion} alt="" width={350} />
          <div className="p-5">
            <p>04 Mars 2025</p>
            <p className="text-manga_marevaka font-bold text-[17px]">
              Un grand reunion
            </p>
            <p>
              Chez Adraho Company, nous nous engageons à fournir des produits de
              la mer d'eau douce de la plus haite qualité …..
            </p>
          </div>
        </div>
      </div>

      <button id="slide-actualite" className="flex items-center justify-center px-4 py-2 bg-maintso rounded-md text-white space-x-4 my-8 w-full md:w-auto">
        <p>Voir plus d'actualités</p>
        <ArrowRight />
      </button>
    </div>
  );
};

export default ActualiteAccueille;

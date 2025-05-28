import React, { useEffect, useState } from "react";
import products from "../data/produits.js";
import { ChevronRight, Search } from "lucide-react";
import ProductItem from "../composant/DisplayProduct";
import gesteDroite from "../assets/image/logo/gesteDroite.png";
import gesteGauche from "../assets/image/logo/gesteGauche.png";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Produits = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-produit", {
      deley: 100,
      origin: "top",
      interval: 300,
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0); // Défile jusqu'en haut
  }, []);
  const navige = useNavigate();
  const redirectFonction = (id) => {
    if (id == 1) {
      navige("/produits/pate");
    } else if (id == 2) {
      navige("/produits/mortadelle");
    } else if (id == 3) {
      navige("/produits/fume");
    } else if (id == 4) {
      navige("/produits/poudre");
    } else {
      navige("/produits/transforme");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = products.filter(
    (item) =>
      item.sousTitre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [filteredData]);
  return (
    <div className="bg-white px-8 md:px-[5rem] pt-[8rem] relative">
      <div className="relative z-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1 className="text-maron font-bold text-[2em]">Nos Produits</h1>

          <div className="flex items-center justify-center space-x-4 w-full md:w-auto my-4 md:my-0 ">
            

            <select
              onChange={handleSearch}
              value={searchTerm}
              className="tailwind-form"
            >
              <option value="" hidden disabled>
                catégories des produits
              </option>
              <option value="">Tous les produits</option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
            <button className="flex items-center justify-center p-2 rounded-md bg-maintso text-white">
              <Search />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-start space-x-3 mt-2 ">
          <Link to="/" className="hover:text-maintso">
            Accueille
          </Link>
          <ChevronRight />
          <Link to="#" className="hover:text-maintso">
            Nos Produit
          </Link>
        </div>

        <div className="my-[2rem]">
          {filteredData.length === 0 ? (
            <div className="text-center py-8 text-xl text-gray-500">
              Aucun produit trouvé
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredData.map((product, idx) => (
                <div key={idx} id="slide-produit" onClick={() => redirectFonction(product.id)}>
                  <ProductItem key={product.id} product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <img
        src={gesteGauche}
        alt="geste.png"
        srcSet=""
        width={700}
        className="absolute top-12 md:-top-0 left-0 -z-0 md:opacity-50 opacity-90"
      />

      <img
        src={gesteDroite}
        alt="geste.png"
        srcSet=""
        width={700}
        className="absolute -bottom-10 right-0 -z-0 md:opacity-50 opacity-90"
      />
    </div>
  );
};

export default Produits;

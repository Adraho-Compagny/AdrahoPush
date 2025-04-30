import { ArrowRight, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductDisplay from "./DisplayProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductItem from "./DisplayProduct";
import logoMaron from "../assets/image/logo/logo_maron.png";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import products from "../data/produits"; // Assurez-vous que le chemin est correct

const ProduitAccueille = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-productAccueil", { deley: 100, origin: "top", interval :100});
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = products.filter(
    (item) =>
      item.sousTitre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const NextArrow = ({ onClick }) => (
    <button
      className={`absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 
                 bg-maintso text-white p-1 md:p-2 rounded-full z-10 hover:bg-[#184a39]
                 text-sm md:text-base ${
                   filteredData.length <= 1 ? "hidden" : ""
                 }`}
      onClick={onClick}
    >
      <ChevronRight />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className={`absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 
                 bg-maintso text-white p-1 md:p-2 rounded-full z-10 hover:bg-[#184a39]
                 text-sm md:text-base ${
                   filteredData.length <= 1 ? "hidden" : ""
                 }`}
      onClick={onClick}
    >
      <ChevronLeft />
    </button>
  );

  const settings = {
    dots: filteredData.length > 1,
    infinite: filteredData.length > 1,
    speed: 500,
    autoplay: true,
    slidesToShow: Math.min(3, filteredData.length),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: windowWidth < 768 && filteredData.length === 1,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(2, filteredData.length),
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(1, filteredData.length),
          centerMode: filteredData.length === 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [filteredData]);
  const navigate = useNavigate();
  const navigeProduit = () => {
    navigate("/produits");
  };
  const redirectFonction = (id) => {
    if (id == 1) {
      navigate("/produits/pate");
    } else if (id == 2) {
      navigate("/produits/mortadelle");
    } else if (id == 3) {
      navigate("/produits/fume");
    } else if (id == 4) {
      alert("il n'y a pas encore d'image pour ce produit");
    } else {
      navigate("/produits/transforme");
    }
  };

  return (
    <>
      <div className="bg-white px-8 md:px-[5rem] pt-[5rem]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1 className="text-maron font-bold text-[2em]" id="slide-productAccueil">Nos Produits</h1>

          <div className="flex items-center justify-center space-x-4 w-full md:w-auto my-4 md:my-0 ">
            <select
              onChange={handleSearch}
              value={searchTerm}
              className="tailwind-form"
              id="slide-productAccueil"
            >
              <option value="" selected disabled>
                catégories des produits
              </option>
              <option value="">
                Tous les produits
              </option>
              {products.map((p) => (
                <option value={p.name}>{p.name}</option>
              ))}
            </select>
            <button id="slide-productAccueil" className="flex items-center justify-center p-2 rounded-md bg-maintso text-white">
              <Search />
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              src={logoMaron}
              alt="Logo Maron"
              className="w-[10rem] md:w-[15rem] h-auto"
              id="slide-productAccueil"
            />

            <p className="py-4 text-maron text-center" id="slide-productAccueil">
              Valoriser nos richesses marine pour un développement durable
            </p>

            <div id="slide-productAccueil" className="rounded-full border-[5px] border-maintso px-4 py-3 flex items-center justify-center">
              <p className="text-maintso text-[35px] font-bold">Catégories</p>
            </div>
          </div>
        </div>

        <div className="my-[2rem]">
          {filteredData.length === 0 ? (
            <div className="text-center py-8 text-xl text-gray-500">
              Aucun produit trouvé
            </div>
          ) : (
            <div className="slider-container relative px-4 md:px-12" id="slide-productAccueil">
              <Slider
                {...settings}
                key={JSON.stringify(filteredData.map((item) => item.id))}
              >
                {filteredData.map((product) => (
                  <div onClick={() => redirectFonction(product.id)}>
                    <ProductItem key={product.id} product={product}  />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>

        <button
        id="slide-productAccueil"
          onClick={navigeProduit}
          className="flex items-center justify-center px-4 py-2 bg-maintso rounded-md text-white space-x-4 my-[4rem] w-full md:w-auto"
        >
          <p> Voir tous les produits</p>
          <ArrowRight />
        </button>
      </div>
    </>
  );
};

export default ProduitAccueille;

import { ArrowLeft, ArrowRight, ChevronRight, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gesteGauche from "../../assets/image/logo/gesteGauche.png";
import gesteDroite from "../../assets/image/logo/gesteDroite.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import parDefaut from "../../assets/image/produit/pate/thon.png";
import $ from "jquery";
import MMPate from "./MMPate.jsx";
import GMPate from "./GMPate.jsx";
import fume from "../../data/fume.js";
import PMPate from "./PMPate.jsx";
import ModalProduit from "./ModalProduit.jsx";
import FumeDoypackPM from "./FumeDoypackPM.jsx";
import FumeDoypackMM from "./FumeDoypackMM.jsx";
import FumeDoypackGM from "./FumeDoypackGM.jsx";

const Fume = () => {
  const [stateImg, setStateImg] = useState(false);
  // fonction qui hide ou show l'image
  const FuctionStateImg = () => {
    stateImg ? setStateImg(false) : setStateImg(true);
  };
  const [nom, setNom] = useState("Pâtés de poisson");
  const [sousTitre, setSousTitre] = useState("Océan Gourmet");
  const [imUrl, setImurl] = useState(parDefaut);
  const [description, setDescription] = useState(
    "Délicatement préparé avec du poisson frais et des épices, Océan Gourmet est un pâté raffiné idéal pour vos tartines ou apéritifs"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const product = fume[activeIndex];
    setNom(product.name);
    setSousTitre(product.sousTitre);
    setImurl(product.imageUrl);
    setDescription(product.desc);
  }, [activeIndex]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "30px",
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 15,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerPadding: "15px" },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, centerPadding: "10px" },
      },
    ],
  };

  const handleSliderChange = (current) => {
    $(".imagePrincipal").hide();
    setActiveIndex(current);
    $(".imagePrincipal").fadeIn();
  };

  const handleThumbnailClick = (index) => {
    $(".imagePrincipal").hide();
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
    $(".imagePrincipal").fadeIn();
  };
  return (
    <div className="bg-white px-8 md:px-[5rem] pt-[8rem] relative">
      <div className="relative z-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1 className="text-maron font-bold text-[2em]">Produits Fumés</h1>
        </div>

        <div className="flex items-center justify-start space-x-3 mt-2  text-sm md:text-[15px] ">
          <Link to="/" className="hover:text-maintso">
            Accueille
          </Link>
          <ChevronRight />
          <Link to="/produits" className="hover:text-maintso">
            Nos Produits
          </Link>
          <ChevronRight />
          <Link to="#" className="hover:text-maintso">
            Produits fumés
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-12 w-full relative z-20 md:gap-0">
        <div className="col-span-4 px-4">
          <br />
          <br />
          <div>
            <p className="font-bold text-[17px]">({sousTitre})</p>
            <h1 className="font-bold text-maraB text-[30px]">{nom}</h1>

            <div className="w-full h-[5rem]">
              <p className="my-2">{description}</p>
            </div>
            <div className="mt-4">
              <p className="text-maraB font-bold my-2">
                Types des produits Fumés
              </p>

              <div className=" md:px-12 mx-auto max-w-[80vw] md:ùax-w-[90vw]">
                <Slider
                  ref={sliderRef}
                  {...settings}
                  afterChange={handleSliderChange}
                >
                  {fume.map((product, index) => (
                    <div key={product.id} className="px-1 py-1">
                      <img
                        onClick={() => handleThumbnailClick(index)}
                        src={product.imageUrl}
                        className={`rounded-md object-contain cursor-pointer transition-all duration-300  md:min-w-[80px] md:min-h-[60px] ${
                          activeIndex === index
                            ? "border-2 border-maintso scale-110 shadow-lg"
                            : "opacity-75 hover:opacity-100"
                        }`}
                        alt={product.name}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:px-10 py-2">
          <img
            onClick={FuctionStateImg}
            src={imUrl}
            alt="Présentation du produit"
            className="rounded-md h-[19rem] w-full object-cover imagePrincipal cursor-pointer"
          />
        </div>

        <div className="col-span-3 py-4">
          <p className="font-bold text-black text-[17px]">Disponibles en :</p>
          <div className="flex items-center space-x-2">
            <Star size={10} className="text-maintso" />
            <h1 className="text-maintso text-[20px]">Doypack</h1>
          </div>

          <div className="px-6 space-y-[0.5rem] ">
            <div className="flex items-center space-x-8">
              <p className="text-maron font-bold min-w-[40px]">MM</p>
              <FumeDoypackPM />
            </div>
            <div className="flex items-center space-x-8">
              <p className="text-maron font-bold min-w-[40px]">MM</p>
              <FumeDoypackMM />
            </div>
            <div className="flex items-center space-x-8">
              <p className="text-maron font-bold min-w-[40px]">GM</p>
              <FumeDoypackGM />
            </div>
          </div>
        </div>
      </div>

      {/* modale  */}
      <ModalProduit
        imageProduit={imUrl}
        hideImg={FuctionStateImg}
        stateImg={stateImg}
      />

      <img
        src={gesteGauche}
        alt="décoration gauche"
        width={700}
        className="absolute top-12 md:-top-0 left-0 -z-0 md:opacity-50 opacity-90"
      />

      <img
        src={gesteDroite}
        alt="décoration droite"
        width={700}
        className="absolute bottom-2 right-0 -z-0 md:opacity-50 opacity-90"
      />
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    className={`absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 
                   bg-maron/80 text-white px-2 py-1 rounded-md z-10
                   text-sm md:text-base hover:bg-maron`}
    onClick={onClick}
  >
    <ArrowRight size={16} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className={`absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 
                   bg-maron/80 text-white py-1 px-2 rounded-md z-10 
                   text-sm md:text-base hover:bg-maron`}
    onClick={onClick}
  >
    <ArrowLeft size={16} />
  </button>
);

export default Fume;

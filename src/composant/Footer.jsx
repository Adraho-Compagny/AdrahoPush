import React, { useState } from "react";
import imgFooter from "../assets/image/footer/image_footer.png";
import logoFooter from "../assets/image/logo/logo_maron.png";
import produitEngros from "../assets/image/produit/produitEngros.png";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  ChevronDown,
  ChevronRight,
  Copyright,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Défilement fluide
    });
  };
  const scrollProduit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const section = document.getElementById("nos-produits"); // Cible la section "Nos produits"
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
    }
  };
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <img src={imgFooter} alt="" srcSet="" />
      <div className="w-full bg-mara grid sm:grid-cols-4 gap-4 px-8 md:px-[5rem] text-white pb-8 relative">
        <div className="px-4 py-6 ">
          <img src={logoFooter} alt="" width={90} />
          <p className="py-2">
            Votre spécialiste de produit de la mer et d'eau douce de qualité
            supérieur
          </p>
        </div>

        <div className="px-4">
          <img src={produitEngros} alt="" width={90} />
          <p className="font-bold">
            Valoriser nos richesses marine pour un développement durable
          </p>
          <p className="text-[11px] py-3">Une image de haute qualité illustrant la mer, des pêcheurs 
            locaux et quelques-uns de vos produits phares(pâtés, mortadelle, etc.)
          </p>
        </div>

        <div className="px-4 sm:px-8">
          <p className="text-maron font-bold text-[20px]">Lien</p>
          <div className="flex flex-col space-y-2">
            <Link
              to="#"
              onClick={scrollToTop}
              className="text-white hover:text-maron "
            >
              - Accueille
            </Link>
            <div className="text-start">
              <button
                onClick={toggleSubMenu}
                className="w-full text-start flex items-center justify-start space-x-4"
              >
                <span>- À propos</span>
                {isSubMenuOpen ? (
                  <ChevronDown size={15} />
                ) : (
                  <ChevronRight size={15} />
                )}
              </button>

              {isSubMenuOpen && (
                <div className="transition-all duration-300 ease-in-out">
                  <Link
                    to="/historique"
                    className="block px-4 py-1 hover:text-maron"
                  >
                    Historique
                  </Link>
                  <Link
                    to="/missions"
                    className="block px-4 py-1 hover:text-maron"
                  >
                    Nos missions
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#"
              onClick={scrollProduit}
              className="text-white hover:text-maron"
            >
              - Produits
            </Link>
            <Link to="/contact" className="text-white hover:text-maron">
              - Contact
            </Link>
          </div>
        </div>

        <div className="px-4 sm:px-0">
          <p className="text-maron font-bold text-[20px]">Contact Rapide</p>

          <span className="flex items-center justify-start space-x-3 space-y-4">
            <MapPin size={20} />
            <p>à Manakara , régiion Fitovinany, Madagascar</p>
          </span>

          <span className="flex items-center justify-start space-x-3">
            <Phone size={20} />
            <p>+261 038 16 668 72</p>
          </span>

          <span className="flex items-center justify-start space-x-3 mt-4">
            <FaWhatsapp size={20} />
            <p>+261 038 37 107 32</p>
          </span>
        </div>

        <div
          onClick={scrollToTop}
          className="flex items-center justify-center rounded-full p-3 bg-maintso text-white absolute right-8 cursor-pointer"
        >
          <ArrowUp />
        </div>
      </div>

      <div className="w-full py-3 bg-maraB text-white">
        <div className="flex items-center justify-center space-x-3">
          <Copyright color="white" />
          <p>2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

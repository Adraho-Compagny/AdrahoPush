import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo/logo_claire.png";
import logo2 from "../../assets/image/logo/logo_maron.png";
import { ChevronDown, ChevronRight, Facebook, Menu, X } from "lucide-react";

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const scrollProduit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const section = document.getElementById("nos-produits"); // Cible la section "Nos produits"
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
    }
    closeAllMenus(); // Ferme les menus si nécessaire
  };

  const scrollActus = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const section = document.getElementById("actus"); // Cible la section "Nos produits"
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
    }
    closeAllMenus(); // Ferme les menus si nécessaire
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    closeAllMenus();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Défilement fluide
    });
  };

  const headerClass = `w-full px-8 md:px-[5rem] py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-sm" : "bg-transparent"
  }`;

  const navLinkClass = isScrolled ? "text-maron hover:text-maraB transition-all duration-300" : "text-white hover:text-maraB transition-all duration-300";
  const iconColor = isScrolled ? "#4d3b35" : "#ffffff";

  return (
    <header className={headerClass}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          {isScrolled ? (
            <img src={logo2} alt="Logo" width={90} />
          ) : (
            <img src={logo} alt="Logo" width={90} />
          )}
        </Link>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center justify-center space-x-10">
          <Link to="#" onClick={scrollToTop} className={navLinkClass}>
            Accueil
          </Link>

          <div className="relative">
            <button
              onClick={toggleSubMenu}
              className={`hover:text-mara focus:outline-none flex items-center space-x-2 ${navLinkClass}`}
            >
              <span>À propos</span>
              {isSubMenuOpen ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )}
            </button>

            {isSubMenuOpen && (
              <div className="absolute w-[12rem] py-4 top-full left-0 mt-2 bg-white text-black rounded shadow-lg">
                <Link
                  to="/historique"
                  className="block px-4 py-2 hover:text-mara whitespace-nowrap"
                  onClick={closeAllMenus}
                >
                  De historique
                </Link>
                <Link
                  to="/missions"
                  className="block px-4 py-2 hover:text-mara whitespace-nowrap"
                  onClick={closeAllMenus}
                >
                  Nos missions
                </Link>
              </div>
            )}
          </div>

          <Link to="#" onClick={scrollProduit} className={navLinkClass}>
            Produits
          </Link>
          <Link to="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex  items-center space-x-2">
          <button
            onClick={scrollActus}
            className={`border-[2px] rounded-md px-4 ${
              isScrolled
                ? "text-maron border-maron hover:text-white hover:bg-maron"
                : "text-white border-white hover:text-maron hover:bg-white"
            }`}
          >
            Actualités
          </button>
          <div
            className={`text-maron cursor-pointer rounded-full p-1 flex items-center justify-center ${
              isScrolled
                ? "text-maron border-maron hover:text-white hover:bg-maron"
                : "text-white border-white hover:text-maron hover:bg-white"
            }`}
          >
            {/* <Facebook /> */}
          </div>
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X color={iconColor} size={30} />
          ) : (
            <Menu color={iconColor} size={30} />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white text-black py-4 shadow-lg">
          <Link
            to="#"
            onClick={scrollToTop}
            className="block py-2 px-10 hover:bg-gray-100"
          >
            Accueil
          </Link>

          <div className="border-t border-gray-100">
            <button
              onClick={toggleSubMenu}
              className="w-full text-left py-2 px-10 flex items-center justify-between hover:bg-gray-100"
            >
              <span>À propos</span>
              {isSubMenuOpen ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )}
            </button>

            {isSubMenuOpen && (
              <div className="bg-gray-50">
                <Link
                  to="/historique"
                  className="block px-14 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  De historique
                </Link>
                <Link
                  to="/missions"
                  className="block px-14 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Nos missions
                </Link>
              </div>
            )}
          </div>

          <Link
            to="#"
            onClick={scrollProduit}
            className="block py-2 px-10 hover:bg-gray-100 border-t border-gray-100"
          >
            Produits
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-10 hover:bg-gray-100 border-t border-gray-100"
            onClick={closeAllMenus}
          >
            Contact
          </Link>

          <div className="flex items-center justify-between space-x-2 px-10 border-t border-gray-100 py-2">
            <button
              onClick={scrollActus}
              className="border-[2px] rounded-md border-maron px-4 text-maron hover:bg-maron hover:text-white"
            >
              Actualités
            </button>

          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

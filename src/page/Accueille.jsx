import React, { useEffect } from "react";

import Angagement from "../composant/Engagement";
import Ouverture from "../composant/Ouverture";
import ActualiteAccueille from "../composant/ActualiteAccueille";
import ProduitAccueille from "../composant/ProduitAccueille";
import { useLocation } from "react-router-dom";

const Accueille = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "nos-produits") {
      const section = document.getElementById("nos-produits");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "actus") {
      const section = document.getElementById("actus");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "acc") {
      const section = document.getElementById("acc");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    }
  }, [location]);
  return (
    <>
      {/* Accueille  */}
      <section id="acc">
        <Ouverture />
      </section>

      {/* Engagement  */}

      <Angagement />
      <br />
      <br />

      {/* Actuelité  */}
      <section id="actus">
        <ActualiteAccueille />
      </section>

      {/* Nos produits  */}
      <section id="nos-produits">
        <ProduitAccueille />
      </section>
    </>
  );
};

export default Accueille;

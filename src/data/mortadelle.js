import mPoisson from "../assets/image/produit/mortadelle/MortPoisson.jpeg"
import mCrevette from "../assets/image/produit/mortadelle/MortCrevette.jpeg"
import mThon from "../assets/image/produit/mortadelle/MortThon.jpeg"
import mLangouste from "../assets/image/produit/mortadelle/MortLangouste.jpeg"

const mortadelle = [
  {
    id: 1,
    name: " Mortadelles de poisson",
    sousTitre: "Ocean Della",
    desc : "Ocean Della est une mortadelle de poisson savoureuse et parfaite pour vos repas ou en apéritif.",
    imageUrl: mPoisson,
  },
  {
    id: 2,
    name: " Mortadelles de thon",
    sousTitre: "Thon Della",
    desc : "Thon'Della est une mortadelle de thon alliant fraîcheur et saveur, parfaite pour tous les types de repa.",
    imageUrl: mThon,
  },
  {
    id: 3,
    name: "Mortadelles de crevettes",
    sousTitre: "Maniry",
    desc : "Maniry est une mortadelle de crevettes riche en saveurs maritimes, idéale pour des repas délicats.",
    imageUrl: mCrevette,
  },
  {
    id: 4,
    name: "Mortadelles de langoustes",
    sousTitre: "Langouste Fine",
    desc : "Langouste Fine est une mortadelle de langouste raf inée, riche en saveurs et idéale pour vos moments gastronomique",
    imageUrl: mLangouste,
  },

];

export default mortadelle;
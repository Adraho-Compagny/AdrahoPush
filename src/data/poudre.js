import { merge } from "jquery";
import bouillonPoisson from "../assets/image/produit/poudre/bouillonPoisson.jpeg"
import marinMix from "../assets/image/produit/poudre/marinMix.jpeg"
import oceanSaveur from "../assets/image/produit/poudre/oceanSaveur.jpeg"



const fume = [
  {
    id: 1,
    name: "Océan Saveur",
    sousTitre: "Poudres de poisson",
    desc : "Pêche Saveur vous offre une poudre de poisson de haute qualité, idéale pour rehausser vos bouillons et sauces avec une touche authentique de la mer.",
    imageUrl: oceanSaveur,
  },
  {
    id: 2,
    name: "Marin Mix",
    sousTitre: "Cubes ou assaisonnements de poisson",
    desc : "Marin Mix est un cube d’assaisonnement de poisson parfaitement équilibré, idéal pour apporter de la saveur à vos plats de manière pratique et savoureuse.",
    imageUrl: marinMix,
  },
  {
    id: 3,
    name: "Bouillon des poissons",
    sousTitre: "Saveur Naturelle",
    desc : "Concentré de goût préparé à base de poissons issus de la pêche artisanale. Idéal pour relever soupes, sauces et plats mijotés. 100 % naturel, Sans additifs, Riche en saveur marine.",
    imageUrl: bouillonPoisson,
  },

];

export default fume;
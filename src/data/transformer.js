import boulette from "../assets/image/produit/transforme/boulette.jpeg"
import miette from "../assets/image/produit/transforme/miette.jpeg"
import riellete from "../assets/image/produit/transforme/Rillettes.jpeg"
import boudin from "../assets/image/produit/transforme/boudin.jpeg"
import precuit from "../assets/image/produit/transforme/precuit.jpeg"


const transformer = [
  {
    id: 1,
    name: "Rillettes de poisson",
    sousTitre: "Ocean Délice",
    desc : " Ocean Délices propose une rillette de poisson crémeuse et savoureuse, enrichie d’une touche de fromage pour une expérience unique.",
    imageUrl: riellete,
  },
  {
    id: 2,
    name: " Miettes de poisson",
    sousTitre: "Ocean Miettes",
    desc : "Ocean Miettes est une miette de poisson idéale pour les garnitures, sandwiches ou autres préparations, offrant une texture légère et une saveur authentique.",
    imageUrl: miette,
  },
  {
    id: 3,
    name: " Boulettes de poisson",
    sousTitre: "Bouleka",
    desc : "Délicieuses boulettes de poisson préparées avec des ingrédients frais et locaux. Idéales pour accompagner vos repas ou à servir en apéritif.",
    imageUrl: boulette,
  },
  {
    id: 4,
    name: "  Boudin blanc",
    sousTitre: "Boudin Blanc Ocean",
    desc : "Boudin Blanc Marin allie poisson et viande blanche pour une recette originale et savoureuse, idéale pour des repas raffinés.",
    imageUrl: boudin,
  },
  {
    id: 5,
    name: "Précuits de poisson",
    sousTitre: "Prêt Marin",
    desc : "Prêt Marin est une préparation de poisson précuit, facile à utiliser et idéale pour des repas rapides, tout en offrant une qualité et un goût exceptionnels.",
    imageUrl: precuit,
  },

];

export default transformer;
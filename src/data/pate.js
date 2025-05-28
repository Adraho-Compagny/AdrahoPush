import pPoisson from "../assets/image/produit/pate/poisson.jpeg"
import pCrevette from "../assets/image/produit/pate/crevette.jpeg"
import pThon from "../assets/image/produit/pate/thon.jpeg"
import pLangouste from "../assets/image/produit/pate/langouste.jpeg"

const pate = [
  {
    id: 1,
    name: "Pâté de poisson",
    sousTitre: "Océan Gourmet",
    desc : "Délicatement préparé avec du poisson frais et des épices, Océan Gourmet est un pâté raffiné idéal pour vos tartines ou apéritifs.",
    imageUrl: pPoisson,
  },
  {
    id: 2,
    name: "Pâté de thon",
    sousTitre: "Thon Délice",
    desc : "Fait à partir de thon soigneusement sélectionné, Thon Délice est un plaisir savoureux qui sublime vos repas.",
    imageUrl: pThon,
  },
  {
    id: 3,
    name: "Pâté de crevette",
    sousTitre: "Crev'Crémeux",
    desc : "Savourez Crev'Crémeux, un pâté de crevettes onctueux et riche en saveurs marines.",
    imageUrl: pCrevette,
  },
  {
    id: 4,
    name: "Pâté de langouste",
    sousTitre: "Langouste Royale",
    desc : "Une spécialité exquise, Langouste Royale est un mélange raffiné de langoustes fraîches et d'épices.",
    imageUrl: pLangouste,
  },

];

export default pate;
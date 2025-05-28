import pate from '../assets/image/produit/pate.jpeg';
import mortadelle from '../assets/image/produit/mortadelle.jpeg';
import fume from '../assets/image/produit/fume.jpeg';
import poudre from '../assets/image/produit/poudre.jpg';
import cuisson from '../assets/image/produit/cuisson.jpeg';

const products = [
  {
    id: 1,
    name: "Pâtés",
    sousTitre: "Boîte de conserve | Bocale",
    imageUrl: pate,
  },
  {
    id: 2,
    name: "Mortadelle",
    sousTitre: "Boyau",
    imageUrl: mortadelle,
  },
  {
    id: 3,
    name: "Produits Fumés",
    sousTitre: "Doypack",
    imageUrl: fume,
  },
  {
    id: 4,
    name: "Produits Séchés",
    sousTitre: "Sachet | Bocale",
    imageUrl: poudre,
  },
  {
    id: 5,
    name: "Produits Transformés",
    sousTitre: "Boyau | Bocale",
    imageUrl: cuisson,
  },
];

export default products;
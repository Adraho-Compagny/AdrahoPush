import { BrowserRouter, Route, Routes } from "react-router-dom";
import TousEnUn from "./page/Accueille";
import LayoutPrimary from "./composant/Primary/LayoutPrimary";
import "./assets/styleAdraho.css";
import Accueille from "./page/Accueille";
import LayoutSecondary from "./composant/Secondary/LaoyutSecondary";
import Produits from "./page/Produits";
import Contact from "./page/Contact";
import Historique from "./page/Historique";
import Mission from "./page/Mission";
import Pate from "./composant/ProduitComponent/Pate";
import Mortadelle from "./composant/ProduitComponent/Mortadelle";
import Fume from "./composant/ProduitComponent/Fume";
import Transformer from "./composant/ProduitComponent/Transformer";
import Poudre from "./composant/ProduitComponent/Poudre";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPrimary />}>
            <Route index element={<Accueille />} />
          </Route>

          <Route path="/" element={<LayoutSecondary />}>
            <Route path="produits" element={<Produits />} />
            <Route path="contact" element={<Contact />} />
            <Route path="historique" element={<Historique />} />
            <Route path="missions" element={<Mission />} />

            {/* pour les produits  */}
            <Route path="produits/pate" element={<Pate />} />
            <Route path="produits/mortadelle" element={<Mortadelle />} />
            <Route path="produits/fume" element={<Fume />} />
            <Route path="produits/poudre" element={<Poudre />} />
            <Route path="produits/transforme" element={<Transformer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

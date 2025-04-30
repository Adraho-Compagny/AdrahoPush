import { X } from "lucide-react";
import React from "react";
const ModalProduit = ({ imageProduit, hideImg, stateImg }) => {
  return (
    <div className={`${stateImg ? "block" : "hidden"}`}>
      <div
        title="cliqué pour faire un retour"
        onClick={hideImg}
        className="fixed w-full h-screen z-50 top-0 left-0 bg-[#000000a3] cursor-pointer divBlur"
      ></div>

      <button
        title="cliqué pour faire un retour"
        onClick={hideImg}
        className="bg-white md:flex items-center fixed top-16 left-16 hidden
      justify-center rounded-full p-2 text-black hover:text-maintso z-50"
      >
        <X />
      </button>

      <img
        src={imageProduit}
        alt=""
        className="w-[100%] md:w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 px-4 imgProduit"
      />
    </div>
  );
};

export default ModalProduit;

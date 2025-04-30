import {
  ArrowRight,
  Facebook,
  Mail,
  MapPin,
  Phone,
  WatchIcon,
} from "lucide-react";
import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import MapMangatsiotra from "../composant/Map";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Défile jusqu'en haut
  }, []);
  return (
    <div className="pt-[7rem] px-8 md:px-[5rem] mb-4">
      <h1 className="text-maron font-bold text-[2em]">Contact</h1>
      <div className="grid md:grid-cols-12  md:px-[3rem] mt-6 w-full">
        <div className="md:col-span-5 bg-gray-100 flex items-center justify-center h-[20rem] md:h-auto">
          <MapMangatsiotra />
          
        </div>
        <div className="md:col-span-7 shadow-sm rounded-r-lg px-4 md:px-14 py-4 md:py-10">
          <h1 className="text-[25px] text-maintso font-bold">
            Information Précis
          </h1>
          <p>
            Vous avez des questions, <br className="hidden md:block" /> une
            sugestion, envie d'échanger ou de nous suivre ?
          </p>

          <hr className="my-4" />
          <p className="font-bold">
            N'hésitez pas à nous contacter, nous serons ravis de vous répondre
          </p>

          <div className="grid xl:grid-cols-2 gap-x-1">
            <div className="flex items-center justify-start space-x-4 my-3">
              <Phone className="text-maintso" />
              <p>+261 38 16 668 72</p>
            </div>

            <div className="flex items-center justify-start space-x-4 my-3">
              <FaWhatsapp className="text-maintso" />
              <p>+261 34 37 107 32</p>
            </div>

            <div className="flex items-center justify-start space-x-4 my-3">
              <MapPin className="text-maintso" />
              <p>Mangatsiotra à Manakara , régiion Fitovinany, Madagascar</p>
            </div>
          </div>

          <button className="flex items-center justify-center px-4 py-2 bg-maintso rounded-md text-white space-x-4 my-2 w-full md:w-auto">
            <p>Contacter sur WhatsApp</p>
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

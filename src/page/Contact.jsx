import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import ScrollReveal from "scrollreveal";
import EnvoieEmail from "../composant/EnvoieEmail";
import { FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-contact", {
      deley: 100,
      origin: "top",
      interval: 300,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Défile jusqu'en haut
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-slate-50 to-white pt-[7rem]">
      <div className="max-w-7xl mx-auto px-8 md:px-[5rem]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6">
          {/* Left Section - Contact Form */}
            <EnvoieEmail />

          {/* Right Section - Contact Info */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-6 ">
              {/* Contact Details */}
              <div className="bg-white rounded-xl p-6 " id="slide-contact">
                <h2 className="text-xl font-bold text-maron mb-4">Contacts</h2>

                <div className="space-y-3 ">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <Phone className="text-maintso" size={18} />
                    </div>
                    <div>
                      <p className="">+261 38 16 688 72</p>
                      
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <FaWhatsapp className="text-maintso" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">
                      +261 34 37 107 32
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <Mail className="text-maintso" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">
                        contact@adraho.mg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <MapPin className="text-maintso" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">
                        Manakara, Madagasikara
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*Réseaux sociaux */}
              <div className="bg-white rounded-xl p-6" id="slide-contact">
                <h2 className="text-xl font-bold text-maron mb-4">
                  Réseaux sociaux
                </h2>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-maintso rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488" />
                    </svg>
                  </div>

                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Facebook className="text-white" />
                  </div>

                  <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group shadow-lg hover:shadow-purple-500/30">
                    <Instagram className="text-white drop-shadow-sm group-hover:drop-shadow-md transition-all" />
                  </div>

                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Linkedin className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Schedule Section - Light Theme */}
            <div className="relative overflow-hidden" id="slide-contact">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl shadow-lg"></div>
              <div className="absolute inset-0 bg-white/50 rounded-2xl backdrop-blur-sm"></div>

              <div className="relative p-5 text-gray-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center backdrop-blur-sm border border-gray-200">
                    <Clock className="text-maron" size={18} />
                  </div>
                  <h2 className="text-lg font-bold text-maron">Nos horaires</h2>
                </div>

                <div className="space-y-3">
                  {/* Weekdays */}
                  <div className="group">
                    <div className="bg-white backdrop-blur-sm rounded-lg p-4 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-maintso rounded-full animate-ping"></div>
                          <div>
                            <h3 className="text-sm font-semibold text-gray-700">
                              Lundi - Vendredi
                            </h3>
                            <p className="text-maintso text-xs">
                              Jours ouvrables
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-800">
                            08h00 - 18h00
                          </p>
                          <p className="text-maintso text-xs">10h</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Saturday */}
                  <div className="group">
                    <div className="bg-white backdrop-blur-sm rounded-lg p-4 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-maintso rounded-full animate-ping"></div>
                          <div>
                            <h3 className="text-sm font-semibold text-gray-700">
                              Samedi
                            </h3>
                            <p className="text-maintso text-xs">
                              Horaires réduits
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-800">
                            8h00 - 17h
                          </p>
                          <p className="text-maintso text-xs">9h</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sunday */}
                  <div className="group">
                    <div className="bg-white backdrop-blur-sm rounded-lg p-4 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <div>
                            <h3 className="text-sm font-semibold text-gray-700">
                              Dimanche
                            </h3>
                            <p className="text-maintso text-xs">
                              Jour de repos
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-500">
                            Fermé
                          </p>
                          <p className="text-maintso text-xs">Repos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

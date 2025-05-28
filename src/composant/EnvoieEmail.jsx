import { Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EnvoieEmail = () => {
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "c41064f3-0be0-4afe-aef0-da9799e8e005");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setLoad(false);
        toast.success("Message envoyé avec succès !");
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setLoad(false);
        toast.error(res.message || "Erreur lors de l'envoi");
      }
    } catch (error) {
      setLoad(false);
      toast.error("Erreur lors de l'envoi du message");
    }
  };

  return (
    <div className="space-y-6 bg-white px-8 py-4 rounded-xl">
      <div className="text-center lg:text-left">
        <h1 className="text-maron font-bold text-[2em] mb-6" id="slide-contact">
          Contactez Adraho Company
        </h1>
        <p className="leading-relaxed max-w-2xl" id="slide-contact">
          Une question ? Une commande ? Une idée à partager ?<br />
          Nous sommes à l'écoute de notre communauté et
          <br />
          toujours ravis de vous lire !
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" id="slide-contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 transition-all duration-200 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 transition-all duration-200 placeholder-gray-400"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 transition-all duration-200 placeholder-gray-400"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl resize-none focus:ring-2 transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-maintso text-white py-4 px-8 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
        >
          {load ? (
            <p>Chargement ...</p>
          ) : (
            <>
              <Send size={20} /> <p> Envoyer votre message</p>
            </>
          )}
        </button>
      </form>

      <div id="slide-contact">
        <p>
          <strong className="text-maintso"> Adraho Company</strong> – Plus
          qu'une entreprise, une communauté engagée pour la mer, les pêcheurs et
          l'innovation locale.
        </p>
      </div>
    </div>
  );
};

export default EnvoieEmail;

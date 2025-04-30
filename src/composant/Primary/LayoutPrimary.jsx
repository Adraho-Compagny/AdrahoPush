import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const LayoutPrimary = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 100); // 50px pour déclencher l'effet
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div>
      <Header isScrolled={isScrolled} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPrimary;
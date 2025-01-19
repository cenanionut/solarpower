import React, { useEffect } from "react";
import "../App.css";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;

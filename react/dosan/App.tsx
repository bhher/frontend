import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSlider";
import UseCases from "./components/UseCases";
import Clients from "./components/Clients";
import Solutions from "./components/Solutions";
import ProductLineup from "./components/ProductLineup";
import SocialMedia from "./components/SocialMedia";
import SupportLinks from "./components/SupportLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <Hero />
      <UseCases />
      <Clients />
      <Solutions />
      <ProductLineup />
      <SocialMedia />
      <SupportLinks />
      <Footer />
    </div>
  );
}

export default App;

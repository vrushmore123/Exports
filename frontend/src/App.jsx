import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyProfile from "./src/components/CompanyProfile";
import AboutUs from "./AboutUs";
import Services from "./src/components/Services";
import VisionMission from "./src/components/VisionMission";
import Contact from "./src/components/Contact";
import SpicesAndFoodProducts from "./src/pages/SpicesAndFoodProducts";
import ColdPressedOils from "./src/pages/ColdPressedOils";
import Carpet from "./src/pages/Carpets";
import Pulses from "./src/pages/Pulses";
import AgriculturalProducts from "./src/pages/AgriculturalProducts";
import GemsAndImitationJewellery from "./src/pages/GemsAndImitationJewellery";
import "./App.css";
import ContactForm from "./src/components/Form";

function App() {
  const contactRef = useRef(null);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CompanyProfile
              onContactClick={handleContactClick}
              contactRef={contactRef}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/contact" element={<Contact contactRef={contactRef} />} />
        <Route
          path="/products/spicesandfoodproducts"
          element={<SpicesAndFoodProducts />}
        />
        <Route path="/products/coldpressedoils" element={<ColdPressedOils />} />
        <Route path="/products/carpets" element={<Carpet />} />
        <Route path="/products/pulses" element={<Pulses />} />
        <Route
          path="/products/agriculturalproducts"
          element={<AgriculturalProducts />}
        />
        <Route
          path="/products/gemsandimitationjewellery"
          element={<GemsAndImitationJewellery />}
        />
        <Route path="/form" element={<ContactForm />}/>
      </Routes>
    </Router>
  );
}

export default App;

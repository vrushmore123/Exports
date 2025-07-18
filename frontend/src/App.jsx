import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyProfile from "./src/components/CompanyProfile";
import AboutUs from "./src/components/AboutUs";
import Services from "./src/components/Services";
import VisionMission from "./src/components/VisionMission";
import Contact from "./src/components/Contact";
import "./App.css";

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
      </Routes>
    </Router>
  );
}

export default App;

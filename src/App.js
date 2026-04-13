import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import NavbarSection from "./components/Landing/NavbarSection";
import LandingPage from "./components/Landing/Landingpage";
import Routing from "./components/Routings/Routing";
import ScrollToHash from "./components/Landing/ScrollToHash";
import RegistrationForm from "./components/Services/RegistrationForm";

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <Routing />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <ScrollToHash />
      {/* <RegistrationForm /> */}
    </div>
  );
}

export default App;

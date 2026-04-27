import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Services from "./components/Services/Services";
import NavbarSection from "./components/Landing/NavbarSection";
import LandingPage from "./components/Landing/Landingpage";
import Routing from "./components/Routings/Routing";
import ScrollToHash from "./components/Landing/ScrollToHash";

import getInTouchImg from "./assets/getintouch.png";
import Getintouch from "./components/Landing/Getintouch";
import DashboardLayout from "./components/AdminDashboard/DashboardLayout";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="App">

  
      {!hideNavbar && <NavbarSection />}

      {!hideNavbar && <Routing />}


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>

      
      <ScrollToHash />

      {!hideNavbar && (
        <div
          className="getintouch-img"
          onClick={() => setShowPopup(true)}
        >
          <img src={getInTouchImg} alt="Get In Touch" />
        </div>
      )}

    
      {showPopup && !hideNavbar && (
        <Getintouch closePopup={() => setShowPopup(false)} />
      )}

    </div>
  );
}

 
export default App;
 
 


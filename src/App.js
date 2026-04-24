import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import NavbarSection from "./components/Landing/NavbarSection";
import LandingPage from "./components/Landing/Landingpage";
import Routing from "./components/Routings/Routing";
import ScrollToHash from "./components/Landing/ScrollToHash";
 
import getInTouchImg from "./assets/getintouch.png";
import Getintouch from "./components/Landing/Getintouch";
import StudentMembership from "./components/Membership/StudentMembership";
import Servicesgtregisterlanding from "./components/Register/Servicesgtregisterlanding";
 
function App() {
  const [showPopup, setShowPopup] = useState(false);
 
  return (
    <div className="App">
      <NavbarSection />
      <Routing />
 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
 
      <ScrollToHash />
 
      {/* <StudentMembership /> */}
 
      <div className="getintouch-img" onClick={() => setShowPopup(true)}>
        <img src={getInTouchImg} alt="Get In Touch" />
      </div>
 
      {showPopup && <Getintouch closePopup={() => setShowPopup(false)} />}
 
      {/* <Servicesgtregisterlanding /> */}
      {/* <StudentMembership /> */}
    </div>
  );
}
 
export default App;
 
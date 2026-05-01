import React from "react";
import { Routes, Route } from "react-router-dom";

import FamilyTree from "../Pages/FamilyTree";
import Gallery from "../Pages/Gallery";
import AboutUs from "../Landing/AboutUs";
import Getintouch from "../Landing/Getintouch";
import UserLogin from "../Pages/UserLogin";
import NavbarSection from "../Landing/NavbarSection";

function Routing() {
  return (
    <>
      <NavbarSection />

      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/familytree" element={<FamilyTree />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/getintouch" element={<Getintouch />} />
      </Routes>
    </>
  );
}

export default Routing;
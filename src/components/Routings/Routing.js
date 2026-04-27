import React from "react";
import { Routes, Route } from "react-router-dom";

import FamilyTree from "../Pages/FamilyTree";
import Gallery from "../Pages/Gallery";
import AboutUs from "../Landing/AboutUs";
import Getintouch from "../Landing/Getintouch";
import Login from "../Pages/Login";
import NavbarSection from "../Landing/NavbarSection";

function Routing() {
  return (
    <>
      <NavbarSection />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/familytree" element={<FamilyTree />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/getintouch" element={<Getintouch />} />
      </Routes>
    </>
  );
}

export default Routing;
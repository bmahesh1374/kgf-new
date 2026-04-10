import React from 'react'
import { Routes, Route } from "react-router-dom";
import FamilyTree from '../Pages/FamilyTree';
import Gallery from '../Pages/Gallery';
import AboutUs from '../Landing/AboutUs';

function Routing() {
  return (
  <>
        <Routes>
          <Route path="/familytree" element={<FamilyTree />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
  </>
  )
}

export default Routing
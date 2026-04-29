import React from "react";
import { Routes, Route } from "react-router-dom";

import Student from "../Pages/Student";
import Agriculture from "../Pages/Agriculture";
import Education from "../Pages/Education";
import Business_man from "../Pages/Business_man";
import Others from "../Pages/Others";
import Events from "../Landing/Events";
import Blood_Donate from "../Pages/Blood_Donate";
import DEvents from "../Pages/DEvents";
import ViewJob from "../Pages/ViewJob";
import AdminDashboardHome from "./AdminDashboardHome";
import Telangana from "../Pages/Telangana";
import AndhraPradesh from "../Pages/AndhraPradesh";
import Gujarat from "../Pages/Gujarat";
import Karnataka from "../Pages/Karnataka";
import Nri from "../Pages/Nri";
import Organization from "../Pages/Organization";
import OutsideOfIndia from "../Pages/OutsideOfIndia";
import Organizations from "../Pages/Organizations";
import Tamilnadu from "../Pages/Tamilnadu";



function AdminDashboardRoutes() {
  return (
    <Routes>
      <Route path="/admindashboard" element={<AdminDashboardHome/>} />
      <Route path="/telangana" element={<Telangana/>} />
      <Route path="/andhra-pradesh" element={<AndhraPradesh/>} />
      <Route path="/gujarat" element={<Gujarat/>} />
       <Route path="/karnataka" element={<Karnataka/>} />
       <Route path="/nri" element={<Nri/>} />
       <Route path="/organization" element={<Organization/>} />
       <Route path="/outside-of-india" element={<OutsideOfIndia/>} />
       <Route path="/organizations" element={<Organizations/>} />
       <Route path="/tamil-nadu" element={<Tamilnadu/>} />

    </Routes>
  );
}

export default AdminDashboardRoutes;

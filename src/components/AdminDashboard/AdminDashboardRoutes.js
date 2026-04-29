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
import AdminEvents from "../Pages/AdminEvents"



function AdminDashboardRoutes() {
  return (
    <Routes>
      <Route path="/admindashboard" element={<AdminDashboardHome/>} />
      <Route path="/events" element={<AdminEvents />} />
    </Routes>
  );
}

export default AdminDashboardRoutes;

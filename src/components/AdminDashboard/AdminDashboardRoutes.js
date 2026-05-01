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
import Telangana from "../Pages/Telangana";
import AndhraPradesh from "../Pages/AndhraPradesh";
import Gujarat from "../Pages/Gujarat";
import Karnataka from "../Pages/Karnataka";
import Nri from "../Pages/Nri";
import Organization from "../Pages/Organization";
import OutsideOfIndia from "../Pages/OutsideOfIndia";
import Organizations from "../Pages/Organizations";
import Tamilnadu from "../Pages/Tamilnadu";
import AndhraStudentTable from "../Pages/AndhraStudentTable";
import AdminStTbleView from "../Pages/AdminStTbleView";
import AdminAddEvents from "../Pages/AdminAddEvents";
import AdminEventsTable from "../Pages/AdminEventsTable";
import AdminEventPreview from "../Pages/AdminEventPreview";
import AdminDonations from "../Pages/AdminDonations";
import AdminDonorForm from "../Pages/AdminDonorForm";


function AdminDashboardRoutes() {
  return (
    <Routes>
 
     <Route path="/" element={<AdminDashboardHome/>} />
      <Route path="/admindashboardhome" element={<AdminDashboardHome/>} />
      <Route path="/events" element={<AdminEvents />} />
      <Route path="/telangana" element={<Telangana/>} />
      <Route path="/andhra-pradesh" element={<AndhraPradesh/>} />
      <Route path="/gujarat" element={<Gujarat/>} />
       <Route path="/karnataka" element={<Karnataka/>} />
       <Route path="/nri" element={<Nri/>} />
       <Route path="/organization" element={<Organization/>} />
       <Route path="/outside-of-india" element={<OutsideOfIndia/>} />
       <Route path="/organizations" element={<Organizations/>} />
       <Route path="/tamil-nadu" element={<Tamilnadu/>} />
       <Route path="/andhra-student-table" element={<AndhraStudentTable/>} />
       <Route path="/AdminStTbleView" element={<AdminStTbleView/>}/>
        <Route path="/adminAddEvents" element = {<AdminAddEvents  />} />
        <Route path="/adminEventsTable" element = {<AdminEventsTable />} />
        <Route path="/adminEventsPreview" element = {<AdminEventPreview />} />
        <Route path="/donations" element ={<AdminDonations />} />
        <Route path="/addDonor" element ={<AdminDonorForm />} />
  
    </Routes>
  );
}

export default AdminDashboardRoutes;

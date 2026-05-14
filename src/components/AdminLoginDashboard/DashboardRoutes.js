import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Student from "../Pages/Student";
import Agriculture from "../Pages/Agriculture";
import BusinessDashboard from "../Pages/BusinessDashboard";
import Others from "../Pages/Others";
import Events from "../Landing/Events";
import BloodDonateDashboard from "../Pages/BloodDonateDashboard";
import DEvents from "../Pages/DEvents";
import ViewJob from "../Pages/ViewJob";
import AgriPostRequirement from "../Pages/AgriPostRequirement";

import EmployeeDashboard from "../Pages/EmployeeDashboard";
import EmployeePostDashboard from "../Pages/EmployeePostDashboard";
import EmployeeViewDashboard from "../Pages/EmployeeViewDashboard";

import ApplicationTracker from "../Pages/ApplicationTracker";
import Applcationform from "../Pages/Applcationform";
import JobsStatus from "../Pages/JobsStatus";


function DashboardRoutes() {
  return (

    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/student" element={<Student />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/employee" element={<EmployeeDashboard />} />
      <Route path="/business" element={<BusinessDashboard />} />
      <Route path="/others" element={<Others />} />
      <Route path="/devents" element={<DEvents />} />
      <Route path="/blood" element={<BloodDonateDashboard />} />
      <Route path="/viewjob" element={<ViewJob />} />

      <Route path="/postrequirement" element={<AgriPostRequirement />} />
      <Route path="/jobpost" element={<EmployeePostDashboard />} />
      <Route path="/jobpreview" element={<EmployeePostDashboard />} />
      <Route path="/employresponses" element={<EmployeeViewDashboard />} />
      


      <Route path="/postagrirequirement" element={<AgriPostRequirement />} />
      <Route path="/application-tracker" element={<ApplicationTracker />}/>
      <Route path="/view/:id" element={<ApplicationTracker />}/>
      <Route path="/application-form" element={<Applcationform/>}/>
       <Route path="/jobsstatus" element={<JobsStatus/>}/>

    </Routes>

  );
}

export default DashboardRoutes;

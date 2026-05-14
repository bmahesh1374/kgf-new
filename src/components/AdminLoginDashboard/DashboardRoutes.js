import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Student from "../Pages/Student";
import Agriculture from "../Pages/Agriculture";
import Education from "../Pages/Education";
import Business_man from "../Pages/Business_man";
import Others from "../Pages/Others";
import Events from "../Landing/Events";
import Blood_Donate from "../Pages/Blood_Donate";
import DEvents from "../Pages/DEvents";
import ViewJob from "../Pages/ViewJob";
import AgriPostRequirement from "../Pages/AgriPostRequirement";
import ApplicationTracker from "../Pages/ApplicationTracker";
import Applcationform from "../Pages/Applcationform";
import JobsStatus from "../Pages/JobsStatus";


function DashboardRoutes() {
  return (

    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/student" element={<Student />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/education" element={<Education />} />
      <Route path="/business" element={<Business_man />} />
      <Route path="/others" element={<Others />} />
      <Route path="/devents" element={<DEvents />} />
      <Route path="/blood" element={<Blood_Donate />} />
      <Route path="/viewjob" element={<ViewJob />} />
      <Route path="/postagrirequirement" element={<AgriPostRequirement />} />
      <Route path="/application-tracker" element={<ApplicationTracker />}/>
      <Route path="/view/:id" element={<ApplicationTracker />}/>
      <Route path="/application-form" element={<Applcationform/>}/>
       <Route path="/jobsstatus" element={<JobsStatus/>}/>
    </Routes>

  );
}

export default DashboardRoutes;

import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../Styles/AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* HEADER */}

      <ul className="admin-sidebar-menu">

        <li>
          <div>
       
            <Link to="/admindashboard/admindashboard"><span className="admin-menu-item">Registrations</span></Link >
         </div>
        </li>
        <li>
          <div>
       
            <Link to="/admindashboard"><span className="admin-menu-item">Blood Donors</span></Link >
         </div>
        </li>
         <li>
          <div>
          
            <Link to="/admindashboard"><span className="admin-menu-item">Events</span></Link >
         </div>
        </li>
         <li>
          <div>

           <Link to="/admindashboard">
              <span  className="admin-menu-item">Jobs</span>
            </Link> 

         </div>
        </li>
         <li>
          <div>
           
            <Link to="/admindashboard"><span className="admin-menu-item">Donations</span></Link>
         </div>
        </li>
         <li>
          <div>
            
            <Link to="/admindashboard"><span className="admin-menu-item">Board Members</span></Link>
         </div>
        </li>
         <li>
          <div>
            
            <Link to="/admindashboard"><span className="admin-menu-item">OurPartners</span></Link>
         </div>
         
        </li>
         

        </ul>
      
    </div>
  );
}

export default AdminSidebar;

import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../Styles/Sidebar.css";

function Sidebar() {
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
       
            <Link to="/dashboard/dashboardhome"><span className="admin-menu-item">Dashboard</span></Link >
         </div>
        </li>
        <li>
          <div>
       
            <Link to="/dashboard/student"><span className="admin-menu-item">Student</span></Link >
         </div>
        </li>
         <li>
          <div>
          
            <Link to="/dashboard/agriculture"><span className="admin-menu-item">Agriculture</span></Link >
         </div>
        </li>
         <li>
          <div>

           <Link to="/dashboard/education">
              <span  className="admin-menu-item">Education</span>
            </Link> 

         </div>
        </li>
         <li>
          <div>
           
            <Link to="/dashboard/business"><span className="admin-menu-item">Business Man</span></Link>
         </div>
        </li>
         <li>
          <div>
            
            <Link to="/dashboard/others"><span className="admin-menu-item">Others</span></Link>
         </div>
        </li>
         <li>
          <div>
            
            <Link to="/dashboard/devents"><span className="admin-menu-item">Events</span></Link>
         </div>
         
        </li>
         <li>
          <div>
            
            <Link to="/dashboard/blood"><span className="admin-menu-item">Donate Blood</span></Link>
         </div>
         
        </li>

        </ul>
      
    </div>
  );
}

export default Sidebar;

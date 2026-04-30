import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "../Styles/Sidebar.css";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* HEADER */}

      <ul className="sidebar-menu">

        <li>
            {/* <NavLink className="menu-item" to="/dashboard/dashboardhome">Dashboard</NavLink > */}
                      <NavLink
                        to="/dashboard/"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Dashboard
                      </NavLink> 
        </li>

        <li>

                    <NavLink
                        to="/dashboard/student"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Student
                      </NavLink> 

         {/* <NavLink to="/dashboard/student"><span className="menu-item">Student</span></NavLink > */}
        </li>
         <li>
              <NavLink
                        to="/dashboard/agriculture"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Agriculture
                      </NavLink> 
            {/* <NavLink to="/dashboard/agriculture"><span className="menu-item">Agriculture</span></NavLink > */}
        
        </li>
         <li>

          <NavLink
                        to="/dashboard/education"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Education
                      </NavLink> 
           {/* <NavLink to="/dashboard/education">
              <span  className="menu-item">Education</span>
            </NavLink>  */}

        </li>
         <li>
           <NavLink
                        to="/dashboard/business"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Business Man
                      </NavLink> 

            {/* <NavLink to="/dashboard/business"><span className="menu-item">Business Man</span></NavLink> */}
        </li>
         <li>
              <NavLink
                        to="/dashboard/others"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Others
                      </NavLink> 

            {/* <NavLink to="/dashboard/others"><span className="menu-item">Others</span></NavLink> */}
         
        </li>
         <li>
              <NavLink
                        to="/dashboard/devents"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Events
                      </NavLink> 
            {/* <NavLink to="/dashboard/devents"><span className="menu-item">Events</span></NavLink> */}
        </li>
         <li>

          <NavLink
                        to="/dashboard/blood"
                        className={({ isActive }) =>
                          isActive ? "menu-item active" : "menu-item"
                        }>
                        Donate Blood
                      </NavLink> 
            
            {/* <NavLink to="/dashboard/blood"><span className="menu-item">Donate Blood</span></NavLink> */}
        </li>

        </ul>
      
    </div>
  );
}

export default Sidebar;

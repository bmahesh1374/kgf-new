import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdDownload} from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import "../Styles/AdminBoardMember.css";
const AdminBoardMembers = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-boardmem-container">
      <h2>Board Members</h2>
      <div className="kgf-admin-boradmem-flex-container">
        <div className="kgf-admin-boradmem-checkbox">
          <input type="checkbox" />
          <img src={whatsappIcon} alt="img" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-donation-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-donation-search">
          <input type="text" placeholder="Search by Event location......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-donation-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-donation-delete">
          <button>Delete</button>
        </div>
        <IoFilter />
      </div>
      <div className="kgf-admin-donation-add-btn mb-3">
        <button onClick={() => navigate("/admindashboard/addmember")}>Add Member +</button>
      </div>

      <table>
        <thead className="admin-donation-header">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Member Name</th>
            <th>Professional Title</th>
            <th>Current Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Kusam kumar Jetti</td>
            <td>Founder of KGF</td>
            <td>Founder</td>
            
            <td>
              <button onClick={()=>navigate('/admindashboard/addmember')} className='kgf-admin-view-btn'>View</button>
            </td>
          </tr>
         
        </tbody>
      </table>  
    </div>
  );
};

export default AdminBoardMembers;

import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdDownload} from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import "../Styles/AdminDonations.css";
const AdminDonations = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-donation-container">
      <h2>Donations</h2>
      <div className="kgf-admin-donation-flex-container">
        <div className="kgf-admin-donation-checkbox">
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
        <button onClick={() => navigate("/admindashboard/addDonor")}>Add Donor +</button>
      </div>

      <table>
        <thead className="admin-donation-header">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>District</th>
            <th>Village</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>987773443</td>
            <td>3000</td>
            <td>Eluru</td>
            <td>Dubacherla</td>
            <td>
              <button className='kgf-admin-view-btn'>View</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>987773443</td>
            <td>3000</td>
            <td>Eluru</td>
            <td>Dubacherla</td>
            <td>
              <button className='kgf-admin-view-btn'>View</button>
            </td>
          </tr>
        </tbody>
      </table>  
    </div>
  );
};

export default AdminDonations;

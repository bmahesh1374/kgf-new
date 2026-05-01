import React from 'react';
import { useNavigate } from "react-router-dom";
import msgicon from "../../assets/msgicon.png";
import { IoMdDownload} from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png"
import "../Styles/AdminEventsTable.css";
const AdminEventsTable = () => {
    const navigate = useNavigate();
  return (
    <div className='admin-events-table-container'>
      <h2>Events</h2>
      <div className="admin-events-table-total">
        <p>Total Responses :- 50</p>
      </div>
      <div className="kgf-admin-events-table-flex-container">
        <div className="kgf-admin-events-table-ckeckbox">
          <input type="checkbox" />
          <img src={whatsappIcon} alt="img" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-events-table-ckeckbox">
          <input type="checkbox" />
          <img src={msgicon} alt="img" />
          <label>Email</label>
        </div>
        <div className="kgf-admin-events-table-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-events-table-search">
          <input type="text" placeholder="Search by Event location......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-events-table-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-events-table-delete">
          <button>Delete</button>

        </div>
        <IoFilter />
      </div>
      <div className="kgf-admin-events-table-add-btn mb-3">
        <button>Add +</button>
      </div>

      <table>
        <thead className='admin-events-table-header'>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>College Name</th>
            <th>Course</th>
            <th>Blood Group</th>
            <th>District</th>
            <th>Village</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Surya</td>
            <td>Gitam</td>
            <td>B tech Cse</td>
            <td>A+</td>
            <td>Eluru</td>
            <td>Dubacherla</td>
            <td>
          <button>View</button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Surya</td>
            <td>Gitam</td>
            <td>B tech Cse</td>
            <td>A+</td>
            <td>Eluru</td>
            <td>Dubacherla</td>
            <td>
              <button>View</button>
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminEventsTable;
